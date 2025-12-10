import React from 'react'
import Heading from '../components/Heading'
import Subheading from '../components/Subheading'
import Flex from '../components/Flex'
import Container from '../components/Container'
import List from '../components/List'
import Workcard from '../components/Workcard'
//==========All pic==============
import Workpic from '../assets/workpic.png'
import Workpic2 from '../assets/workpic2.png'
import Workpic3 from '../assets/workpic3.png'
import Workpic4 from '../assets/workpic4.png'
import Workpic5 from '../assets/workpic5.png'
import Workpic6 from '../assets/workpic6.png'
//==========All pic==============



const Work = () => {
  return (
        <section className='pb-[150px] pt-[150px] bg-[#F3F3F3]'>
            <Container>            
             <div>
                 <Heading className='text-center' text="Our Recent Work"/>
                 <Subheading className='text-center mx-auto pb-[30px] pt-5 w-[620px]' text="There are many variations of passages of Lorem Ipsum available, butthemajority  have suffered alteration in some form."/> 
            </div> 
            
                <ul>
                    <Flex className='justify-between'>
                         
                    <List className='' text="All"/>
                    <List className='' text="Mobile Design"/>
                    <List className='' text="Web design"/>
                    <List className='' text="Branding"/>
                    <List className='' text="Illustration"/>
                    <List className='' text="Digital Marketing"/>
                    </Flex>
                </ul>
                <div className='flex flex-wrap gap-5 pt-[50px]'>
                    <Workcard title="Task Management App" text="This is a task management application that can help you be more " image={Workpic} />
                    <Workcard title="Saas Landing Page Design App" text="This is a task management application that can help you be more " image={Workpic2} />
                    <Workcard title="App Design" text="This is a task management application that can help you be more " image={Workpic3} />
                    <Workcard title="Landing Page Design" text="This is a task management application that can help you be more " image={Workpic4} />
                    <Workcard title="Dashboard Design" text="This is a task management application that can help you be more " image={Workpic5} />
                    <Workcard title="Web App Design" text="This is a task management application that can help you be more " image={Workpic6} />
                </div>
               
            </Container>
        </section>
        )
        }

export default Work