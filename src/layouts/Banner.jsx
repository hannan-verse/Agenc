import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Button from '../components/Button'
import Image from '../components/Image'
import bannerpic from '../assets/bannerpic.png'

const Banner = () => {
  return (
    <section className='py-20'>
        <Container>
            <Flex className='items-center'>
                <div className='w-1/2'>
                <h1 className='text-[#151515] text-[75px] font-bold leading-[130%] font-["Inter"]'>We Help brands with high quality services</h1>
                <p className='text-[#737373] text-base font-normal w-[604px] leading-[26px] font-["Inter"] mt-[20px] mb-[30px]'>There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which don't look.</p>
                <Button text="Get Started"/>
                </div>
                <div className='w-1/2'>
                <Image src={bannerpic}/>
                 
                </div>
            </Flex>
            
        </Container>
    </section>
  )
}

export default Banner