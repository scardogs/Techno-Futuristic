import { Box, Heading, Text, SimpleGrid, VStack } from "@chakra-ui/react";

export default function AboutPage() {
  return (
    <VStack align="stretch" spacing={10}>
      <Box>
        <Heading
          size="2xl"
          color="brand.500"
          textShadow="0 0 24px rgba(0,194,255,0.7)"
        >
          Our Story
        </Heading>
        <Text mt={3} color="gray.300">
          A cafe for technologists, artists, and late-night dreamers. Brewing
          since 2025.
        </Text>
      </Box>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
        {["Precision roasting", "Sustainable sourcing", "Community events"].map(
          (t) => (
            <Box
              key={t}
              p={6}
              border="1px solid"
              borderColor="whiteAlpha.150"
              borderRadius="16px"
              bg="rgba(255,255,255,0.02)"
            >
              <Heading size="md" mb={2}>
                {t}
              </Heading>
              <Text color="gray.400">
                We blend craft with computation to deliver consistent
                excellence.
              </Text>
            </Box>
          )
        )}
      </SimpleGrid>
    </VStack>
  );
}
