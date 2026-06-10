import { createClient as createVanillaClient } from "@supabase/supabase-js"
import type { Database } from "./types"

export function createStaticClient() {
  return createVanillaClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )
}
