'use client'

import { PatientModel } from '@/models/PatientModel';
import { Card, Code, DataList, Flex, IconButton, Text } from '@radix-ui/themes'
import Link from 'next/link';
import React from 'react'
import { FaRegCopy } from "react-icons/fa";


const PatientInformation = ({ id, name, age, contact_no, address, sex, complains, service, date }: PatientModel) => {
    return (
        <Card size={'3'} className='w-96'>
            <DataList.Root size={'2'}>
                <DataList.Item>
                    <DataList.Label minWidth="88px">
                        <Text weight={'medium'} className='text-[var(--accent-9)]'>
                            ID
                        </Text>
                    </DataList.Label>
                    <DataList.Value>
                        <Flex align="center" gap="2">
                            <Code variant="ghost">{id}</Code>
                            <IconButton
                                size="1"
                                aria-label="Copy value"
                                color="gray"
                                variant="ghost"
                            >
                                <FaRegCopy />
                            </IconButton>
                        </Flex>
                    </DataList.Value>
                </DataList.Item>
                <DataList.Item>
                    <DataList.Label minWidth="88px"><Text weight={'medium'} className='text-[var(--accent-9)]'>Name</Text></DataList.Label>
                    <DataList.Value><Text>{name}</Text></DataList.Value>
                </DataList.Item>
                <DataList.Item>
                    <DataList.Label minWidth="88px">
                        <Text weight={'medium'} className='text-[var(--accent-9)]'>
                            Address
                        </Text>
                    </DataList.Label>
                    <DataList.Value><Text>{address}</Text></DataList.Value>
                </DataList.Item>
                <DataList.Item>
                    <DataList.Label minWidth="88px">
                        <Text weight={'medium'} className='text-[var(--accent-9)]'>
                            Sex
                        </Text>
                    </DataList.Label>
                    <DataList.Value><Text>{sex}</Text></DataList.Value>
                </DataList.Item>
                <DataList.Item>
                    <DataList.Label minWidth="88px">
                        <Text weight={'medium'} className='text-[var(--accent-9)]'>
                            Contact No.
                        </Text>
                    </DataList.Label>
                    <DataList.Value><Text>{contact_no}</Text></DataList.Value>
                </DataList.Item>
                <DataList.Item>
                    <DataList.Label minWidth="88px">
                        <Text weight={'medium'} className='text-[var(--accent-9)]'>
                            Complains
                        </Text>
                    </DataList.Label>
                    <DataList.Value><Text>{complains}</Text></DataList.Value>
                </DataList.Item>
                <DataList.Item>
                    <DataList.Label minWidth="88px">
                        <Text weight={'medium'} className='text-[var(--accent-9)]'>
                            Age
                        </Text>
                    </DataList.Label>
                    <DataList.Value><Text>{age}</Text></DataList.Value>
                </DataList.Item>
                <DataList.Item>
                    <DataList.Label minWidth="88px">
                        <Text weight={'medium'} className='text-[var(--accent-9)]'>
                            Date
                        </Text>
                    </DataList.Label>
                    <DataList.Value><Text>{date}</Text></DataList.Value>
                </DataList.Item>
                <DataList.Item>
                    <DataList.Label minWidth="88px">
                        <Text weight={'medium'} className='text-[var(--accent-9)]'>
                            Service
                        </Text>
                    </DataList.Label>
                    <DataList.Value><Text>{service}</Text></DataList.Value>
                </DataList.Item>

            </DataList.Root>
        </Card>
    )
}

export default PatientInformation