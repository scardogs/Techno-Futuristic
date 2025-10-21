import NextLink from "next/link";
import {
  Box,
  Container,
  Flex,
  HStack,
  Link,
  Text,
  Icon,
  Spacer,
  Button,
} from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";
import NeonGrid from "./NeonGrid";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "/menu" },
  { label: "About", href: "/about" },
  { label: "Locations", href: "/locations" },
  { label: "Events", href: "/events" },
  { label: "Gallery", href: "/gallery" },
  { label: "Reservations", href: "/reservations" },
  { label: "Contact", href: "/contact" },
  { label: "Admin", href: "/admin" },
];

export default function Layout({ children }) {
  return (
    <Box
      minH="100dvh"
      position="relative"
      display="flex"
      flexDirection="column"
    >
      <NeonGrid />

      <Box
        as="header"
        position="sticky"
        top={0}
        zIndex={10}
        borderBottom="1px solid"
        borderColor="whiteAlpha.200"
        backdropFilter="blur(8px)"
        bg="rgba(10,12,16,0.6)"
        flexShrink={0}
      >
        <Container maxW="6xl" py={4}>
          <Flex align="center" gap={6}>
            <Text
              fontWeight="bold"
              color="brand.500"
              textShadow="0 0 18px rgba(0,194,255,0.8)"
            >
              NEON CAFE
            </Text>
            <HStack spacing={6} display={{ base: "none", md: "flex" }}>
              {navItems.map((item) => (
                <Link
                  as={NextLink}
                  key={item.href}
                  href={item.href}
                  fontSize="sm"
                  color="gray.300"
                  _hover={{ color: "white" }}
                >
                  {item.label}
                </Link>
              ))}
            </HStack>
            <Spacer />
            <Button
              as={NextLink}
              href="/reservations"
              size="sm"
              variant="solid"
            >
              Reserve
            </Button>
          </Flex>
        </Container>
      </Box>

      <Box as="main" flex="1" position="relative" zIndex={1}>
        <Container maxW="6xl" px={4} py={{ base: 8, md: 12 }}>
          {children}
        </Container>
      </Box>

      <Box
        as="footer"
        borderTop="1px solid"
        borderColor="whiteAlpha.200"
        py={8}
        bg="rgba(10,12,16,0.4)"
        backdropFilter="blur(6px)"
        flexShrink={0}
        mt="auto"
      >
        <Container maxW="6xl">
          <Flex
            direction={{ base: "column", md: "row" }}
            align={{ base: "flex-start", md: "center" }}
            gap={4}
          >
            <Text color="gray.400">
              © {new Date().getFullYear()} Neon Cafe. All rights reserved.
            </Text>
            <Spacer />
            <HStack spacing={4}>
              <Link as={NextLink} href="/privacy" color="gray.400">
                Privacy
              </Link>
              <Link as={NextLink} href="/terms" color="gray.400">
                Terms
              </Link>
              <Link href="https://github.com" isExternal color="gray.400">
                <Icon as={FaGithub} />
              </Link>
            </HStack>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
}
