import React from 'react'
import Image from './Image'
import Subheading from './Subheading'

const Trustcard = ({image,title,text,className}) => {
  return (
    <div className={`w-[344px] ${className}`}>
        <Image src={image}/>
        <h3 className='text-[25px] font-["Inter"] font-bold pt-10 pb-5'>{title}</h3>
        <Subheading text={text}/>
    </div>
  )
}

export default Trustcard