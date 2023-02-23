import React from "react"
import Logo from "./img/logo.png"

const Header = () => {
  return (
    <div className="z-50 w-screen p-6 px-16">
      {/* For desktop and tablets  */}
      <div className="hidden md:flex w-full h-full p-4">
        <img src={Logo} alt="logo" className="w-8 object-cover" />
        <p className="text-headingColor text-xl font-bold">City</p>
      </div>

      {/* For mobile phones  */}
      <div className="flex md:hidden w-full h-full0 p-4"></div>
    </div>
  )
}

export default Header
