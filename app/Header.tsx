import Link from "next/link"
import React from 'react'

function Header() {
  return (
    <header className="p-5 bg-cyan-900">
      <Link href="/" className="px-2 py-1 bg-cyan-200 text-black-500 rounded-lg">Landing Page</Link>
      <Link href="/imageCollection" className="px-2 py-1 bg-cyan-200 text-black-500 rounded-lg">Image Collection</Link>
    </header>
  )
}

export default Header;
