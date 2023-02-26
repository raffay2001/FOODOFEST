import React from "react"

const RowContainer = ({ flag }) => {
  return (
    <div className={`w-full my-12 ${flag ? "overflow-x-scroll" : "overflow-x-hidden"}`}>
      <div className="w-full md:w-350 h-auto shadow-md backdrop-blur-lg">
        <div className="w-full flex items-center justify-between">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/restaurantapp-8b570.appspot.com/o/Images%2F1677350055644-d2.png?alt=media&token=e930f3f5-4154-40ee-9d9f-eebe961009cb"
            alt=""
          />
        </div>
      </div>
    </div>
  )
}

export default RowContainer
