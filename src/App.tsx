import React from "react"
import { Routes, Route, BrowserRouter } from "react-router-dom"
import SignIn from "./pages/singin"
import SignUp from "./pages/signup"
import Home from "./pages/home"
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
