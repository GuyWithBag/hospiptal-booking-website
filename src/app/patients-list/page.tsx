import PatientInformationList from '@/components/patient-information-list'
import { Flex } from '@radix-ui/themes'

const page = () => {

    return (
        <Flex align={'center'} justify={'center'} className='h-screen'>
            <PatientInformationList />
        </Flex>
    )
}

export default page