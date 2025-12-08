import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Heading from '../components/Heading'
import Subheading from '../components/Subheading'
import Servicecard from '../components/Servicecard'
import Webdesign from '../assets/webdesign.png'
import Uiux from '../assets/uiux.png'
import Webdev from '../assets/webdev.png'
import Motion from '../assets/motion.png'
import D3 from '../assets/3d.png'
import DM from '../assets/dm.png'



const Service = () => {
  return (
    <section className='pb-[103px]'>
        <Container>
            <Heading className='text-center' text='Our Provided Services'/>
            <Subheading className='text-center mx-auto w-[590px] pt-5 pb-[50px] leading-[26px]' text='Our There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form. Services'/>
            <Flex className='flex-wrap gap-[21px]'>
              <Servicecard image={Webdesign} title="Web Design" text="There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which don't look."/>
              <Servicecard image={Uiux} title="UI/UX Design" text="There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which don't look."/>
              <Servicecard image={Webdev} title="Web Development" text="There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which don't look."/>
              <Servicecard image={Motion} title="Motion Graphics" text="There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which don't look."/>
              <Servicecard image={D3} title="3D Animation" text="There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which don't look."/>
              <Servicecard image={DM} title="Digital Marketing" text="There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which don't look."/>

            </Flex>
            
        
        </Container>

    </section>
  )
}

export default Service