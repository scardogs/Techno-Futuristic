import { useEffect, useState } from "react";
import {
  Box,
  Heading,
  SimpleGrid,
  Text,
  VStack,
  HStack,
  Badge,
  Skeleton,
  SkeletonText,
  Image,
  Flex,
} from "@chakra-ui/react";

export default function MenuPage() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadMenu() {
      try {
        const res = await fetch("/api/content?type=menu");
        const data = await res.json();

        // Group items by category (you can add a category field to items)
        const grouped = data.reduce((acc, item) => {
          const category = item.data?.category || "Signature Coffees";
          if (!acc[category]) acc[category] = [];
          acc[category].push(item);
          return acc;
        }, {});

        setCategories(
          Object.entries(grouped).map(([name, items]) => ({ name, items }))
        );
      } catch (e) {
        console.error("Failed to load menu:", e);
        // Fallback to static data
        setCategories([
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
              {
                title: "Cryo Brew",
                desc: "24h steep, ultra smooth",
                price: "$5",
              },
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
              {
                title: "Data Donut",
                desc: "Vanilla, confetti pop",
                price: "$3",
              },
              {
                title: "Pixel Toast",
                desc: "Avocado, chili crunch",
                price: "$7",
              },
            ],
          },
        ]);
      } finally {
        setLoading(false);
      }
    }
    loadMenu();
  }, []);

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
                  <Skeleton height="20px" mb={4} />
                  <VStack align="stretch" spacing={4}>
                    {Array(3)
                      .fill(0)
                      .map((_, j) => (
                        <Box key={j}>
                          <Skeleton height="16px" mb={1} />
                          <SkeletonText noOfLines={1} />
                        </Box>
                      ))}
                  </VStack>
                </Box>
              ))
          : categories.map((cat) => (
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
                    <Box key={it.title || it._id}>
                      <Flex direction={{ base: "column", sm: "row" }} gap={3}>
                        {it.image && (
                          <Box flexShrink={0}>
                            <Image
                              src={it.image}
                              alt={it.title || "Menu item"}
                              width="80px"
                              height="80px"
                              objectFit="cover"
                              borderRadius="8px"
                              border="1px solid"
                              borderColor="whiteAlpha.200"
                            />
                          </Box>
                        )}
                        <Box flex="1">
                          <HStack justify="space-between" align="baseline">
                            <Text fontWeight="semibold">{it.title}</Text>
                            <Text color="brand.400">{it.price}</Text>
                          </HStack>
                          <Text fontSize="sm" color="gray.400">
                            {it.desc || it.description}
                          </Text>
                        </Box>
                      </Flex>
                    </Box>
                  ))}
                </VStack>
              </Box>
            ))}
      </SimpleGrid>
    </VStack>
  );
}
