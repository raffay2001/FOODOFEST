import React, { useState } from "react"
import { IoFastFood } from "react-icons/io5"
import { CATEGORIES } from "../utils/constants"
import { motion } from "framer-motion"
import RowContainer from "./RowContainer"
import { useStateValue } from "../context/StateProvider"

const MenuContainer = () => {
  const [filter, setFilter] = useState("chicken")
  const [{ foodItems }, dispatch] = useStateValue()

  return (
    <section className="w-full mt-3" id="menu">
      <div className="w-full flex flex-col items-center justify-center">
        <p className="mr-auto text-2xl font-semibold capitalize relative before:absolute before:rounded-lg before:content before:w-36 before:h-1 before:-bottom-2 before:right-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all duration-100 ease-in-out">
          Our Hot Dishes.
        </p>

        <div className="w-full flex items-center justify-start md:justify-center gap-8 mt-6 mb-4 md:mb-0 overflow-x-scroll scrollbar-none py-3">
          {CATEGORIES &&
            CATEGORIES.map((category) => (
              <motion.div
                whileTap={{ scale: 0.9 }}
                key={category.id}
                className={`group ${
                  filter === category.urlParamName ? "bg-orange-500" : "bg-white"
                } w-24 min-w-[94px] h-28 cursor-pointer rounded-lg drop-shadow-xl flex flex-col gap-3 items-center justify-center hover:bg-orange-500`}
                onClick={() => setFilter(category.urlParamName)}
              >
                <div
                  className={`w-10 h-10 rounded-full shadow-lg ${
                    filter === category.urlParamName ? "bg-card" : "bg-orange-500"
                  } group-hover:bg-card flex items-center justify-center`}
                >
                  <IoFastFood
                    className={`${
                      filter === category.urlParamName ? "text-textColor" : "text-white"
                    } group-hover:text-textColor text-lg`}
                  />
                </div>
                <p
                  className={`text-sm ${
                    filter === category.urlParamName ? "text-white" : "text-textColor"
                  } group-hover:text-white`}
                >
                  {category.name}
                </p>
              </motion.div>
            ))}
        </div>

        <div className="w-full">
          <RowContainer flag={false} data={foodItems?.filter((item) => item.category === filter)} />
        </div>
      </div>
    </section>
  )
}

export default MenuContainer
