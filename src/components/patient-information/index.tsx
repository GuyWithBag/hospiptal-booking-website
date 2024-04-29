'use client'

import { PatientModel } from '@/models/PatientModel';
import { Card, Code, DataList, Flex, IconButton, Text } from '@radix-ui/themes'
import Link from 'next/link';
import React from 'react'
import { FaRegCopy } from "react-icons/fa";

//max-md:bg-red-400 max-sm:bg-blue-400 max-xl:bg-green-400

const PatientInformation = ({ id, name, age, contact_no, address, sex, complains, service, date, time }: PatientModel) => {
    return (
        <Card size={{ lg: '3', md: '2', sm: '1' }} className='max-xl:w-96 max-sm:w-auto '>
            <DataList.Root size={{ lg: '2', md: '1' }}>
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
                                onClick={() => { navigator.clipboard.writeText(id) }}
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
                <DataList.Item>
                    <DataList.Label minWidth="88px">
                        <Text weight={'medium'} className='text-[var(--accent-9)]'>
                            Time
                        </Text>
                    </DataList.Label>
                    <DataList.Value><Text>{time}</Text></DataList.Value>
                </DataList.Item>

            </DataList.Root>
        </Card>
    )
}

export default PatientInformation