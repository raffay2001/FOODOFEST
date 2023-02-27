import React, { useState, useEffect } from "react"
import HomeContainer from "./HomeContainer"
import { motion } from "framer-motion"
import { MdChevronLeft, MdChevronRight } from "react-icons/md"
import RowContainer from "./RowContainer"
import { useStateValue } from "../context/StateProvider"
import MenuContainer from "./MenuContainer"
import CartContainer from "./CartContainer"

const MainContainer = () => {
  const [{ foodItems }, dispatch] = useStateValue()
  const [scrollValue, setScrollValue] = useState(0)

  useEffect(() => {}, [scrollValue])

  return (
    <div className="w-full h-auto flex flex-col items-center justify-center">
      <HomeContainer />
      <section className="w-full mt-6">
        <div className="w-full flex-col flex md:flex-row items-center justify-between">
          <p className="text-2xl font-semibold capitalize relative before:absolute before:rounded-lg before:content before:w-44 before:h-1 before:-bottom-2 before:right-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all duration-100 ease-in-out mb-4 md:mb-0">
            Our fresh & healthy fruits.
          </p>
          <div className="hidden md:flex gap-3 items-center">
            <motion.div
              whileTap={{ scale: 0.75 }}
              className="w-8 h-8 rounded-lg bg-orange-400 hover:bg-orange-500 cursor-pointer hover:shadow-lg flex items-center justify-center"
              onClick={() =>
                setScrollValue((prevScrollValue) => {
                  if (scrollValue > -400) {
                    return prevScrollValue - 200
                  } else if (scrollValue === -400) {
                    return 0
                  }
                })
              }
            >
              <MdChevronLeft className="text-lg text-white" />
            </motion.div>
            <motion.div
              whileTap={{ scale: 0.75 }}
              className="w-8 h-8 rounded-lg bg-orange-400 hover:bg-orange-500 cursor-pointer hover:shadow-lg flex items-center justify-center"
              onClick={() =>
                setScrollValue((prevScrollValue) => {
                  if (scrollValue < 400) {
                    return prevScrollValue + 200
                  } else if (scrollValue === 400) {
                    return 0
                  }
                })
              }
            >
              <MdChevronRight className="text-lg text-white" />
            </motion.div>
          </div>
        </div>
        <RowContainer
          scrollValue={scrollValue}
          flag={true}
          data={foodItems?.filter((item) => item.category === "fruits")}
        />
      </section>
      <MenuContainer />
      <CartContainer />
    </div>
  )
}

export default MainContainer
