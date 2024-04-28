import PatientForm from '@/components/new-patient-form'
import { Flex } from '@radix-ui/themes'
import React from 'react'

const page = () => {
  return (
    <Flex align={'center'} justify={'center'} className='h-screen'>
      <PatientForm />
    </Flex>
  )
}

export default page