import React from "react"
import Delivery from "./img/delivery.png"
import HeroBg from "./img/heroBg.png"
import { HERO_DATA } from "../utils/constants"

const HomeContainer = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full my-8" id="home">
      {/* Hero Section Description */}
      <div className="py-2 flex-1 flex flex-col items-start justify-center gap-6">
        {/* Delivery Button */}
        <div className="flex items-center gap-2 justify-center bg-orange-100 px-2 py-1 rounded-full">
          <p className="text-base text-orange-500 font-semibold">Bike Delivery</p>
          <div className="w-8 h-8 drop-shadow-xl rounded-full overflow-hidden bg-white">
            <img src={Delivery} alt="deliveryImg" className="w-full h-full object-contain" />
          </div>
        </div>
        {/* Main Heading */}
        <p className="text-[3.8rem] md:text-[4.5rem] font-bold tracking-wide text-headingColor leading-none">
          The Fastest <span className="block mt-2 md:mt-3">Delivery in</span>
          <span className="text-orange-600 block mt-2 md:mt-3">Your City</span>
        </p>
        {/* Description */}
        <p className="text-base text-textColor text-left md:w-[80%]">
          From our kitchen to your doorstep, enjoy delicious meals delivered with speed and
          convenience! Satisfy your cravings with just a few clicks on our user-friendly website.
          Whether you're looking for comfort food or something healthy and fresh, we've got you
          covered. Trust us to bring the flavor straight to you. With our user-friendly website,
          ordering your favorite meals is just a few clicks away.
        </p>
        {/* Order Now button */}
        <button
          type="button"
          className="bg-gradient-to-br from-orange-400 to-orange-500 px-4 py-2 rounded-lg hover:shadow-xl transition-all duration-100 ease-in-out text-white font-semibold"
        >
          Order Now
        </button>
      </div>
      {/* Hero Section Image */}
      <div className="py-2 flex-1 flex items-center relative">
        <img
          src={HeroBg}
          alt="hero-bannerImg"
          className="ml-auto h-400 w-full md:h-650 md:w-auto"
        />
        <div className="w-full h-full absolute top-0 left-0 flex items-center justify-center py-32 md:py-4 gap-6 flex-wrap">
          {HERO_DATA.map((item) => (
            <div
              key={item.id}
              className="md:w-190 p-4 bg-cardOverlay backdrop-blur-md rounded-3xl flex items-center justify-center flex-col"
            >
              <img src={item.imageSrc} alt="I1" className="w-20 md:w-40 -mt-10 md:-mt-20" />
              <p className="text-base md:text-xl font-semibold text-textColor mt-1 md:mt-2">
                {item.name}
              </p>
              <p className="text-[12px] md:text-sm text-lighttextGray font-semibold my-1">
                {item.desc}
              </p>
              <p className="text-sm font-semibold text-headingColor">
                <span className="text-xs text-red-600">$</span> {item.price}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HomeContainer
