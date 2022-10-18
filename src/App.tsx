import React from "react"
import { Routes, Route, BrowserRouter } from "react-router-dom"

import SignUp from "./pages/signup"
import Home from "./pages/home"
import SignIn from "./pages/signin"
import Me from "./pages/me/me"
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/me" element={<Me />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
