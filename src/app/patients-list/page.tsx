import PatientInformationList from '@/components/patient-information-list'
import { Box, Flex, Text } from '@radix-ui/themes'

const page = () => {

    return (
        <Box className='pt-16'>
            <Flex gap={'5'} align={'center'} justify={'start'} direction={'column'} className=' min-h-screen'>
                <Text weight={'medium'} size={'8'}>Patients</Text>
                <PatientInformationList />
            </Flex>
        </Box>
    )
}

export default page

