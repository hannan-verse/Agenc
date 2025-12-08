import React from 'react'
//==------components link
import Container from '../components/Container'
import Flex from '../components/Flex'
import Counter from '../components/Counter'
import Image from '../components/Image'
//============== -সকল ছবি- ==============
import Spic1 from '../assets/spic1.png'
import Spic2 from '../assets/spic2.jpg'
import Spic3 from '../assets/spic3.png'
import Spic4 from '../assets/spic4.png'
import { FaStar } from "react-icons/fa";




const Success = () => {
  return (
    <section className='pb-[150px]'>
        <Container>
            <Flex className='bg-[#F8F6FE] rounded-[20px] px-[50px] py-[70px]'>
                <div className='w-5/12'> 
                <h6 className='text-[#6A4DF4] text-2xl font-medium font-["Inter"] '>Our Success</h6>
                <h3 className='text-[#151515] font-semibold text-[35px] w-[387px] font-["Inter"] pt-4 '>West cost Brand makers-Global Edge</h3>
                </div>
                <div className='w-7/12'> 
                <Flex className='justify-between'>
                <div>
                  <Counter title='200+' text='Customer Satisfied' />
                          <div className='relative'>
            <div className='absolute w-[35px] border-2 h-[35px] rounded-full  bg-black'>
                <Image className='w-full rounded-full' src={Spic1} />
                </div>
            <div className='absolute left-[20px] w-[35px] border-2 h-[35px] rounded-full bg-black'>
                <Image className='w-full rounded-full' src={Spic2} />
                </div>
            <div className='absolute left-[40px] w-[35px] border-2 h-[35px] rounded-full bg-red'>
                <Image className='w-full rounded-full' src={Spic3} />
            </div>
            <div className='absolute left-[60px] w-[35px] border-2 h-[35px] rounded-full bg-black'>
                <Image className='w-full rounded-full' src={Spic4} />
            </div>
            <div className='absolute left-[80px] w-[35px] border-2 h-[35px] rounded-full bg-black'>
                 <Image className='w-full rounded-full' src={Spic4} />
            </div>
        </div>
                </div>
                <div>
                  <Counter title='4.5' text='200+ Avg rating' />
                  <ul className='flex gap-x-2'>
                    <li><FaStar className='text-[#FFAC4A]' /></li>
                    <li><FaStar className='text-[#FFAC4A]' /></li>
                    <li><FaStar className='text-[#FFAC4A]' /></li>
                    <li><FaStar className='text-[#FFAC4A]' /></li>
                    <li><FaStar className='text-[#FFAC4A]' /></li>
                  </ul>
                </div>
                <div>
                  <Counter title='351+' text='Project Delivered' />
                  <a className='text-[#6A4DF4] text-5 font-medium font=["Inter"] leading-[120%]' href=''>See Works</a>
                </div>
                
                
                
                </Flex>
                </div>
            </Flex>
        </Container>
    </section>
    
  )
}

export default Success