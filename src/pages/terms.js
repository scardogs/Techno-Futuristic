import { Heading, Text, VStack } from "@chakra-ui/react";

export default function TermsPage() {
  return (
    <VStack align="stretch" spacing={6}>
      <Heading size="2xl">Terms</Heading>
      <Text color="gray.300">
        Use of this site constitutes acceptance of our terms.
      </Text>
    </VStack>
  );
}
