import {
  Stack,
  Box,
  FormLabel,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  Select,
  Textarea,
  Checkbox,
  Editable,
  EditablePreview,
  EditableInput,
  Switch,
} from "@chakra-ui/react";
import React from "react";
import { CustomEditable } from "./CustomEditable";
import CustomPinInput from "./CustomPinInput";
import CustomRadioInput from "./CustomRadioInput";
import { CustomRangeSlideInput } from "./CustomRangeSlideInput";
import { CustomSlide } from "./CustomSlide";
import CustomNumberInput from "./NumberInput";
import { PasswordInput } from "./PasswordInput";

export function EntityForm() {

  const postData = async (form) => {
    try {
      const res = await fetch('/api/pets', {
        method: 'POST',
        body: JSON.stringify(form),
      })

    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      <Stack spacing="24px">
        <Box>
          <FormLabel>Name</FormLabel>
          <Input id="username" placeholder="Please enter user name" />
        </Box>

        <Box>
          <FormLabel>Url</FormLabel>
          <InputGroup>
            <InputLeftAddon>http://</InputLeftAddon>
            <Input type="url" id="url" placeholder="Please enter domain" />
            <InputRightAddon>.com</InputRightAddon>
          </InputGroup>
        </Box>

        <Stack spacing={[1, 5]} direction={["column", "row"]}>
          <Checkbox value="naruto">Naruto</Checkbox>
          <Checkbox value="sasuke">Sasuke</Checkbox>
          <Checkbox value="kakashi">kakashi</Checkbox>
        </Stack>

        <Box>
          <FormLabel>Radio Input</FormLabel>
          <CustomRadioInput />
        </Box>

        <FormLabel>Editable</FormLabel>
        <CustomEditable />

        <Box>
          <FormLabel>Select Owner</FormLabel>
          <Select id="owner" defaultValue="segun">
            <option value="segun">Segun Adebayo</option>
            <option value="kola">Kola Tioluwani</option>
          </Select>
        </Box>
        <FormLabel>Password Input</FormLabel>

        <PasswordInput />

        <FormLabel>Number Input</FormLabel>
        <CustomNumberInput />
        <FormLabel>Pin Input</FormLabel>
        <CustomPinInput />

        <FormLabel>Slide Range Input</FormLabel>
        <CustomRangeSlideInput />

        <FormLabel>Slide Input</FormLabel>
        <CustomSlide />

        <FormLabel>Switch</FormLabel>
        <Switch id="value" />

        <Box>
          <FormLabel>Description</FormLabel>
          <Textarea id="desc" />
        </Box>
      </Stack>
    </>
  );
}
