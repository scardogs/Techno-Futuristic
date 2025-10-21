import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  Textarea,
  VStack,
  Text,
  SimpleGrid,
  Icon,
  Flex,
  Heading,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import {
  FaCalendarAlt,
  FaClock,
  FaUsers,
  FaEnvelope,
  FaUser,
} from "react-icons/fa";
import PageHeader from "../components/common/PageHeader";
import PageContainer from "../components/common/PageContainer";
import Card from "../components/common/Card";
import {
  useScrollAnimation,
  animationVariants,
} from "../hooks/useScrollAnimation";

export default function ReservationsPage() {
  const { ref: formRef, isInView: formInView } = useScrollAnimation();
  const { ref: infoRef, isInView: infoInView } = useScrollAnimation();

  return (
    <PageContainer spacing={12}>
      <PageHeader
        title="Reservations"
        subtitle="Secure your spot in the cyber cafe. Book ahead for the best experience."
      />

      <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={8}>
        {/* Reservation Form */}
        <motion.div
          ref={formRef}
          initial="initial"
          animate={formInView ? "animate" : "initial"}
          variants={animationVariants.fadeInScale}
        >
          <Card variant="neon" p={8}>
            <VStack spacing={6} align="stretch">
              <Box>
                <Heading size="lg" mb={2} color="white">
                  Book Your Table
                </Heading>
                <Text color="gray.300">
                  Fill out the form below to reserve your spot
                </Text>
              </Box>

              <FormControl>
                <FormLabel color="gray.300">
                  <Flex align="center" gap={2}>
                    <Icon as={FaUser} color="brand.400" />
                    Full Name
                  </Flex>
                </FormLabel>
                <Input
                  placeholder="Ada Lovelace"
                  bg="rgba(255,255,255,0.05)"
                  borderColor="whiteAlpha.200"
                  _focus={{
                    borderColor: "brand.400",
                    boxShadow: "0 0 0 1px rgba(0,194,255,0.3)",
                  }}
                />
              </FormControl>

              <FormControl>
                <FormLabel color="gray.300">
                  <Flex align="center" gap={2}>
                    <Icon as={FaEnvelope} color="brand.400" />
                    Email Address
                  </Flex>
                </FormLabel>
                <Input
                  type="email"
                  placeholder="ada@neoncafe.com"
                  bg="rgba(255,255,255,0.05)"
                  borderColor="whiteAlpha.200"
                  _focus={{
                    borderColor: "brand.400",
                    boxShadow: "0 0 0 1px rgba(0,194,255,0.3)",
                  }}
                />
              </FormControl>

              <FormControl>
                <FormLabel color="gray.300">
                  <Flex align="center" gap={2}>
                    <Icon as={FaUsers} color="brand.400" />
                    Party Size
                  </Flex>
                </FormLabel>
                <Select
                  defaultValue="2"
                  bg="rgba(255,255,255,0.05)"
                  borderColor="whiteAlpha.200"
                  _focus={{
                    borderColor: "brand.400",
                    boxShadow: "0 0 0 1px rgba(0,194,255,0.3)",
                  }}
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                    <option key={n} value={n}>
                      {n} {n === 1 ? "person" : "people"}
                    </option>
                  ))}
                </Select>
              </FormControl>

              <FormControl>
                <FormLabel color="gray.300">
                  <Flex align="center" gap={2}>
                    <Icon as={FaCalendarAlt} color="brand.400" />
                    Date & Time
                  </Flex>
                </FormLabel>
                <Input
                  type="datetime-local"
                  bg="rgba(255,255,255,0.05)"
                  borderColor="whiteAlpha.200"
                  _focus={{
                    borderColor: "brand.400",
                    boxShadow: "0 0 0 1px rgba(0,194,255,0.3)",
                  }}
                />
              </FormControl>

              <FormControl>
                <FormLabel color="gray.300">Special Requests</FormLabel>
                <Textarea
                  placeholder="Window seat, please. Any dietary restrictions?"
                  bg="rgba(255,255,255,0.05)"
                  borderColor="whiteAlpha.200"
                  _focus={{
                    borderColor: "brand.400",
                    boxShadow: "0 0 0 1px rgba(0,194,255,0.3)",
                  }}
                />
              </FormControl>

              <Button
                variant="solid"
                size="lg"
                _hover={{
                  transform: "translateY(-2px)",
                  boxShadow: "0 0 25px rgba(0,194,255,0.8)",
                }}
                transition="all 0.3s ease"
              >
                Reserve Table
              </Button>
            </VStack>
          </Card>
        </motion.div>

        {/* Reservation Info */}
        <motion.div
          ref={infoRef}
          initial="initial"
          animate={infoInView ? "animate" : "initial"}
          variants={animationVariants.fadeInScale}
        >
          <VStack spacing={6} align="stretch">
            <Card variant="purple" p={6}>
              <VStack spacing={4} align="stretch">
                <Heading size="md" color="white">
                  <Flex align="center" gap={2}>
                    <Icon as={FaClock} color="purple.400" />
                    Hours
                  </Flex>
                </Heading>
                <VStack spacing={2} align="stretch">
                  <Flex justify="space-between">
                    <Text color="gray.300">Monday - Friday</Text>
                    <Text color="white">7:00 AM - 12:00 AM</Text>
                  </Flex>
                  <Flex justify="space-between">
                    <Text color="gray.300">Saturday - Sunday</Text>
                    <Text color="white">8:00 AM - 1:00 AM</Text>
                  </Flex>
                </VStack>
              </VStack>
            </Card>

            <Card variant="default" p={6}>
              <VStack spacing={4} align="stretch">
                <Heading size="md" color="white">
                  Reservation Policy
                </Heading>
                <VStack spacing={3} align="stretch">
                  <Text color="gray.300" fontSize="sm">
                    • Reservations can be made up to 30 days in advance
                  </Text>
                  <Text color="gray.300" fontSize="sm">
                    • Please arrive within 15 minutes of your reservation time
                  </Text>
                  <Text color="gray.300" fontSize="sm">
                    • Cancellations must be made at least 2 hours in advance
                  </Text>
                  <Text color="gray.300" fontSize="sm">
                    • Large parties (6+) require special arrangements
                  </Text>
                </VStack>
              </VStack>
            </Card>

            <Card variant="neon" p={6}>
              <VStack spacing={4} align="stretch">
                <Heading size="md" color="white">
                  Special Events
                </Heading>
                <Text color="gray.300" fontSize="sm">
                  Join us for Synthwave Nights every Friday at 9 PM. Free entry
                  with any drink purchase. Perfect for networking and enjoying
                  our cyber atmosphere.
                </Text>
                <Button
                  variant="neon"
                  size="sm"
                  alignSelf="flex-start"
                  _hover={{
                    transform: "translateY(-2px)",
                    boxShadow: "0 0 25px rgba(0,194,255,0.6)",
                  }}
                >
                  View Events
                </Button>
              </VStack>
            </Card>
          </VStack>
        </motion.div>
      </SimpleGrid>
    </PageContainer>
  );
}
