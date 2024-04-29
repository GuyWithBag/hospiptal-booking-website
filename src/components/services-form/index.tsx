'use client'

import React, { useState } from 'react'

import * as Dialog from '@radix-ui/react-dialog';

import * as Select from '@radix-ui/react-select';
import { Card, Box, Text, Button, Flex, Theme } from '@radix-ui/themes';

type Props = {
    onOpenChange: (open: boolean) => void,
    open: boolean,
    // onSubmit: (e: any) => void
    onValueChange: (value: string) => void
}

const ServicesForm = ({ open, onOpenChange, onValueChange }: Props) => {

    const [openSelect, setOpenSelect] = useState(false)

    const onSelected = (value: string) => {
        onValueChange(value)
    }

    return (
        <>
            <Dialog.Root onOpenChange={onOpenChange} open={open} >
                <Dialog.Portal>
                    <Theme>
                        <Dialog.Overlay className="DialogOverlay" />
                        <Dialog.Content className='dialog-position popup'>
                            <Card className=' p-5'>
                                <Flex direction={'column'} gap={'3'}>
                                    {/* <Button onClick={() => { setOpenSelect(true) }} variant='surface'>Services</Button> */}
                                    <Text>Our Services: Please choose one</Text>
                                    <Flex direction={'column'}>
                                        <Button variant='ghost' onClick={() => { onSelected('Checkup') }}>Checkup</Button>
                                        <Button variant='ghost' onClick={() => { onSelected('Blood Typing') }}>Blood Typing</Button>
                                        <Button variant='ghost' onClick={() => { onSelected('CBC with Platelet') }}>CBC with Platelet</Button>
                                        <Button variant='ghost' onClick={() => { onSelected('Lipid Profile') }}>Lipid Profile</Button>
                                        <Button variant='ghost' onClick={() => { onSelected('Fecalysis') }}>Fecalysis</Button>
                                        <Button variant='ghost' onClick={() => { onSelected('Urinalysis') }}>Urinalysis</Button>
                                        <Button variant='ghost' onClick={() => { onSelected('Fasting Blood Sugar') }}>Fasting Blood Sugar</Button>
                                        <Button variant='ghost' onClick={() => { onSelected('Random Blood Sugar') }}>Random Blood Sugar</Button>
                                        <Button variant='ghost' onClick={() => { onSelected('Sodium, Potassium, Chloride, Calcium') }}>Sodium, Potassium, Chloride, Calcium</Button>
                                        <Button variant='ghost' onClick={() => { onSelected('Sodium and Potassium') }}>Sodium and Potassium</Button>
                                        <Button variant='ghost' onClick={() => { onSelected('Calcium') }}>Calcium</Button>
                                        <Button variant='ghost' onClick={() => { onSelected('Chloride') }}>Chloride</Button>
                                        <Button variant='ghost' onClick={() => { onSelected('Lithium') }}>Lithium</Button>
                                        <Button variant='ghost' onClick={() => { onSelected('SGPT') }}>SGPT</Button>
                                        <Button variant='ghost' onClick={() => { onSelected('SGOT') }}>SGOT</Button>
                                        <Button variant='ghost' onClick={() => { onSelected('HBA1C') }}>HBA1C</Button>
                                        <Button variant='ghost' onClick={() => { onSelected('Serum Uric Acid') }}>Serum Uric Acid</Button>
                                        <Button variant='ghost' onClick={() => { onSelected('Creatinine') }}>Creatinine</Button>
                                        <Button variant='ghost' onClick={() => { onSelected('Anti-Hav IgG Ig') }}>Anti-Hav IgG Ig</Button>
                                    </Flex>
                                    <Flex className=' ml-auto' gap={'4'}>
                                        {/* <Form.Submit asChild>
                                            <Button>Submit</Button>
                                        </Form.Submit> */}

                                        <Dialog.Close asChild>
                                            <Button>Close</Button>
                                        </Dialog.Close>
                                    </Flex>
                                </Flex>
                            </Card>
                        </Dialog.Content>
                    </Theme>
                </Dialog.Portal>
            </Dialog.Root>

            {/* <Select.Root open={openSelect} onValueChange={onValueChange}>
                <Select.Portal>
                    <Theme>
                        <Select.Content>
                            <Card className='fixed top-[40%] right-[29%]'>
                                <Select.Viewport>
                                    <Flex direction={'column'} justify={'start'}>
                                        <Select.Group>
                                            <Select.Item value='Blood Typing' asChild><Button variant='ghost'>Blood Typing</Button></Select.Item>
                                            <Select.Item value='CBC with Platelet' asChild><Button variant='ghost'>CBC with Platelet</Button></Select.Item>
                                            <Select.Item value='Lipid Profile' asChild><Button variant='ghost'>Lipid Profile</Button></Select.Item>
                                            <Select.Item value='Fecalysis' asChild><Button variant='ghost'>Fecalysis</Button></Select.Item>
                                            <Select.Item value='Urinalysis' asChild><Button variant='ghost'>Urinalysis</Button></Select.Item>
                                            <Select.Item value='Fasting Blood Sugar' asChild><Button variant='ghost'>Fasting Blood Sugar</Button></Select.Item>
                                            <Select.Item value='Random Blood Sugar' asChild><Button variant='ghost'>Random Blood Sugar</Button></Select.Item>
                                            <Select.Item value='Sodium, Potassium, Chloride, Calcium' asChild><Button variant='ghost'>Sodium, Potassium, Chloride, Calcium</Button></Select.Item>
                                            <Select.Item value='Sodium and Potassium' asChild><Button variant='ghost'>Sodium and Potassium</Button></Select.Item>
                                            <Select.Item value='Calcium' asChild><Button variant='ghost'>Calcium</Button></Select.Item>
                                            <Select.Item value='Chloride' asChild><Button variant='ghost'>Chloride</Button></Select.Item>
                                            <Select.Item value='Lithium' asChild><Button variant='ghost'>Lithium</Button></Select.Item>
                                            <Select.Item value='SGPT' asChild><Button variant='ghost'>SGPT</Button></Select.Item>
                                            <Select.Item value='SGOT' asChild><Button variant='ghost'>SGOT</Button></Select.Item>
                                            <Select.Item value='HBA1C' asChild><Button variant='ghost'>HBA1C</Button></Select.Item>
                                            <Select.Item value='Serum Uric Acid' asChild><Button variant='ghost'>Serum Uric Acid</Button></Select.Item>
                                            <Select.Item value='Creatinine' asChild><Button variant='ghost'>Creatinine</Button></Select.Item>
                                            <Select.Item value='Anti-Hav IgG Ig' asChild><Button variant='ghost'>Anti-Hav IgG Ig</Button></Select.Item>
                                        </Select.Group>
                                    </Flex>
                                </Select.Viewport>
                            </Card>
                        </Select.Content>
                    </Theme>
                </Select.Portal>
            </Select.Root> */}
        </>
    )
}

