import { RadioGroup, Stack, Radio } from '@chakra-ui/react'
import { useState } from 'react'

export default function CustomRadioInput() {
    const [value, setValue] = useState('1')
    return (
        <>
            <RadioGroup onChange={setValue} value={value}>
                <Stack direction='row'>
                    <Radio value='1'>First</Radio>
                    <Radio value='2'>Second</Radio>
                    <Radio value='3'>Third</Radio>
                </Stack>
            </RadioGroup>
        </>
    )
}
