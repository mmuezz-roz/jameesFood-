"use server"

import { revalidatePath } from "next/cache"
import { createClient } from "@/lib/supabase/server"
import { z } from "zod"

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
  const { error } = await supabase.from("contact_enquiries").insert(parsed.data)

  if (error) {
    console.error("Contact form error:", error)
    return { error: "Something went wrong. Please try again or WhatsApp us directly." }
  }

  revalidatePath("/contact")
  return { success: true }
}
