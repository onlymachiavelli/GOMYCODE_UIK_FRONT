import React from "react"
import { Toast } from "react-hot-toast"
import { Logo } from "./../components/svg"
const SignUp = () => {
  return (
    <main className="w-full h-screen bg-dark">
      <div className="w-full h-full flex">
        <aside
          className={
            "h-full w-1/3 border border-r-4 border-t-0 border-l-0 border-b-0 border-redy"
          }
        >
          <div className="w-full h-full grid content-center justify-items-center">
            <Logo Width="150" />
            <p className="text-white p-5 text-center">
              Teach and get Informations through this platform without any
              restrictions or any payement
            </p>
          </div>
        </aside>
        <aside className="w-full h-full ">
          <p className="text-redy font-bold text-center mt-4 text-3xl">
            CREATE ACCOUNT
          </p>

          <div>
            <form onSubmit={() => {}}></form>
          </div>
        </aside>
      </div>
    </main>
  )
}

export default SignUp
