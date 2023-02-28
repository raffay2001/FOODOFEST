import React, { useEffect } from "react"
import { Header, MainContainer, CreateContainer } from "./components"
import { Routes, Route } from "react-router-dom"
import { AnimatePresence } from "framer-motion"
import { useStateValue } from "./context/StateProvider"
import { getAllFoodItems } from "./utils/firebaseFunctions"
import { actionType } from "./context/reducer"
import { Footer } from "./components/Footer"

const App = () => {
  const [{ foodItems }, dispatch] = useStateValue()

  const fetchData = async () => {
    const data = await getAllFoodItems()
    dispatch({ type: actionType.SET_FOOD_ITEMS, foodItems: data })
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <AnimatePresence mode="wait">
      <div className="w-screen h-auto flex flex-col bg-primary">
        <Header />
        <main className="mt-14 md:mt-20 px-4 md:px-16 py-4 w-full">
          <Routes>
            <Route path="/*" element={<MainContainer />} />
            <Route path="/createItem" element={<CreateContainer />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </AnimatePresence>
  )
}

export default App
