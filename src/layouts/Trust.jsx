import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Heading from '../components/Heading'
import Subheading from '../components/Subheading'
import Trustcard from '../components/Trustcard'
import Image from '../components/Image'
import Trustpic from '../assets/trustpic.png'
import Icon1 from '../assets/icon1.png'
import Icon2 from '../assets/icon2.png'
import Icon3 from '../assets/icon3.png'


const Trust = () => {
  return (
    <section className='pb-[150px]'>
        <Container>
            <Flex className='items-end'>
                <div className='w-7/12'>
                   <Heading className='w-[508px]' text="Why You Should Choose Agenc"/>
                   <Subheading className='w-[500px] pt-5 pb-[85px] leading-6' text="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."/>
                   <Flex>
                    <Trustcard image={Icon1} title="Innovative Ideas" text="Because each project is different, we adapt to your business model."/>
                    <Trustcard className="ml-20 mt-[32px]" image={Icon2} title="Dedicated Support" text="We provide 24/7 support for all our clients and serve them professionally."/>
                   </Flex>
                   <div className='ml-[178px] mt-[42px]'>
                    <Trustcard image={Icon3} title="Honest Pricing" text="Pricing on projects are based on various analyzes and are cost effective."/>
                   </div>
                </div>
                <div className='w-5/12'>
                <Image className='' src={Trustpic}/>
                </div>
 
            </Flex>
        </Container>
    </section>
  )
}

export default Trust