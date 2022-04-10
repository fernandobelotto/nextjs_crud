import {
  useDisclosure,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/react";
import { Lorem } from "@faker-js/faker/lorem";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import { EntityForm } from "./EntityForm";
import ReactForm from "./ReactForm";

export function ChakraModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const btnRef = useRef();

  const {
    handleSubmit,
    control,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  async function onSubmit(values) {
    try {
      const res = await fetch("/api/entities", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      console.log(res);
      onClose();
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <Button mt={3} ref={btnRef} onClick={onOpen}>
        Trigger modal
      </Button>

      <Modal
        onClose={onClose}
        finalFocusRef={btnRef}
        isOpen={isOpen}
        scrollBehavior={"inside"}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              {/* <EntityForm /> */}
              <ReactForm
                control={control}
                register={register}
                errors={errors}
              />
            </ModalBody>
            <ModalFooter>
              <Button onClick={onClose}>Close</Button>
              <Button colorScheme="teal" isLoading={isSubmitting} type="submit">
                Submit
              </Button>
            </ModalFooter>
          </ModalContent>
        </form>
      </Modal>
    </>
  );
}
