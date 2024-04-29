'use client'

import React from 'react'

import * as Dialog from '@radix-ui/react-dialog';
import * as Form from '@radix-ui/react-form';
import { Card, Theme, Text, Button, TextField, Flex } from '@radix-ui/themes';

type Props = {
    onOpenChange: (open: boolean) => void,
    open: boolean,
    // onSubmit: (e: any) => void
    onSubmit: (e: any) => void
}

const DateTimeForm = ({ open, onOpenChange, onSubmit }: Props) => {
    return (
        <Dialog.Root onOpenChange={onOpenChange} open={open} >
            <Dialog.Portal>
                <Theme>
                    <Dialog.Overlay className="DialogOverlay" />
                    <Dialog.Content className='dialog-position popup'>
                        <Card className=' px-20 py-8'>
                            <Dialog.Title asChild>
                                <Text weight={'bold'} className='text-[var(--accent-11)]'>Select A Date to Checkup</Text>
                            </Dialog.Title>
                            <Form.Root onSubmit={onSubmit} method='POST'>
                                <Form.Field className="FormField" name="date">
                                    <Flex align={'baseline'} justify={'between'}>
                                        <Form.Label className="FormLabel">Date</Form.Label>
                                        <Form.Message className="FormMessage" match="valueMissing" asChild>
                                            <Text>Please enter a date</Text>
                                        </Form.Message>
                                    </Flex>
                                    <Form.Control asChild>
                                        <input type={'date'} />
                                    </Form.Control>
                                </Form.Field>

                                <Flex className=' ml-auto' gap={'4'}>
                                    <Form.Submit asChild>
                                        <Button>Submit</Button>
                                    </Form.Submit>

                                    <Dialog.Close asChild>
                                        <Button>Close</Button>
                                    </Dialog.Close>
                                </Flex>

                            </Form.Root>


                        </Card>
                    </Dialog.Content>
                </Theme>
            </Dialog.Portal>
        </Dialog.Root>
    )
}

export default DateTimeForm