export default ServicesForm


//<Select.Item value='Blood Typing'>Blood Typing</Select.Item>
//<Select.Item value='CBC with Platelet'>CBC with Platelet</Select.Item>
//<Select.Item value='Lipid Profile'>Lipid Profile</Select.Item>
//<Select.Item value='Fecalysis'>Fecalysis</Select.Item>
//<Select.Item value='Urinalysis'>Urinalysis</Select.Item>
//<Select.Item value='Fasting Blood Sugar'>Fasting Blood Sugar</Select.Item>
//<Select.Item value='Random Blood Sugar'>Random Blood Sugar</Select.Item>
//<Select.Item value='Sodium, Potassium, Chloride, Calcium'>Sodium, Potassium, Chloride, Calcium</Select.Item>
//<Select.Item value='Sodium and Potassium'>Sodium and Potassium</Select.Item>
//<Select.Item value='Calcium'>Calcium</Select.Item>
//<Select.Item value='Chloride'>Chloride</Select.Item>
//<Select.Item value='Lithium'>Lithium</Select.Item>
//<Select.Item value='SGPT'>SGPT</Select.Item>
//<Select.Item value='SGOT'>SGOT</Select.Item>
//<Select.Item value='HBA1C'>HBA1C</Select.Item>
//<Select.Item value='Serum Uric Acid'>Serum Uric Acid</Select.Item>
//<Select.Item value='Creatinine'>Creatinine</Select.Item>
//<Select.Item value='Anti-Hav IgG Ig'>Anti-Hav IgG Ig</Select.Item>
