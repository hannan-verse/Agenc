import React from 'react'


const List = ({text,className}) => {
  return (
    <li className={`text-lg text-[#737373] font-normal font-["Inter"] hover:text-[#6A4DF4] hover:font-bold duration-300 hover:scale-110 cursor-pointer ${className}`}>{text}</li>
  )
}

export default List