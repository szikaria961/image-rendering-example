import Link from "next/link"
import React from 'react'

function Header() {
  return (
    <header className="p-5 bg-cyan-900">
      <Link href="/" className="px-2 py-1 bg-cyan-200 text-black-500 rounded-lg m-2">Landing Page</Link>
      <Link href="/imageCollection" className="px-2 py-1 bg-cyan-200 text-black-500 rounded-lg m-2">Image Collection</Link>
      <Link href="/fruits" className="px-2 py-1 bg-cyan-200 text-black-500 rounded-lg">Fruits</Link>
    </header>
  )
}

export default Header;
