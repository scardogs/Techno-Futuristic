import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";

export default function ReservationsPage() {
  return (
    <VStack align="stretch" spacing={8}>
      <Heading
        size="2xl"
        color="brand.500"
        textShadow="0 0 24px rgba(0,194,255,0.7)"
      >
        Reservations
      </Heading>
      <Box
        p={6}
        borderRadius="16px"
        border="1px solid"
        borderColor="whiteAlpha.200"
        bg="rgba(255,255,255,0.02)"
      >
        <VStack spacing={4} align="stretch">
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Input placeholder="Ada Lovelace" />
          </FormControl>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input type="email" placeholder="ada@neoncafe.com" />
          </FormControl>
          <FormControl>
            <FormLabel>Party Size</FormLabel>
            <Select defaultValue="2">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                <option key={n} value={n}>
                  {n}
                </option>
              ))}
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel>Date & Time</FormLabel>
            <Input type="datetime-local" />
          </FormControl>
          <FormControl>
            <FormLabel>Notes</FormLabel>
            <Textarea placeholder="Window seat, please" />
          </FormControl>
          <Button variant="solid" alignSelf="flex-start">
            Book Table
          </Button>
        </VStack>
      </Box>
    </VStack>
  );
}
