import Head from "next/head";
import {
  Box,
  Button,
  Heading,
  HStack,
  SimpleGrid,
  Text,
  VStack,
  Input,
} from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <Head>
        <title>Neon Cafe — Techno Futuristic</title>
        <meta
          name="description"
          content="Neon Cafe — neon glow, grids, motion blur."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <VStack align="stretch" spacing={16}>
        <Box pt={{ base: 4, md: 10 }}>
          <Heading size="3xl" lineHeight={1.1}>
            Neon Cafe
          </Heading>
          <Text
            mt={4}
            fontSize={{ base: "lg", md: "xl" }}
            color="gray.300"
            maxW="2xl"
          >
            A sci‑fi cafe for creators and night owls. Neon glow, precise brews,
            and a vibe engineered for focus.
          </Text>
          <HStack spacing={4} mt={6}>
            <Button as="a" href="/menu" variant="solid">
              Explore Menu
            </Button>
            <Button as="a" href="/reservations" variant="neon">
              Reserve a Table
            </Button>
          </HStack>
        </Box>

        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
          {[
            {
              title: "Precision Coffee",
              desc: "Dialed‑in profiles, consistent extraction.",
            },
            {
              title: "Cyber Ambience",
              desc: "Neon grids, ambient synths, deep focus.",
            },
            {
              title: "Events & Community",
              desc: "Hack nights, art labs, live synthwave.",
            },
          ].map((f) => (
            <Box
              key={f.title}
              p={6}
              border="1px solid"
              borderColor="whiteAlpha.150"
              borderRadius="16px"
              bg="rgba(255,255,255,0.02)"
            >
              <Heading size="md" mb={2}>
                {f.title}
              </Heading>
              <Text color="gray.400">{f.desc}</Text>
            </Box>
          ))}
        </SimpleGrid>

        <Box>
          <Heading size="lg" mb={4}>
            Featured Drinks
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
            {["Neon Latte", "Quantum Espresso", "Aurora Tonic"].map((n) => (
              <Box
                key={n}
                p={6}
                borderRadius="16px"
                border="1px solid"
                borderColor="whiteAlpha.200"
                bgGradient="linear(to-br, rgba(0,194,255,0.08), rgba(155,92,255,0.08))"
              >
                <Heading size="md">{n}</Heading>
                <Text mt={2} color="gray.400">
                  Limited release. Ask your barista.
                </Text>
              </Box>
            ))}
          </SimpleGrid>
        </Box>

        <Box>
          <Heading size="lg" mb={4}>
            Neon Stats
          </Heading>
          <SimpleGrid columns={{ base: 2, md: 4 }} spacing={6}>
            {[
              { k: "Brew Profiles", v: "128" },
              { k: "Beans", v: "12 origins" },
              { k: "Wi‑Fi", v: "2 Gbps" },
              { k: "Open", v: "7a–12a" },
            ].map((s) => (
              <Box
                key={s.k}
                p={6}
                borderRadius="14px"
                border="1px solid"
                borderColor="whiteAlpha.200"
                bg="rgba(255,255,255,0.02)"
              >
                <Text color="brand.400" fontSize="sm">
                  {s.k}
                </Text>
                <Heading size="md">{s.v}</Heading>
              </Box>
            ))}
          </SimpleGrid>
        </Box>

        <Box>
          <Heading size="lg" mb={4}>
            Weekly Specials
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
            {[
              { t: "Chromatic Mocha", d: "Single‑origin cacao, cyan zest" },
              { t: "Ion Drift Matcha", d: "Ceremonial, yuzu mist" },
              { t: "Phase‑Shift Chai", d: "Cardamom, star anise, neon honey" },
            ].map((sp) => (
              <Box
                key={sp.t}
                p={6}
                borderRadius="16px"
                border="1px solid"
                borderColor="whiteAlpha.200"
                bg="rgba(255,255,255,0.03)"
              >
                <Heading size="md">{sp.t}</Heading>
                <Text mt={2} color="gray.400">
                  {sp.d}
                </Text>
                <Button mt={4} size="sm" variant="neon">
                  Try now
                </Button>
              </Box>
            ))}
          </SimpleGrid>
        </Box>

        <Box>
          <Heading size="lg" mb={4}>
            What Guests Say
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
            {[
              { q: "The focus vibes are unreal.", a: "— Mira, Designer" },
              { q: "Best espresso clarity in town.", a: "— Ken, Barista" },
              {
                q: "Feels like coding in a sci‑fi film.",
                a: "— Ravi, Engineer",
              },
            ].map((t) => (
              <Box
                key={t.q}
                p={6}
                borderRadius="16px"
                border="1px solid"
                borderColor="whiteAlpha.200"
                bg="rgba(255,255,255,0.02)"
              >
                <Text color="gray.200">“{t.q}”</Text>
                <Text mt={2} color="gray.500">
                  {t.a}
                </Text>
              </Box>
            ))}
          </SimpleGrid>
        </Box>

        <Box
          borderRadius="16px"
          border="1px solid"
          borderColor="whiteAlpha.200"
          bgGradient="linear(to-r, rgba(0,194,255,0.12), rgba(155,92,255,0.12))"
          p={6}
        >
          <HStack
            justify="space-between"
            align="center"
            flexWrap="wrap"
            gap={4}
          >
            <Box>
              <Heading size="md">Join the Neon list</Heading>
              <Text color="gray.300">Weekly specials, events, and drops.</Text>
            </Box>
            <HStack>
              <Input placeholder="you@neoncafe.com" maxW="260px" />
              <Button variant="solid">Subscribe</Button>
            </HStack>
          </HStack>
        </Box>

        <Box
          textAlign="center"
          py={6}
          borderRadius="12px"
          border="1px solid"
          borderColor="whiteAlpha.200"
          bg="rgba(255,255,255,0.02)"
        >
          <Heading size="md">After‑hours Synthwave — Fridays 9 PM</Heading>
          <Text mt={2} color="gray.400">
            Free entry with any drink. See the{" "}
            <Button
              as="a"
              href="/events"
              size="sm"
              variant="link"
              color="brand.400"
            >
              events
            </Button>
            .
          </Text>
        </Box>
      </VStack>
    </>
  );
}
