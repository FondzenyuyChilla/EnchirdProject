import './globals.css'

export const metadata = {
  title: 'Recipe Finder',
  description: 'Discover delicious recipes from around the world',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}