import React from 'react'
import Container from '../components/Container'
import Image from '../components/Image'
import Flex from '../components/Flex'
import Logo from '../assets/mainlogo.png'
import Subheading from '../components/Subheading'

const Last = () => {
  return (
    <section className='pb-[150px] pt-[150px]'>
       <Container>
        <Flex className='pb-[50px]'>
         <div className='w-4/12'>
          <div className='pb-[30px]'>
           <Image src = {Logo}/>
          </div>
          <Subheading className='text-[#7B7B7B] leading-[26px] w-[356px]' text="I had a good experience while using this app, what fascinated me was the live tracking feature There are many variations of passages of Lorem Ipsum available, but the majority."/>
        </div>
        <div className='w-8/12'>
        <Flex className='justify-between'>
            <div>
                <h5 className='text-[#151515] font-["Inter"] font-semibold text-xl pb-10'>About</h5>
                <Subheading className='text-[#7B7B7B] leading-10' text="About Us"/>
                <Subheading className='text-[#7B7B7B] leading-10' text=" Features"/>
                <Subheading className='text-[#7B7B7B] leading-10' text="News"/>
                <Subheading className='text-[#7B7B7B] leading-10' text="Carrers"/>
            </div>            
            <div>
                <h5 className='text-[#151515] font-["Inter"] font-semibold text-xl pb-10'>Company</h5>
                <Subheading className='text-[#7B7B7B] leading-10' text="Our Team"/>
                <Subheading className='text-[#7B7B7B] leading-10' text="Partner With Us"/>
                <Subheading className='text-[#7B7B7B] leading-10' text="FAQ"/>
                <Subheading className='text-[#7B7B7B] leading-10' text="Blog"/>
            </div>            
            <div>
                <h5 className='text-[#151515] font-["Inter"] font-semibold text-xl pb-10'>Support</h5>
                <Subheading className='text-[#7B7B7B] leading-10' text="About"/>
                <Subheading className='text-[#7B7B7B] leading-10' text="Support Center"/>
                <Subheading className='text-[#7B7B7B] leading-10' text="Feedback"/>
                <Subheading className='text-[#7B7B7B] leading-10' text="Contact Us"/>
                <Subheading className='text-[#7B7B7B] leading-10' text="Accesbility"/>
            </div>            
            <div>
                <h5 className='text-[#151515] font-["Inter"] font-semibold text-xl pb-10'>Get in touch</h5>
                <Subheading className='text-[#7B7B7B] leading-10' text="info@gmail.com"/>
                <Subheading className='text-[#7B7B7B] leading-10' text="+88 0121 0212"/>
                
            </div>
                       
        </Flex>

        </div>
        </Flex>
        <div className='w-full h-[3px] bg-[#E8E8E8]'></div>
        <Subheading className='text-center text-[#D0D0D0] leading-10 pt-5' text="All credit goes to @agence.com"/>


       </Container>
    </section>
  )
}

export default Last