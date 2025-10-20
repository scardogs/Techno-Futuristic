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

export default function EventsPage() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadEvents() {
      try {
        const res = await fetch("/api/content?type=event");
        const data = await res.json();
        setEvents(data);
      } catch (e) {
        console.error("Failed to load events:", e);
        // Fallback to static data
        setEvents([
          {
            title: "Synthwave Night",
            date: "Fri 9 PM",
            desc: "Live DJ, neon latte flights",
          },
          {
            title: "Hack & Sip",
            date: "Wed 7 PM",
            desc: "Co-work, code, caffeine",
          },
          {
            title: "Latte Art Lab",
            date: "Sun 11 AM",
            desc: "Beginner friendly session",
          },
        ]);
      } finally {
        setLoading(false);
      }
    }
    loadEvents();
  }, []);

  return (
    <VStack align="stretch" spacing={10}>
      <Box>
        <Heading
          size="2xl"
          color="brand.500"
          textShadow="0 0 24px rgba(0,194,255,0.7)"
        >
          Events
        </Heading>
        <Text mt={3} color="gray.300">
          What&apos;s glowing at Neon Cafe.
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
                  <SkeletonText noOfLines={2} />
                </Box>
              ))
          : events.map((e) => (
              <Box
                key={e.title || e._id}
                p={6}
                border="1px solid"
                borderColor="whiteAlpha.150"
                borderRadius="16px"
                bg="rgba(255,255,255,0.02)"
              >
                <Heading size="md">{e.title}</Heading>
                <Text color="brand.400" mt={1}>
                  {e.date}
                </Text>
                <Text color="gray.400" mt={2}>
                  {e.desc || e.description}
                </Text>
              </Box>
            ))}
      </SimpleGrid>
    </VStack>
  );
}
