import React from 'react'
import Image from './Image'
import Subheading from './Subheading'
//====All Icon=========


const Servicecard = ({image,title,text}) => {
  return (
    <div className='text-center px-14 py-12 w-[426px] duration-300 hover:scale-110 hover:shadow-[0_10px_30px_rgba(124,58,237,0.5)]
        active:scale-95 shadow-xl'>
        <Image className='mx-auto' src={image}/>
        <h3 className='text-[25px] font-["Inter"] font-bold pt-10 pb-5'>{title}</h3>
        <Subheading className='text-center' text={text}/>
    </div>
  )
}

export default Servicecard