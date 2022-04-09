import { HStack, PinInput, PinInputField } from '@chakra-ui/react'
import React from 'react'

export default function CustomPinInput() {
    return (
        <>
            <HStack>
                <PinInput type='alphanumeric' otp>
                    <PinInputField />
                    <PinInputField />
                    <PinInputField />
                    <PinInputField />
                </PinInput>
            </HStack>
        </>
    )
}
