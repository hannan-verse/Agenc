import React from 'react'

const Heading = ({text,className}) => {
  return (
    <h2 className={`text-[#151515] text-[45px] font-bold font-["Inter"] ${className} `}>{text}</h2>
  )
}

export default Heading