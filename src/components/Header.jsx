import React from "react"
import Logo from "./img/logo.png"
import Aavatar from "./img/avatar.png"
import { MdShoppingBasket } from "react-icons/md"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth"
import { app } from "../firebase.config"
import { useStateValue } from "../context/StateProvider"
import { actionType } from "../context/reducer"

const Header = () => {
  // setting up neccessary initializations for authentication
  const firebaseAuth = getAuth(app)
  const provider = new GoogleAuthProvider()
  const [{ user }, dispatch] = useStateValue()
  // handler for authentication
  const login = async () => {
    if (!user) {
      const {
        user: { refreshToken, providerData },
      } = await signInWithPopup(firebaseAuth, provider)
      dispatch({ type: actionType.SET_USER, user: providerData[0] })
      localStorage.setItem("user", JSON.stringify(providerData[0]))
    }
  }
  return (
    <header className="z-50 w-screen p-6 px-16">
      {/* For desktop and tablets  */}
      <div className="hidden md:flex w-full h-full items-center justify-between">
        {/* Logo and Brand Name */}
        <Link to="/" className="flex items-center gap-2">
          <img src={Logo} alt="logo" className="w-8 object-cover" />
          <p className="text-headingColor text-xl font-bold">City</p>
        </Link>
        {/* Navbar links, Cart icons and Avatar Image */}
        <div className="flex items-center gap-8">
          <ul className="flex items-center gap-8">
            <li className="text-base text-textColor hover:text-headingColor transition-all duration-100 ease-in-out cursor-pointer">
              Home
            </li>
            <li className="text-base text-textColor hover:text-headingColor transition-all duration-100 ease-in-out cursor-pointer">
              Menu
            </li>
            <li className="text-base text-textColor hover:text-headingColor transition-all duration-100 ease-in-out cursor-pointer">
              About Us
            </li>
            <li className="text-base text-textColor hover:text-headingColor transition-all duration-100 ease-in-out cursor-pointer">
              Service
            </li>
          </ul>
          <div className="relative flex items-center justify-center">
            <MdShoppingBasket className="text-textColor text-2xl cursor-pointer" />
            <div className="w-5 h-5 rounded-full bg-cartNumBg flex justify-center items-center absolute -top-2 -right-2">
              <p className="text-sm text-white font-semibold">0</p>
            </div>
          </div>
          <div className="relative">
            <motion.img
              onClick={login}
              whileTap={{ scale: 0.8 }}
              src={user ? user.photoURL.split("=")[0] : Aavatar}
              alt="user-profile"
              className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full"
            />
          </div>
        </div>
      </div>

      {/* For mobile phones  */}
      <div className="flex md:hidden w-full h-full"></div>
    </header>
  )
}

export default Header
