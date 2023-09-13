import React from 'react'

const CustomButton = ({ title, containerStyles, handleClick }) => {
  return (
    <button 
        type={"button"}
        className={`custom-btn ${containerStyles}`}
        onClick={handleClick}
        ><span className={`flex-1`}>
            {title}
        </span>
  </button>
  )
}

export default CustomButton