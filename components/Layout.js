'use client'
import Link from 'next/link'
import { HeartIcon } from '@heroicons/react/24/solid'
import { usePathname } from 'next/navigation'

export default function Layout({ children }) {
  const pathname = usePathname()

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-primary">RecipeFinder</span>
            </Link>
            {pathname !== '/' && (
              <Link href="/" className="text-gray-600 hover:text-primary">
                ← Back to Search
              </Link>
            )}
          </div>
        </nav>
      </header>
      <main className="flex-grow">{children}</main>
      <footer className="bg-gray-100 mt-12 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-600">
          <p>© 2025 RecipeFinder. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}