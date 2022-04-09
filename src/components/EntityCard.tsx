import { EditIcon } from "@chakra-ui/icons";
import { Box, Flex, IconButton, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { DeleteEntity } from "./DeleteEntity";

export default function EntityCard({ data }: any) {
  return (
    <>
      <Box p={5} border="1px solid" borderColor="gray.300" rounded="md">
        <VStack spacing={2} alignItems="flex-start">
          {Object.entries(data).map(([key, value]) => {
            return (
              <>
                <Text fontWeight="bold" color="gray.500">
                  {key}
                </Text>
                <Text>{value}</Text>
              </>
            );
          })}
          <Flex dir="row" justify="space-between" w="full">
            <DeleteEntity />
            <IconButton
              aria-label="edit"
              icon={<EditIcon />}
              size="sm"
              colorScheme="blue"
            />
          </Flex>
        </VStack>
      </Box>
    </>
  );
}
