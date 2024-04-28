import { Button, Card, Flex } from '@radix-ui/themes'
import React from 'react'

const Navbar = () => {
    return (
        <Card className=' absolute w-[100%] px-home z-10'>
            <Flex direction={'row'} align={'center'} className='w-[100%] h-12 py-2px-home' >
                <img className=' mr-auto object-contain h-[100%]' src='hospital_logo.png' />
                <Flex gap={'5'} className=' ml-auto'>
                    <Button variant='ghost'>Home</Button>
                    <Button variant='ghost'>Our Service</Button>
                    <Button variant='ghost'>About us</Button>
                    <Button variant='ghost'>Contact</Button>
                </Flex>
            </Flex>
        </Card>
    )
}

export default Navbar