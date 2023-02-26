import React from "react"
import { MdShoppingBasket } from "react-icons/md"
import { motion } from "framer-motion"

const RowContainer = ({ flag }) => {
  return (
    <div
      className={`w-full my-12 bg-cardOverlay ${flag ? "overflow-x-scroll" : "overflow-x-hidden"}`}
    >
      <div className="w-300 md:w-340 h-auto bg-gray-100 rounded-lg p-2 pr-6 backdrop-blur-lg my-12 hover:drop-shadow-lg">
        <div className="w-full flex items-center justify-between">
          <motion.img
            whileHover={{ scale: 1.2 }}
            src="https://firebasestorage.googleapis.com/v0/b/restaurantapp-8b570.appspot.com/o/Images%2F1677350055644-d2.png?alt=media&token=e930f3f5-4154-40ee-9d9f-eebe961009cb"
            alt=""
            className="w-40 h-40 -mt-8 drop-shadow-2xl"
          />
          <motion.div
            whileTap={{ scale: 0.75 }}
            className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center cursor-pointer hover:shadow-md"
          >
            <MdShoppingBasket className="text-white" />
          </motion.div>
        </div>

        <div className="w-full flex flex-col items-end justify-end">
          <p className="text-textColor font-semibold text-base md:text-lg">Pepsi Can</p>
          <p className="mt-1 text-sm text-gray-500">1500 Calories</p>
          <div className="flex items-center gap-8">
            <p className="text-lg text-headingColor font-semibold">
              <span className="text-sm text-red-500">$</span> 60
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RowContainer
