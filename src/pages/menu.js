import {
  Box,
  Heading,
  SimpleGrid,
  Text,
  VStack,
  HStack,
  Badge,
} from "@chakra-ui/react";

const categories = [
  {
    name: "Signature Coffees",
    items: [
      {
        title: "Quantum Espresso",
        desc: "Dense, chocolate finish",
        price: "$4.5",
      },
      {
        title: "Neon Latte",
        desc: "Velvety microfoam, cyan sugar rim",
        price: "$5.5",
      },
      {
        title: "Hologram Cappuccino",
        desc: "Balanced and bright",
        price: "$5",
      },
    ],
  },
  {
    name: "Cold Lab",
    items: [
      { title: "Cryo Brew", desc: "24h steep, ultra smooth", price: "$5" },
      {
        title: "Magenta Fizz",
        desc: "Nitro cold brew + raspberry",
        price: "$6",
      },
      {
        title: "Aurora Tonic",
        desc: "Espresso over elderflower tonic",
        price: "$6",
      },
    ],
  },
  {
    name: "Bites",
    items: [
      {
        title: "Cyber Croissant",
        desc: "Butter layers, neon glaze",
        price: "$3.5",
      },
      { title: "Data Donut", desc: "Vanilla, confetti pop", price: "$3" },
      { title: "Pixel Toast", desc: "Avocado, chili crunch", price: "$7" },
    ],
  },
];

export default function MenuPage() {
  return (
    <VStack align="stretch" spacing={10}>
      <Box>
        <Heading
          size="2xl"
          color="brand.500"
          textShadow="0 0 24px rgba(0,194,255,0.7)"
        >
          Menu
        </Heading>
        <Text mt={3} color="gray.300">
          Engineered flavors for late nights and bright minds.
        </Text>
      </Box>

      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
        {categories.map((cat) => (
          <Box
            key={cat.name}
            p={6}
            border="1px solid"
            borderColor="whiteAlpha.150"
            borderRadius="16px"
            bg="rgba(255,255,255,0.02)"
            boxShadow="0 0 24px rgba(0,194,255,0.08)"
          >
            <HStack justify="space-between" mb={4}>
              <Heading size="md">{cat.name}</Heading>
              <Badge colorScheme="purple" variant="subtle">
                Featured
              </Badge>
            </HStack>
            <VStack align="stretch" spacing={4}>
              {cat.items.map((it) => (
                <Box key={it.title}>
                  <HStack justify="space-between" align="baseline">
                    <Text fontWeight="semibold">{it.title}</Text>
                    <Text color="brand.400">{it.price}</Text>
                  </HStack>
                  <Text fontSize="sm" color="gray.400">
                    {it.desc}
                  </Text>
                </Box>
              ))}
            </VStack>
          </Box>
        ))}
      </SimpleGrid>
    </VStack>
  );
}
