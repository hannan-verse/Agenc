import React from 'react'
import Image from './Image'
import Subheading from './Subheading'

const Workcard = ({image,title,text,className}) => {
  return (
    <div className={`text-center rounded-[20px] w-[426px] duration-300 hover:scale-110 hover:shadow-[0_10px_30px_rgba(124,58,237,0.5)] active:scale-95 shadow-xl ${className}`}>
        <Image className='mx-auto w-full' src={image}/>
        <h3 className='text-5 font-["Inter"] font-bold pt-[30px] pb-[10px]'>{title}</h3>
        <Subheading className='w-[340px] pb-[30px] mx-auto' text={text}/>
    </div>
  )
}

export default Workcard