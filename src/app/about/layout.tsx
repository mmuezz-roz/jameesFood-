import { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Jamees Food's mission to craft 100% natural ice candies and innovative snacks that bring smiles to every age.",
  openGraph: {
    title: "About Us | Jamees Food",
    description: "Learn about Jamees Food's mission to craft 100% natural ice candies and innovative snacks that bring smiles to every age.",
    url: "https://jameesfood.com/about",
  }
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
