'use client'

import { PatientModel } from '@/models/PatientModel'
import { Box, Card, Flex, Text } from '@radix-ui/themes'
import PatientInformation from '../patient-information'
import { db } from '@/firebase'
import { FirebaseDocument } from '@/models/FirebaseDocuments'
import { collection, onSnapshot, query } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'

const PatientInformationList = () => {

    const [patients, setPatients] = useState([] as Array<FirebaseDocument>)

    useEffect(() => {
        const q = query(collection(db, 'patients'))
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            let arr: Array<FirebaseDocument> = []

            querySnapshot.forEach(doc => {
                // console.log(doc.data())
                arr.push(
                    {
                        data: doc.data(),
                        id: doc.id
                    } as FirebaseDocument
                )
            });
            setPatients(arr)
            // console.log(arr[0].data)
        })
    }, [])

    return (
        <Card>
            <Flex direction={'column-reverse'} justify={'center'} gap={'2'}>
                <Box display={`${patients.length > 0 ? 'none' : 'block'}`}>
                    <Text weight={'bold'}>Patient List is empty. </Text>
                </Box>
                {patients.map((value: FirebaseDocument) => (
                    <PatientInformation key={value.id} id={value.id} {...value.data} />
                ))}
            </Flex>
        </Card>
    )
}

export default PatientInformationList