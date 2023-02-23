import React from "react"
import { Header, MainContainer, CreateContainer } from "./components"
import { Routes, Route } from "react-router-dom"
import { AnimatePresence } from "framer-motion"

const App = () => {
  return (
    <AnimatePresence>
      <div className="w-screen h-auto flex flex-col bg-primary">
        <Header />
        <Routes>
          <Route path="/*" element={<MainContainer />} />
          <Route path="/createItem" element={<CreateContainer />} />
        </Routes>
      </div>
    </AnimatePresence>
  )
}

export default App
