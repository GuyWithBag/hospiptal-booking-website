import { Card, Code, DataList, Flex, IconButton, Text } from '@radix-ui/themes'
import Link from 'next/link';
import React from 'react'
import { FaRegCopy } from "react-icons/fa";

type Props = {
    id: string,
    name: string,
    age: number,
    contact_no: number,
    address: string,
    sex: string,
    complains: string
}

const PatientInformation = ({ id, name, age, contact_no, address, sex, complains }: Props) => {
    return (
        <Card>
            <DataList.Root>
                <DataList.Item>
                    <DataList.Label minWidth="88px">ID</DataList.Label>
                    <DataList.Value>
                        <Flex align="center" gap="2">
                            <Code variant="ghost">u_2J89JSA4GJ</Code>
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
                    <DataList.Label minWidth="88px">Name</DataList.Label>
                    <DataList.Value><Text>{name}</Text></DataList.Value>
                </DataList.Item>
                <DataList.Item>
                    <DataList.Label minWidth="88px">Address</DataList.Label>
                    <DataList.Value><Text>{address}</Text></DataList.Value>
                </DataList.Item>
                <DataList.Item>
                    <DataList.Label minWidth="88px">Sex</DataList.Label>
                    <DataList.Value><Text>{sex}</Text></DataList.Value>
                </DataList.Item>
                <DataList.Item>
                    <DataList.Label minWidth="88px">Contact No.</DataList.Label>
                    <DataList.Value><Text>{contact_no}</Text></DataList.Value>
                </DataList.Item>
                <DataList.Item>
                    <DataList.Label minWidth="88px">Complains</DataList.Label>
                    <DataList.Value><Text>{complains}</Text></DataList.Value>
                </DataList.Item>
                <DataList.Item>
                    <DataList.Label minWidth="88px">Age</DataList.Label>
                    <DataList.Value><Text>{age}</Text></DataList.Value>
                </DataList.Item>

            </DataList.Root>
        </Card>
    )
}

export default PatientInformation