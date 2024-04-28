'use client'

import { PatientModel } from '@/models/PatientModel'
import { Card, Flex } from '@radix-ui/themes'
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
            <Flex direction={'column'}>
                {patients.map((value: FirebaseDocument) => (
                    <PatientInformation key={value.id} id={value.id} {...value.data} />
                ))}
            </Flex>
        </Card>
    )
}

export default PatientInformationList