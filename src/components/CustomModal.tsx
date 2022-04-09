import { useDisclosure, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter } from "@chakra-ui/react"
import { Lorem } from "@faker-js/faker/lorem"
import { useRef } from "react"
import { EntityForm } from "./EntityForm"
import ReactForm from "./ReactForm"

export function ChakraModal() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const btnRef = useRef()
    return (
        <>

            <Button mt={3} ref={btnRef} onClick={onOpen}>
                Trigger modal
            </Button>

            <Modal
                onClose={onClose}
                finalFocusRef={btnRef}
                isOpen={isOpen}
                scrollBehavior={'inside'}
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Modal Title</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <EntityForm />
                        {/* <ReactForm /> */}
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={onClose}>Close</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}