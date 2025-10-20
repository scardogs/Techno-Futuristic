import { Box, Heading, Text, VStack, SimpleGrid } from "@chakra-ui/react";

const EVENTS = [
  {
    title: "Synthwave Night",
    date: "Fri 9 PM",
    desc: "Live DJ, neon latte flights",
  },
  { title: "Hack & Sip", date: "Wed 7 PM", desc: "Co-work, code, caffeine" },
  {
    title: "Latte Art Lab",
    date: "Sun 11 AM",
    desc: "Beginner friendly session",
  },
];

export default function EventsPage() {
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
          What’s glowing at Neon Cafe.
        </Text>
      </Box>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
        {EVENTS.map((e) => (
          <Box
            key={e.title}
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
              {e.desc}
            </Text>
          </Box>
        ))}
      </SimpleGrid>
    </VStack>
  );
}
