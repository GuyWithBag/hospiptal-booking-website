'use client'

import React from 'react'
// import Image from "next/image";
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { Box, Button, Card, Theme } from '@radix-ui/themes'
import Link from 'next/link';

const HomePageDropDown = () => {
    return (
        <Card size={'5'} className='flex items-center h-72'>
            <DropdownMenu.Root>
                <DropdownMenu.Trigger className=' w-40' asChild>
                    <Button>
                        Book here
                    </Button>
                </DropdownMenu.Trigger>
                <DropdownMenu.Portal>
                    <Theme>
                        <DropdownMenu.Content className='w-40 bg-white shadow-lg px-7 py-2 gap-3' sideOffset={5}>
                            <DropdownMenu.Item>
                                <Link href={'/new-patient'}>
                                    <Button variant='ghost'>
                                        New Patient
                                    </Button>
                                </Link>
                            </DropdownMenu.Item>
                            <DropdownMenu.Item>
                                <Link href={'/old-patient'}>
                                    <Button variant='ghost'>
                                        Old Patient
                                    </Button>
                                </Link>
                            </DropdownMenu.Item>
                            <DropdownMenu.Item>
                                <Link href={'/new-patient'}>
                                    <Button variant='ghost'>
                                        Secretary
                                    </Button>
                                </Link>
                            </DropdownMenu.Item>
                        </DropdownMenu.Content>
                    </Theme>
                </DropdownMenu.Portal>
            </DropdownMenu.Root>
        </Card>
    )
}

export default HomePageDropDown