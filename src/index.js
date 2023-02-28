import React from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import App from "./App"
import { BrowserRouter as Router } from "react-router-dom"
import { StateProvider } from "./context/StateProvider"
import { initialState } from "./context/initialState"
import reducer from "./context/reducer"
import { ThemeProvider } from "@mui/material"
import { LIGHTTHEME } from "./MuiTheme"

const container = document.getElementById("root")
const root = createRoot(container)
root.render(
  <Router>
    <StateProvider initialState={initialState} reducer={reducer}>
      <ThemeProvider theme={LIGHTTHEME}>
        <App />
      </ThemeProvider>
    </StateProvider>
  </Router>
)
