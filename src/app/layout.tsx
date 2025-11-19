import "@/app/globals.css"

export const metadata = {
  title: "Product Catalog",
  description: "Product catalog with infinite scroll",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
