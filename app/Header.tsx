import Link from "next/link"
import React from 'react'

function Header() {
  return (
    <header className="p-5 bg-black">
      <Link href="/" className="px-2 py-1 bg-white text-black-500 rounded-lg">Landing Page</Link>
    </header>
  )
}

export default Header;
