import { Box, Heading, Text, SimpleGrid, VStack } from "@chakra-ui/react";

const LOCS = [
  {
    name: "Downtown",
    addr: "101 Matrix Ave",
    hours: "7a - 11p",
    note: "Flagship",
  },
  {
    name: "Harbor",
    addr: "42 Quantum Pier",
    hours: "8a - 10p",
    note: "Waterfront",
  },
  {
    name: "Campus",
    addr: "7 Neural Loop",
    hours: "6a - 12a",
    note: "24/7 finals",
  },
];

export default function LocationsPage() {
  return (
    <VStack align="stretch" spacing={10}>
      <Box>
        <Heading
          size="2xl"
          color="brand.500"
          textShadow="0 0 24px rgba(0,194,255,0.7)"
        >
          Locations
        </Heading>
        <Text mt={3} color="gray.300">
          Find your nearest Neon Cafe hub.
        </Text>
      </Box>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
        {LOCS.map((l) => (
          <Box
            key={l.name}
            p={6}
            border="1px solid"
            borderColor="whiteAlpha.150"
            borderRadius="16px"
            bg="rgba(255,255,255,0.02)"
          >
            <Heading size="md">{l.name}</Heading>
            <Text color="gray.400" mt={1}>
              {l.addr}
            </Text>
            <Text color="brand.400" mt={2}>
              {l.hours}
            </Text>
            <Text color="gray.500" fontSize="sm">
              {l.note}
            </Text>
          </Box>
        ))}
      </SimpleGrid>
    </VStack>
  );
}
