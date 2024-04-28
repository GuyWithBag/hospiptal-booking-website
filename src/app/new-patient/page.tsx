import Background from '@/components/background'
import NewPatientForm from '@/components/new-patient-form'
import { Flex, Box } from '@radix-ui/themes'
import React from 'react'

const page = () => {
  return (
    <Flex align={'center'} justify={'center'} className='h-screen'>
      <Background />
      <Box className='fixed' asChild>
        <NewPatientForm />
      </Box>

    </Flex>
  )
}

export default page