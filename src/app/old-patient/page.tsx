import NewPatientForm from '@/components/new-patient-form'
import { Flex } from '@radix-ui/themes'
import React from 'react'

const page = () => {
    return (
        <Flex align={'center'} justify={'center'} className='h-screen'>
            <NewPatientForm />
        </Flex>
    )
}

export default page