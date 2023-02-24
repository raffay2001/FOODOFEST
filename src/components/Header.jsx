import React, { useState } from "react"
import Logo from "./img/logo.png"
import Aavatar from "./img/avatar.png"
import { MdShoppingBasket, MdAdd, MdLogout } from "react-icons/md"
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
  // fecthing the global state
  const [{ user }, dispatch] = useStateValue()
  // other states for showing the menu
  const [showMenu, setShowMenu] = useState(false)
  // handler for authentication (login)
  const login = async () => {
    if (!user) {
      const {
        user: { refreshToken, providerData },
      } = await signInWithPopup(firebaseAuth, provider)
      dispatch({ type: actionType.SET_USER, user: providerData[0] })
      localStorage.setItem("user", JSON.stringify(providerData[0]))
    }
  }
  //handler for logout
  const logout = () => {
    setShowMenu(false)
    localStorage.clear()
    dispatch({ type: actionType.SET_USER, user: null })
  }
  return (
    <header className="z-50 w-screen p-3 px-4 md:p-3 md:px-16">
      {/* For desktop and tablets  */}
      <div className="hidden md:flex w-full h-full items-center justify-between">
        {/* Logo and Brand Name */}
        <Link to="/" className="flex items-center gap-2">
          <img src={Logo} alt="logo" className="w-8 object-cover" />
          <p className="text-headingColor text-xl font-bold">City</p>
        </Link>
        {/* Navbar links, Cart icons and Avatar Image */}
        <div className="flex items-center gap-8">
          <motion.ul
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 200 }}
            className="flex items-center gap-8"
          >
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
          </motion.ul>
          <div className="relative flex items-center justify-center">
            <MdShoppingBasket className="text-textColor text-2xl cursor-pointer" />
            <div className="w-5 h-5 rounded-full bg-cartNumBg flex justify-center items-center absolute -top-2 -right-2">
              <p className="text-sm text-white font-semibold">0</p>
            </div>
          </div>
          <div className="relative">
            <motion.img
              onClick={user ? () => setShowMenu((prevShowMenu) => !prevShowMenu) : login}
              whileTap={{ scale: 0.8 }}
              src={user ? user.photoURL.split("=")[0] : Aavatar}
              alt="user-profile"
              className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full"
            />
            {showMenu && (
              <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.6 }}
                className="w-40 flex flex-col bg-gray-50 shadow-xl rounded-lg absolute top-12 right-0"
              >
                {user && user.email === "raffay.ahmed009@gmail.com" && (
                  <Link to="/createItem">
                    <p className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base">
                      New Item <MdAdd />
                    </p>
                  </Link>
                )}
                <p
                  className="m-2 p-2 rounded-md flex items-center justify-center bg-gray-200 gap-3 cursor-pointer hover:bg-gray-300 transition-all duration-100 ease-in-out text-textColor text-base"
                  onClick={logout}
                >
                  Logout <MdLogout />
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* For mobile phones  */}
      <div className="flex justify-between items-center w-full h-full md:hidden">
        {/* Cart Information */}
        <div className="relative flex items-center justify-center">
          <MdShoppingBasket className="text-textColor text-2xl cursor-pointer" />
          <div className="w-5 h-5 rounded-full bg-cartNumBg flex justify-center items-center absolute -top-2 -right-2">
            <p className="text-sm text-white font-semibold">0</p>
          </div>
        </div>
        {/* Logo and Brand Name */}
        <Link to="/" className="flex items-center gap-2">
          <img src={Logo} alt="logo" className="w-8 object-cover" />
          <p className="text-headingColor text-xl font-bold">City</p>
        </Link>
        {/* User Avatar and Dropdown */}
        <div className="relative">
          <motion.img
            onClick={user ? () => setShowMenu((prevShowMenu) => !prevShowMenu) : login}
            whileTap={{ scale: 0.8 }}
            src={user ? user.photoURL.split("=")[0] : Aavatar}
            alt="user-profile"
            className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full"
          />
          {showMenu && (
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              className="w-40 flex flex-col bg-gray-50 shadow-xl rounded-lg absolute top-12 right-0"
            >
              {user && user.email === "raffay.ahmed009@gmail.com" && (
                <Link to="/createItem">
                  <p className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base">
                    New Item <MdAdd />
                  </p>
                </Link>
              )}

              {/* Navbar Links */}
              <ul className="flex flex-col">
                <li className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base">
                  Home
                </li>
                <li className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base">
                  Menu
                </li>
                <li className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base">
                  About Us
                </li>
                <li className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base">
                  Service
                </li>
              </ul>

              <p
                className="m-2 p-2 rounded-md flex items-center justify-center bg-gray-200 gap-3 cursor-pointer hover:bg-gray-300 transition-all duration-100 ease-in-out text-textColor text-base"
                onClick={logout}
              >
                Logout <MdLogout />
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header
