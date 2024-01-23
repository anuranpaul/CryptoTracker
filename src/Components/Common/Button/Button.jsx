import React from 'react'
import "./style.css"
const Button = ({handleClick,text,outline}) => {
  return (
    <button className={`${outline?"outline-btn":"simple-btn"}`} onClick={handleClick}>{text}</button>
  )
}

export default Button