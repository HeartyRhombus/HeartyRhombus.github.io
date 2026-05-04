import 'bootstrap/dist/css/bootstrap.min.css'
import './globals.css'
import Navigation from './_components/Navigation'

export const metadata = {
  title: "Kayla B's Portfolio",
  description: 'An online portfolio showcasing my projects and skills.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-full flex flex-col App">
        <Navigation />
        <main>{children}</main>
      </body>
    </html>
  )
}
