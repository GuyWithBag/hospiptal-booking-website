'use client'

import { Button, Card, Flex, Text } from '@radix-ui/themes'
import React from 'react'
import * as NavigationMenu from '@radix-ui/react-navigation-menu';

const Navbar = () => {
    return (
        <NavigationMenu.Root>
            <Card className=' absolute w-[100%] px-home shadow-md'>
                <NavigationMenu.List>
                    <Flex direction={'row'} align={'center'} className='w-[100%] h-12 py-2px-home' >
                        <NavigationMenu.Item className=' mr-auto h-[100%] '>
                            <Flex direction={'row'} align={'center'} gap={'3'}>
                                <NavigationMenu.Link href='/'>
                                    <img className='object-contain h-10 ' src='hospital_logo.png' />
                                </NavigationMenu.Link>
                                <Text weight={'bold'} size={'6'} className='text-[var(--accent-9)]'>Guinmapang-Neri Medical Clinic and Laboratory</Text>
                            </Flex>
                        </NavigationMenu.Item>
                        <Flex gap={'5'} className=' ml-auto'>
                            <NavigationMenu.Item>
                                <NavigationMenu.Link href='/'>
                                    <Button variant='ghost'>
                                        <Text weight={'medium'} className='text-[var(--accent-9)]'>
                                            Home
                                        </Text>
                                    </Button>
                                </NavigationMenu.Link>
                            </NavigationMenu.Item>
                            <NavigationMenu.Item>
                                <Button variant='ghost'>
                                    <Text weight={'medium'} className='text-[var(--accent-9)]'>
                                        Our Services
                                    </Text>
                                </Button>
                            </NavigationMenu.Item>
                            <NavigationMenu.Item>
                                <Button variant='ghost'>
                                    <Text weight={'medium'} className='text-[var(--accent-9)]'>
                                        About Us
                                    </Text>
                                </Button>
                            </NavigationMenu.Item>
                            <NavigationMenu.Item>
                                <Button variant='ghost'>
                                    <Text weight={'medium'} className='text-[var(--accent-9)]'>
                                        Contacts
                                    </Text>
                                </Button>
                            </NavigationMenu.Item>
                        </Flex>
                    </Flex>
                </NavigationMenu.List>
            </Card>
        </NavigationMenu.Root>
    )
}

export default Navbar