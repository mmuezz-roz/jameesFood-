"use server"

import { revalidatePath } from "next/cache"
import { createClient } from "@/lib/supabase/server"
import { z } from "zod"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

const schema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Valid email required"),
  type: z.enum(["consumer", "retailer"]),
  message: z.string().min(10, "Please write at least 10 characters"),
})

export type ContactFormState = {
  success?: boolean
  error?: string
  fieldErrors?: Record<string, string>
}

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const raw = {
    name: formData.get("name"),
    email: formData.get("email"),
    type: formData.get("type"),
    message: formData.get("message"),
  }

  const parsed = schema.safeParse(raw)
  if (!parsed.success) {
    const fieldErrors: Record<string, string> = {}
    parsed.error.errors.forEach((e) => {
      if (e.path[0]) fieldErrors[String(e.path[0])] = e.message
    })
    return { error: "Please fix the errors below", fieldErrors }
  }

  const supabase = await createClient()
  const { error } = await supabase.from("contact_enquiries").insert([parsed.data] as any)

  if (error) {
    console.error("Contact form error:", error)
    return { error: "Something went wrong. Please try again or WhatsApp us directly." }
  }

  try {
    const htmlEmail = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px; background-color: #FAFAF8; color: #111010;">
        <div style="background-color: #ffffff; border: 1px solid rgba(17,16,16,0.06); border-radius: 16px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.03);">
          <div style="padding: 32px; border-bottom: 1px solid rgba(17,16,16,0.06);">
            <p style="font-size: 12px; text-transform: uppercase; letter-spacing: 2px; color: #111010; opacity: 0.4; margin: 0 0 8px 0; font-weight: 600;">New Inquiry</p>
            <h1 style="margin: 0; font-size: 24px; font-weight: 700; color: #111010;">${parsed.data.type === "retailer" ? "Retail Partnership Request" : "Customer Message"}</h1>
          </div>
          <div style="padding: 32px;">
            <div style="margin-bottom: 24px;">
              <p style="margin: 0 0 4px 0; font-size: 12px; color: #111010; opacity: 0.5; text-transform: uppercase; font-weight: 600; letter-spacing: 1px;">From</p>
              <p style="margin: 0; font-size: 16px; font-weight: 500;">${parsed.data.name}</p>
              <p style="margin: 4px 0 0 0; font-size: 14px;"><a href="mailto:${parsed.data.email}" style="color: #E8A000; text-decoration: none;">${parsed.data.email}</a></p>
            </div>
            <div>
              <p style="margin: 0 0 8px 0; font-size: 12px; color: #111010; opacity: 0.5; text-transform: uppercase; font-weight: 600; letter-spacing: 1px;">Message</p>
              <div style="background-color: #FAFAF8; border: 1px solid rgba(17,16,16,0.04); border-radius: 12px; padding: 20px; font-size: 15px; line-height: 1.6; color: rgba(17,16,16,0.8); white-space: pre-wrap;">${parsed.data.message}</div>
            </div>
          </div>
        </div>
        <p style="text-align: center; font-size: 12px; color: rgba(17,16,16,0.4); margin-top: 32px;">
          Sent securely from Jamees Food Website
        </p>
      </div>
    `;

    await resend.emails.send({
      from: "Jamees Food Notifications <onboarding@resend.dev>",
      to: "info@jameesfood.com",
      subject: `New Contact Request: ${parsed.data.type === "retailer" ? "Retailer" : "Consumer"}`,
      text: `Name: ${parsed.data.name}\nEmail: ${parsed.data.email}\nType: ${parsed.data.type}\n\nMessage:\n${parsed.data.message}`,
      html: htmlEmail,
    })
  } catch (emailError) {
    console.error("Failed to send email notification:", emailError)
  }

  revalidatePath("/contact")
  return { success: true }
}
