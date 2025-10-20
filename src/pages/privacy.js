import { Heading, Text, VStack } from "@chakra-ui/react";

export default function PrivacyPage() {
  return (
    <VStack align="stretch" spacing={6}>
      <Heading size="2xl">Privacy</Heading>
      <Text color="gray.300">
        We respect your privacy. This is a demo policy page.
      </Text>
    </VStack>
  );
}
