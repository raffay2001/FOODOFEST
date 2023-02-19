import React from "react"

const Header = () => {
  return (
    <div className="z-50 w-screen bg-slate-300 p-6 px-16">
      {/* For desktop and tablets  */}
      <div className="hidden md:flex w-full h-full bg-red-600 p-4"></div>

      {/* For mobile phones  */}
      <div className="flex md:hidden w-full h-full bg-blue-500 p-4"></div>
    </div>
  )
}

export default Header
