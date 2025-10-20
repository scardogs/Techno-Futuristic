import { Box, Heading, SimpleGrid, Image, VStack } from "@chakra-ui/react";

const IMGS = [
  "/images/coffee-1.jpg",
  "/images/coffee-2.jpg",
  "/images/coffee-3.jpg",
  "/images/coffee-4.jpg",
  "/images/coffee-5.jpg",
  "/images/coffee-6.jpg",
];

export default function GalleryPage() {
  return (
    <VStack align="stretch" spacing={10}>
      <Box>
        <Heading
          size="2xl"
          color="brand.500"
          textShadow="0 0 24px rgba(0,194,255,0.7)"
        >
          Gallery
        </Heading>
      </Box>
      <SimpleGrid columns={{ base: 2, md: 3 }} spacing={4}>
        {IMGS.map((src) => (
          <Box
            key={src}
            overflow="hidden"
            borderRadius="12px"
            border="1px solid"
            borderColor="whiteAlpha.200"
          >
            <Image
              src={src}
              alt="Neon Cafe"
              width="100%"
              height="auto"
              objectFit="cover"
            />
          </Box>
        ))}
      </SimpleGrid>
    </VStack>
  );
}
