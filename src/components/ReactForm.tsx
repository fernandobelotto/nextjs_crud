import { Controller, useForm } from "react-hook-form";
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
  Radio,
  RadioGroup,
  Switch,
  PinInput,
  PinInputField,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
} from "@chakra-ui/react";

export default function ReactForm({ errors, register, control }) {
  return (
    <>
      <FormControl isInvalid={errors.title}>
        <FormLabel htmlFor="title">Title</FormLabel>
        <Input
          id="title"
          placeholder="title"
          {...register("title", {
            required: "This is required",
            minLength: { value: 4, message: "Minimum length should be 4" },
          })}
        />
        <FormErrorMessage>
          {errors.title && errors.title.message}
        </FormErrorMessage>
      </FormControl>

      {/* SWITCH INPUT */}
      <FormControl isInvalid={errors.isActive}>
        <FormLabel htmlFor="isActive">Active?</FormLabel>
        <Switch {...register("isActive")}></Switch>
        <FormErrorMessage>
          {errors.isActive && errors.isActive.message}
        </FormErrorMessage>
      </FormControl>

      {/* PIN INPUT */}
      {/* <FormControl isInvalid={errors.pin}>
                <FormLabel htmlFor='pin'>Pin</FormLabel>
                <Controller
                    control={control}
                    name="pin"
                    render={({ field }) => {
                        const { value, onChange } = field
                        return (
                            <PinInput type="alphanumeric" otp value={value} onChange={onChange} >
                                <PinInputField />
                                <PinInputField />
                                <PinInputField />
                                <PinInputField />
                            </PinInput>
                        )
                    }}
                />
                <FormErrorMessage>
                    {errors.pin && errors.pin.message}
                </FormErrorMessage>
            </FormControl> */}

      <FormControl isInvalid={errors.quantity}>
        <FormLabel htmlFor="quantity">Quantity</FormLabel>
        <Controller
          control={control}
          name="quantity"
          render={({ field }) => {
            const { value, onChange } = field;
            return (
              <>
                {/* here, you can choose between string or number in final result */}
                <NumberInput
                  allowMouseWheel
                  onChange={(string, number) => onChange(number)}
                  value={value}
                >
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </>
            );
          }}
        />
        <FormErrorMessage>
          {errors.quantity && errors.quantity.message}
        </FormErrorMessage>
      </FormControl>
    </>
  );
}
