export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      categories: {
        Row: {
          id: string
          name: string
          slug: string
          color_theme: string | null
          description: string | null
          hero_public_id: string | null
        }
        Insert: {
          id?: string
          name: string
          slug: string
          color_theme?: string | null
          description?: string | null
          hero_public_id?: string | null
        }
        Update: {
          id?: string
          name?: string
          slug?: string
          color_theme?: string | null
          description?: string | null
          hero_public_id?: string | null
        }
      }
      products: {
        Row: {
          id: string
          name: string
          slug: string
          tagline: string | null
          description: string | null
          category_id: string | null
          image_public_id: string | null
          gallery_public_ids: string[] | null
          dietary_tags: string[] | null
          ingredients: Json | null
          nutritional_info: Json | null
          is_featured: boolean
          sort_order: number
          created_at: string
        }
        Insert: {
          id?: string
          name: string
          slug: string
          tagline?: string | null
          description?: string | null
          category_id?: string | null
          image_public_id?: string | null
          gallery_public_ids?: string[] | null
          dietary_tags?: string[] | null
          ingredients?: Json | null
          nutritional_info?: Json | null
          is_featured?: boolean
          sort_order?: number
          created_at?: string
        }
        Update: {
          id?: string
          name?: string
          slug?: string
          tagline?: string | null
          description?: string | null
          category_id?: string | null
          image_public_id?: string | null
          gallery_public_ids?: string[] | null
          dietary_tags?: string[] | null
          ingredients?: Json | null
          nutritional_info?: Json | null
          is_featured?: boolean
          sort_order?: number
          created_at?: string
        }
      }
      newsletter_subscribers: {
        Row: {
          id: string
          email: string
          subscribed_at: string
        }
        Insert: {
          id?: string
          email: string
          subscribed_at?: string
        }
        Update: {
          id?: string
          email?: string
          subscribed_at?: string
        }
      }
      contact_enquiries: {
        Row: {
          id: string
          name: string | null
          email: string | null
          type: "consumer" | "retailer" | null
          message: string | null
          created_at: string
        }
        Insert: {
          id?: string
          name?: string | null
          email?: string | null
          type?: "consumer" | "retailer" | null
          message?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          name?: string | null
          email?: string | null
          type?: "consumer" | "retailer" | null
          message?: string | null
          created_at?: string
        }
      }
    }
  }
}

export type Category = Database["public"]["Tables"]["categories"]["Row"]
export type Product = Database["public"]["Tables"]["products"]["Row"]
export type NewsletterSubscriber = Database["public"]["Tables"]["newsletter_subscribers"]["Row"]
export type ContactEnquiry = Database["public"]["Tables"]["contact_enquiries"]["Row"]

export type ProductWithCategory = Product & {
  categories: Category | null
}
