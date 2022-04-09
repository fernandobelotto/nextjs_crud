import { AddIcon } from "@chakra-ui/icons";
import {
  useDisclosure,
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Stack,
  Box,
  FormLabel,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  Select,
  Textarea,
  DrawerFooter,
} from "@chakra-ui/react";
import { useRef } from "react";
import { EntityForm } from "./EntityForm";

export function EntityDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const firstField = useRef();

  return (
    <>
      <Button leftIcon={<AddIcon />} colorScheme="teal" onClick={onOpen}>
        New Entity
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="left"
        initialFocusRef={firstField}
        onClose={onClose}
        size="md"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">
            Create a new entity
          </DrawerHeader>

          <DrawerBody p={5}>
            <EntityForm />
          </DrawerBody>

          <DrawerFooter borderTopWidth="1px">
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="green">Create</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
