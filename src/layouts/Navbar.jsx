import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import Logo from '../assets/mainlogo.png'
import List from '../components/List'
import Button from '../components/Button'


const Navbar = () => {
  return (
    
      <nav className='py-10'>
        <Container>
            <Flex className='justify-between items-center'>
                <div>
                    <Image src = {Logo}/>
                </div>
                <div>
                    <ul>
                        <ul className='flex gap-x-12'>
                            <List text="Home"/>
                            <List text="About"/>
                            <List text="Service"/>
                            <List text="Careers"/>
                            <List text="Contact"/>
                        </ul>
                    </ul>
                </div>
                <div>
                    <Button text="Contact"/>
                </div>

            </Flex>
        
        </Container>
      </nav>
    
  )
}

export default Navbar