import Background from '@/components/background'
import OldPatientForm from '@/components/old-patient-form'
import { Box, Flex } from '@radix-ui/themes'
import React from 'react'

const page = () => {
    return (
        <Flex align={'center'} justify={'center'} className='h-screen'>
            <Background />
            <Box className="absolute">
                <OldPatientForm />

            </Box>
        </Flex>
    )
}

export default page