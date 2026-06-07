import { NextResponse } from "next/server"
import { createClient } from "@/lib/supabase/server"
import { z } from "zod"

const schema = z.object({
  email: z.string().email("Please enter a valid email address"),
})

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { email } = schema.parse(body)

    const supabase = await createClient()
    const { error } = await supabase
      .from("newsletter_subscribers")
      .insert({ email })

    if (error) {
      // Duplicate email — treat as success (idempotent)
      if (error.code === "23505") {
        return NextResponse.json({ message: "Already subscribed" }, { status: 200 })
      }
      throw error
    }

    return NextResponse.json({ message: "Subscribed successfully" }, { status: 200 })
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json({ error: err.errors[0].message }, { status: 400 })
    }
    console.error("Newsletter error:", err)
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 })
  }
}
