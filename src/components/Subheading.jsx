import React from 'react'

export const Subheading = ({text,className}) => {
  return (
    <p className={`text-[#737373] text-[16px] font-medium font-["Inter"] ${className}`}>{text}</p>
  )
}
export default Subheading
