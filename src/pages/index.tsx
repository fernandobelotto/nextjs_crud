import { Box, Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, Flex, Heading, SimpleGrid, Text, useDisclosure, VStack } from '@chakra-ui/react'
import React from 'react'
import { Entity } from '../model/entity'
import { faker } from '@faker-js/faker'
import EntityCard from '../components/EntityCard'
import { EntityDrawer } from '../components/EntityDrawer'
export default function HomePage() {

  const entities = Array(30).fill({
    id: faker.random.uuid(),
    title: faker.company.companyName(),
    description: faker.lorem.lines(2),
    checkboxOptions: faker.name.jobTitle(),
    date: faker.date.soon().toISOString(),
    isActive: faker.random.boolean().toString(),
    quantity: faker.finance.amount(),
    radioOption: true,
    range: faker.finance.amount(),
  })

  return (
    <>
      <Box p='5'>
        <VStack spacing={5}>

          <Heading>Nextjs CRUD</Heading>
          <EntityDrawer />
          <SimpleGrid columns={6} spacing={5}>
            {entities.map((entity) => {
              return (
                <EntityCard data={entity} />
              )
            })}
          </SimpleGrid>
        </VStack>
      </Box>
    </>
  )
}
