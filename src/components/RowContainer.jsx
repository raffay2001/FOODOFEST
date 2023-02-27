import React, { useEffect, useRef, useState } from "react"
import { MdShoppingBasket } from "react-icons/md"
import { motion } from "framer-motion"

const RowContainer = ({ flag, data, scrollValue }) => {
  const rowContainer = useRef()

  useEffect(() => {
    rowContainer.current.scrollLeft += scrollValue
  }, [scrollValue])

  return (
    <div
      ref={rowContainer}
      className={`w-full flex items-center gap-3  my-6 mt-2 scroll-smooth  ${
        flag ? "overflow-x-scroll scrollbar-none" : "overflow-x-hidden flex-wrap justify-center"
      }`}
    >
      {data && data.length > 0
        ? data.map((item) => (
            <div
              key={item?.id}
              className="w-275 h-[175px] min-w-[275px] md:w-300 md:min-w-[300px]  bg-cardOverlay rounded-lg py-2 px-4 my-3 md:my-8 backdrop-blur-lg hover:drop-shadow-lg flex flex-col items-center justify-evenly relative"
            >
              <div className="w-full flex items-center justify-between">
                <motion.div className="w-32 h-32 -mt-8 drop-shadow-2xl" whileHover={{ scale: 1.2 }}>
                  <img src={item?.imageURL} alt="" className="w-full h-full object-contain" />
                </motion.div>
                <motion.div
                  whileTap={{ scale: 0.75 }}
                  className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center cursor-pointer hover:shadow-md -mt-8"
                >
                  <MdShoppingBasket className="text-white" />
                </motion.div>
              </div>

              <div className="w-full flex flex-col items-end justify-end -mt-8">
                <p className="text-textColor font-semibold text-base md:text-lg">{item?.title}</p>
                <p className="mt-1 text-sm text-gray-500">{item?.calories} Calories</p>
                <div className="flex items-center gap-8">
                  <p className="text-lg text-headingColor font-semibold">
                    <span className="text-sm text-red-500">$</span> {item?.price}
                  </p>
                </div>
              </div>
            </div>
          ))
        : Array(4)
            .fill(0)
            .map((_, index) => (
              <div
                key={`${_}-${index}`}
                className="animate-pulse w-275 h-[175px] min-w-[275px] md:w-300 md:min-w-[300px] bg-cardOverlay rounded-lg py-2 px-4 my-12 backdrop-blur-lg flex flex-col items-center justify-evenly relative"
              >
                <div className="w-full flex items-center justify-between">
                  {/* Image Skeleton */}
                  <div class="rounded-sm bg-gray-200 w-28 h-20"></div>
                  {/* Cart Icon Skeleton  */}
                  <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center cursor-pointer hover:shadow-md -mt-8"></div>
                </div>
                <div className="w-full flex flex-col items-end justify-end -mt-8 gap-2">
                  {/* Title Skeleton  */}
                  <p className="text-textColor bg-gray-200 font-semibold text-base md:text-lg rounded-sm w-32 h-4"></p>
                  {/* Calories Skeleton  */}
                  <p className="mt-1 text-sm text-gray-500 bg-gray-200 rounded-sm w-24 h-4"></p>
                  {/* Price Skeleton  */}
                  <p className="mt-1 text-sm text-gray-500 bg-gray-200 rounded-sm w-16 h-4"></p>
                </div>
              </div>
            ))}
    </div>
  )
}

export default RowContainer
