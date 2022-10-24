import React from "react"

const Myinput = ({ ...props }) => {
  return (
    <div>
      <input type={props.Type} placeholder={props.Text} />
    </div>
  )
}

export { Myinput }
