import React from 'react'

const Button = ({text,className}) => {
  return (
    <button className={`bg-[#6A4DF4] text-white text-xl px-[42px] py-[15px] rounded-[10px] font-medium font-["Inter"] border border-transparent hover:bg-transparent hover:text-[#6A4DF4] hover:border-[#6A4DF4] duration-300 hover:scale-110 hover:shadow-[0_10px_30px_rgba(124,58,237,0.5)]
        active:scale-95 ${className}`}>{text}</button>
  )
}

export default Button