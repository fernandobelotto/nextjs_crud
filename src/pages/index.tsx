import { Box, Heading, SimpleGrid, VStack } from "@chakra-ui/react";
import { faker } from "@faker-js/faker";
import React from "react";
import dbConnect from "../backend/database/dbConnect";
import Entity from "../backend/models/Entity";
import { ChakraModal } from "../components/CustomModal";
import EntityCard from "../components/EntityCard";
import { EntityDrawer } from "../components/EntityDrawer";
export default function HomePage({ entities }) {

  return (
    <>
      <Box p="5">
        <VStack spacing={5}>
          <Heading>Nextjs CRUD</Heading>
          <EntityDrawer />
          <ChakraModal />
          <SimpleGrid columns={6} spacing={5}>
            {entities.map((entity) => {
              return <EntityCard data={entity} key={entity.id} />;
            })}
          </SimpleGrid>
        </VStack>
      </Box>
    </>
  );
}

export async function getServerSideProps() {
  await dbConnect()

  /* find all the data in our database */
  const result = await Entity.find({})
  const entities = result.map((doc) => {
    const entity = doc.toObject()
    entity._id = entity._id.toString()
    return entity
  })

  return { props: { entities: entities } }
}

