import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Textarea,
  VStack,
  HStack,
  Link,
  Icon,
} from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaTiktok } from "react-icons/fa";

export default function ContactPage() {
  return (
    <VStack align="stretch" spacing={8}>
      <Heading
        size="2xl"
        color="brand.500"
        textShadow="0 0 24px rgba(0,194,255,0.7)"
      >
        Contact
      </Heading>
      <HStack align="start" spacing={6} flexWrap="wrap">
        <Box
          flex="1 1 360px"
          p={6}
          borderRadius="16px"
          border="1px solid"
          borderColor="whiteAlpha.200"
          bg="rgba(255,255,255,0.02)"
        >
          <VStack spacing={4} align="stretch">
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input placeholder="Name" />
            </FormControl>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input type="email" placeholder="you@neoncafe.com" />
            </FormControl>
            <FormControl>
              <FormLabel>Message</FormLabel>
              <Textarea minH="140px" placeholder="Say hello" />
            </FormControl>
            <Button variant="solid" alignSelf="flex-start">
              Send
            </Button>
          </VStack>
        </Box>
        <Box
          flex="1 1 240px"
          p={6}
          borderRadius="16px"
          border="1px solid"
          borderColor="whiteAlpha.200"
          bg="rgba(255,255,255,0.02)"
        >
          <Heading size="md" mb={3}>
            Socials
          </Heading>
          <VStack align="stretch">
            <Link href="#" color="gray.300">
              <Icon as={FaInstagram} /> Instagram
            </Link>
            <Link href="#" color="gray.300">
              <Icon as={FaTwitter} /> Twitter
            </Link>
            <Link href="#" color="gray.300">
              <Icon as={FaTiktok} /> TikTok
            </Link>
          </VStack>
        </Box>
      </HStack>
    </VStack>
  );
}
