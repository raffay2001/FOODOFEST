import React, { useEffect, useRef } from "react"
import { MdShoppingBasket } from "react-icons/md"
import { motion } from "framer-motion"

const RowContainer = ({ flag, data, scrollValue }) => {
  console.log(data)

  const rowContainerRef = useRef()

  useEffect(() => {
    rowContainerRef.current.scrollLeft += scrollValue
  }, [scrollValue])

  return (
    <div
      ref={rowContainerRef}
      className={`w-full my-12 flex items-center gap-3 scroll-smooth ${
        flag ? "overflow-x-scroll scrollbar-none" : "overflow-x-hidden flex-wrap"
      }`}
    >
      {data &&
        data.map((item) => (
          <div
            key={item.id}
            className="w-300 min-w-[300px] md:min-w-[340px] md:w-340 h-auto bg-gray-100 rounded-lg p-2 pr-6 backdrop-blur-lg my-12 hover:drop-shadow-lg"
          >
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
        ))}
    </div>
  )
}

export default RowContainer
