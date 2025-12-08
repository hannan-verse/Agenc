import React from 'react'




const Counter = ({title,text}) => {
  return (
    <div>
        <h2 className='text-[50px] text-[#151515] font-bold font-["Inter"]'>{title}</h2>
        <p className='text-xl font-medium text-[#737373] py-5 font-["Inter"]'>{text}</p>  
    </div>
  )
}

export default Counter