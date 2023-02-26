import React, { useEffect, useRef } from "react"
import { MdShoppingBasket } from "react-icons/md"
import { motion } from "framer-motion"
import NotFound from "./img/NotFound.svg"

const RowContainer = ({ flag, data, scrollValue }) => {
  const rowContainerRef = useRef()

  useEffect(() => {
    rowContainerRef.current.scrollLeft += scrollValue
  }, [scrollValue])

  return (
    <div
      ref={rowContainerRef}
      className={`w-full my-6 flex items-center justify-center gap-3 scroll-smooth ${
        flag ? "overflow-x-scroll scrollbar-none" : "overflow-x-hidden flex-wrap"
      }`}
    >
      {data.length > 0 ? (
        data.map((item) => (
          <div
            key={item?.id}
            className="w-275 min-w-[275px] md:min-w-[300px] md:w-300 bg-cardOverlay rounded-lg p-2 pr-6 backdrop-blur-lg my-12 hover:drop-shadow-lg flex flex-col items-center justify-between"
          >
            <div className="w-full flex items-center justify-between">
              <motion.div whileHover={{ scale: 1.2 }} className="w-40 h-32 -mt-8 drop-shadow-2xl">
                <img
                  src={item?.imageURL}
                  alt={item.title}
                  className="w-full h-full object-contain"
                />
              </motion.div>
              <motion.div
                whileTap={{ scale: 0.75 }}
                className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center cursor-pointer hover:shadow-md"
              >
                <MdShoppingBasket className="text-white" />
              </motion.div>
            </div>

            <div className="w-full flex flex-col items-end justify-end">
              <p className="text-textColor font-semibold text-base md:text-lg">{item?.title}</p>
              <p className="mt-1 text-sm text-gray-500">{item?.calories}</p>
              <div className="flex items-center gap-8">
                <p className="text-lg text-headingColor font-semibold">
                  <span className="text-sm text-red-500">$</span> {item?.price}
                </p>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="w-full flex flex-col items-center justify-center">
          <img src={NotFound} alt="NotFoundImg" className="h-340" />
          <p className="text-xl text-headingColor my-4">Items Not Available</p>
        </div>
      )}
    </div>
  )
}

export default RowContainer
