import { useEffect, useState } from "react";
import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  Skeleton,
  SkeletonText,
} from "@chakra-ui/react";

export default function LocationsPage() {
  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadLocations() {
      try {
        const res = await fetch("/api/content?type=location");
        const data = await res.json();
        setLocations(data);
      } catch (e) {
        console.error("Failed to load locations:", e);
        // Fallback to static data
        setLocations([
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
        ]);
      } finally {
        setLoading(false);
      }
    }
    loadLocations();
  }, []);

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
        {loading
          ? Array(3)
              .fill(0)
              .map((_, i) => (
                <Box
                  key={i}
                  p={6}
                  border="1px solid"
                  borderColor="whiteAlpha.150"
                  borderRadius="16px"
                  bg="rgba(255,255,255,0.02)"
                >
                  <Skeleton height="20px" mb={2} />
                  <Skeleton height="16px" mb={2} />
                  <Skeleton height="16px" mb={2} />
                  <Skeleton height="14px" />
                </Box>
              ))
          : locations.map((l) => (
              <Box
                key={l.name || l._id}
                p={6}
                border="1px solid"
                borderColor="whiteAlpha.150"
                borderRadius="16px"
                bg="rgba(255,255,255,0.02)"
              >
                <Heading size="md">{l.name || l.title}</Heading>
                <Text color="gray.400" mt={1}>
                  {l.addr || l.data?.address}
                </Text>
                <Text color="brand.400" mt={2}>
                  {l.hours || l.data?.hours}
                </Text>
                <Text color="gray.500" fontSize="sm">
                  {l.note || l.data?.note}
                </Text>
              </Box>
            ))}
      </SimpleGrid>
    </VStack>
  );
}
