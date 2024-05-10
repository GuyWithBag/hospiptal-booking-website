'use client'

import { Box, Button, Card, Flex, IconButton, Text } from '@radix-ui/themes'
import React, { useState } from 'react'
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import HomePageDropDown from "@/components/home-page-dropdown";
import { CiMenuBurger } from "react-icons/ci";
import { IoIosCloseCircleOutline } from "react-icons/io";

const Navbar = () => {

    const [openSideBar, setOpenSidebar] = useState(false)

    return (
        <>
            <NavigationMenu.Root>
                <Card className={`${openSideBar ? '' : 'hidden'} fixed h-[100%] right-0 w-[200px] z-10`}>
                    <NavigationMenu.List>
                        <Flex align={'start'} direction={'column'} gap={'5'} className={`h-[100%]}`}>
                            <IconButton onClick={
                                () => {
                                    setOpenSidebar(!openSideBar)
                                }
                            } className='lg:hidden max-sm:block'>
                                <IoIosCloseCircleOutline className='m-auto' />
                            </IconButton>
                            <NavigationMenu.Item>
                                <NavigationMenu.Link href='/'>
                                    <Button variant='ghost' className=''>
                                        <Text weight={'medium'} className='text-[var(--accent-9)]'>
                                            Home
                                        </Text>
                                    </Button>
                                </NavigationMenu.Link>
                            </NavigationMenu.Item>
                            {/* <NavigationMenu.Item>
                                <Button variant='ghost'>
                                    <Text weight={'medium'} className='text-[var(--accent-9)]'>
                                        Our Services
                                    </Text>
                                </Button>
                            </NavigationMenu.Item> */}
                            <NavigationMenu.Item>
                                <NavigationMenu.Link href='#about-us'>
                                    <Button variant='ghost'>
                                        <Text weight={'medium'} className='text-[var(--accent-9)]'>
                                            About Us
                                        </Text>
                                    </Button>
                                </NavigationMenu.Link>
                            </NavigationMenu.Item>
                            <NavigationMenu.Item>
                                <NavigationMenu.Link href='#laboratory'>
                                    <Button variant='ghost'>
                                        <Text weight={'medium'} className='text-[var(--accent-9)]'>
                                            Laboratory
                                        </Text>
                                    </Button>
                                </NavigationMenu.Link>
                            </NavigationMenu.Item>
                            <NavigationMenu.Item>
                                <NavigationMenu.Link href='#contacts'>
                                    <Button variant='ghost'>
                                        <Text weight={'medium'} className='text-[var(--accent-9)]'>
                                            Contact Us
                                        </Text>
                                    </Button>
                                </NavigationMenu.Link>
                            </NavigationMenu.Item>
                            <HomePageDropDown />
                        </Flex>

                    </NavigationMenu.List>
                </Card>
            </NavigationMenu.Root>
            <NavigationMenu.Root>
                <Card className=' absolute w-[100%] px-home shadow-md'>
                    <NavigationMenu.List>
                        <Flex direction={'row'} align={'center'} justify={'between'} className='w-[100%] h-12 py-2px-home' >
                            <NavigationMenu.Item className=' h-[100%] '>
                                <Flex direction={'row'} align={'center'} gap={'3'} className='h-[100%]'>
                                    <NavigationMenu.Link href='/'>
                                        <img className='object-contain h-10 ' src='hospital_logo.png' />
                                    </NavigationMenu.Link>
                                    <Text weight={'bold'} size={{ sm: '1', lg: '6' }} className='text-[var(--accent-9)]'>Guinmapang-Neri Medical Clinic and Laboratory</Text>
                                </Flex>
                            </NavigationMenu.Item>
                            <div className=' max-sm:hidden'>

                                <Flex align={'center'} direction={'row'} gap={'5'} className={`h-[100%]}`}>
                                    <NavigationMenu.Item>
                                        <NavigationMenu.Link href='/'>
                                            <Button variant='ghost' className=''>
                                                <Text weight={'medium'} className='text-[var(--accent-9)]'>
                                                    Home
                                                </Text>
                                            </Button>
                                        </NavigationMenu.Link>
                                    </NavigationMenu.Item>
                                    {/* <NavigationMenu.Item>
                                <Button variant='ghost'>
                                    <Text weight={'medium'} className='text-[var(--accent-9)]'>
                                        Our Services
                                    </Text>
                                </Button>
                            </NavigationMenu.Item> */}
                                    <NavigationMenu.Item>
                                        <NavigationMenu.Link href='#about-us'>
                                            <Button variant='ghost'>
                                                <Text weight={'medium'} className='text-[var(--accent-9)]'>
                                                    About Us
                                                </Text>
                                            </Button>
                                        </NavigationMenu.Link>
                                    </NavigationMenu.Item>
                                    <NavigationMenu.Item>
                                        <NavigationMenu.Link href='#laboratory'>
                                            <Button variant='ghost'>
                                                <Text weight={'medium'} className='text-[var(--accent-9)]'>
                                                    Laboratory
                                                </Text>
                                            </Button>
                                        </NavigationMenu.Link>
                                    </NavigationMenu.Item>
                                    <NavigationMenu.Item>
                                        <NavigationMenu.Link href='#contacts'>
                                            <Button variant='ghost'>
                                                <Text weight={'medium'} className='text-[var(--accent-9)]'>
                                                    Contact Us
                                                </Text>
                                            </Button>
                                        </NavigationMenu.Link>
                                    </NavigationMenu.Item>
                                    {/* <NavigationMenu.Item>
                                <Button variant='ghost'>
                                    <Text weight={'medium'} className='text-[var(--accent-9)]'>
                                        Contacts
                                    </Text>
                                </Button>
                            </NavigationMenu.Item> */}
                                    <HomePageDropDown />
                                </Flex>
                            </div>
                            <IconButton onClick={
                                () => {
                                    setOpenSidebar(!openSideBar)
                                }
                            } className='lg:hidden max-sm:block'>
                                <CiMenuBurger className='m-auto' />
                            </IconButton>
                        </Flex>
                    </NavigationMenu.List>
                </Card>
            </NavigationMenu.Root>
        </>
    )
}

export default Navbar
