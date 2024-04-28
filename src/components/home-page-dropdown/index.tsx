'use client'

import React, { useState } from 'react'
// import Image from "next/image";
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { Box, Button, Card, Theme } from '@radix-ui/themes'
import Link from 'next/link';
import LoginFormDialog from '../login-form-dialog';

const HomePageDropDown = () => {

    const [showLoginFormDialog, setShowLoginFormDialog] = useState(false)

    const onSecretaryClick = (e: any) => {
        setShowLoginFormDialog(true)
    }

    return (
        <>
            <LoginFormDialog open={showLoginFormDialog} onOpenChange={setShowLoginFormDialog} />
            <Card size={'5'} className='flex items-center h-72 shadow-lg'>
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
                                    <Button variant='ghost' onClick={onSecretaryClick}>
                                        Secretary
                                    </Button>
                                </DropdownMenu.Item>
                            </DropdownMenu.Content>
                        </Theme>
                    </DropdownMenu.Portal>
                </DropdownMenu.Root>
            </Card>
        </>
    )
}

export default HomePageDropDown