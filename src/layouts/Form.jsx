import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Heading from '../components/Heading'
import Subheading from '../components/Subheading'
import Button from '../components/Button'

const Form = () => {
  return (
        <section className='pt-[150px] pb-[150px] bg-[#F3F3F3]'>
        <Container>
          <Flex className='items-center'>
            <div className='w-1/2'>
                <Heading text="We Do design, Code & Development"/>
                <Subheading className=' text-[#7B7B7B] pt-5 pb-[10px] w-[514px] leading-6  ' text="I had a good experience while using this app, what fascinated me was the live tracking feature There are many variations of passages of Lorem Ipsum available, but the majority."/>
                <Subheading className=' text-[#7B7B7B] w-[526px] leading-6 ' text="There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form."/>
            </div>
            <div className='w-1/2'>
            <div className='bg-[#FFFFFF] w-[536px] h-[622px] rounded-[20px] '>
                <h4 className='font-bold text-[30px] font-["Inter"] text-center pt-[61px]'>Get a free quote now</h4>
                <div className='pl-[43px] pt-[30px] pb-[30px]'>
                   <h6 className='text-[#151515] font-["Inter"] text-base leading-[26px] '>Name</h6>
                    <input className='w-[450px] h-[64px] rounded-[10px] pl-[66px] border border-[#E8E8E8] font-normal text-base font-["Inter"] ' type="text" placeholder='Enter your name' />
                    <h6 className='text-[#151515] font-["Inter"] text-base leading-[26px] pt-5'>Email</h6>
                    <input className='w-[450px] h-[64px] rounded-[10px] pl-[66px] border border-[#E8E8E8] font-normal text-base font-["Inter"] ' type="email" placeholder='Enter your email' />
                    <h6 className='text-[#151515] font-["Inter"] text-base leading-[26px] pt-5'>Phone </h6>
                    <input className='w-[450px] h-[64px] rounded-[10px] pl-[66px]  border border-[#E8E8E8] font-normal text-base font-["Inter"] ' type="number" placeholder='Enter your Phone number' />
                </div>
                <div className='text-center'>
                   <Button className='px-[147px] py-5' text="Get Pricing Now"/>
                </div>

            </div>
            </div>
          </Flex>         
        </Container>
    </section>
  )
}

export default Form