import { Box, Flex } from '@radix-ui/themes'
import React from 'react'

const Background = () => {
    return (
        <Box className=" h-[100%] w-[100%] overflow-hidden">
            {/* <Box className=" rounded-full bg-[var(--accent-9)] h-[120%] w-[1000px] ml-[60%] " /> */}
            {/* <img src="female_doctor.png" className="translate-y-[-110%] ml-[60%] object-scale-down h-[100%]" /> */}
            <Flex direction={'row'} className='h-[100%]'>
                <img className=' h-[100%] w-[100%] object-cover' src='bg_1.jpg' />
                {/* <img src='bg_2.jpg' /> */}
            </Flex>
        </Box>
    )
}

export default Background