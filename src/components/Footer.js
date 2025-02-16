import React from 'react'

export default function Footer() {
  return (
    <footer id='contact' className="py-8 bg-gray-50 text-center text-sm text-gray-500">
      &copy; {new Date().getFullYear()} IntoWine Consult. All rights reserved.
      <br />
      Contact us:{" "}
      <a href="mailto:info@intowineconsult.com" className="text-indigo-600 hover:underline">
        info@intowineconsult.com
      </a>
    </footer>
  )
}
