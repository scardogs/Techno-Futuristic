import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  Icon,
  Flex,
  Image,
  Badge,
  Button,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import {
  FaCoffee,
  FaSeedling,
  FaUsers,
  FaHeart,
  FaAward,
  FaGlobe,
  FaLightbulb,
} from "react-icons/fa";
import PageHeader from "../components/common/PageHeader";
import PageContainer from "../components/common/PageContainer";
import Card from "../components/common/Card";
import {
  useScrollAnimation,
  animationVariants,
} from "../hooks/useScrollAnimation";

export default function AboutPage() {
  const { ref: storyRef, isInView: storyInView } = useScrollAnimation();
  const { ref: valuesRef, isInView: valuesInView } = useScrollAnimation();
  const { ref: teamRef, isInView: teamInView } = useScrollAnimation();

  const values = [
    {
      icon: FaCoffee,
      title: "Precision Roasting",
      description:
        "We blend craft with computation to deliver consistent excellence in every cup.",
      color: "brand.500",
    },
    {
      icon: FaSeedling,
      title: "Sustainable Sourcing",
      description:
        "Ethically sourced beans from farmers who share our commitment to quality and sustainability.",
      color: "purple.500",
    },
    {
      icon: FaUsers,
      title: "Community Events",
      description:
        "Building connections through hackathons, art exhibitions, and synthwave nights.",
      color: "magenta.500",
    },
  ];

  const milestones = [
    {
      year: "2025",
      title: "Neon Cafe Founded",
      description:
        "Started with a vision to create the ultimate cyber cafe experience",
    },
    {
      year: "2025",
      title: "First Synthwave Night",
      description: "Launched our legendary Friday night events",
    },
    {
      year: "2025",
      title: "Tech Community Hub",
      description: "Became the go-to spot for developers and digital artists",
    },
  ];

  return (
    <PageContainer spacing={12}>
      <PageHeader
        title="Our Story"
        subtitle="A cafe for technologists, artists, and late-night dreamers. Brewing since 2025."
      />

      {/* Story Section */}
      <motion.div
        ref={storyRef}
        initial="initial"
        animate={storyInView ? "animate" : "initial"}
        variants={animationVariants.fadeInUp}
      >
        <Card variant="neon" p={8}>
          <VStack spacing={6} align="stretch">
            <Heading size="lg" color="white">
              The Neon Vision
            </Heading>
            <Text color="gray.300" lineHeight={1.8} fontSize="lg">
              Born from the intersection of technology and artistry, Neon Cafe
              emerged as a sanctuary for creators who thrive in the glow of
              screens and the hum of innovation. We believe that great ideas are
              born in spaces that inspire, where the boundaries between work and
              play blur into something magical.
            </Text>
            <Text color="gray.300" lineHeight={1.8} fontSize="lg">
              Our mission is simple: to fuel the future by providing the perfect
              environment for digital pioneers, creative minds, and night owls
              who see the world in neon colors and infinite possibilities.
            </Text>
          </VStack>
        </Card>
      </motion.div>

      {/* Values Section */}
      <motion.div
        ref={valuesRef}
        initial="initial"
        animate={valuesInView ? "animate" : "initial"}
        variants={animationVariants.staggerContainer}
      >
        <VStack spacing={8} align="stretch">
          <Heading size="xl" textAlign="center" color="white">
            Our Values
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                variants={animationVariants.fadeInScale}
                whileHover={{ scale: 1.05 }}
              >
                <Card variant="default" p={6} textAlign="center">
                  <Icon
                    as={value.icon}
                    boxSize={12}
                    color={value.color}
                    mb={4}
                    filter="drop-shadow(0 0 8px currentColor)"
                  />
                  <Heading size="md" mb={3} color="white">
                    {value.title}
                  </Heading>
                  <Text color="gray.300" lineHeight={1.6}>
                    {value.description}
                  </Text>
                </Card>
              </motion.div>
            ))}
          </SimpleGrid>
        </VStack>
      </motion.div>

      {/* Milestones Section */}
      <motion.div
        ref={teamRef}
        initial="initial"
        animate={teamInView ? "animate" : "initial"}
        variants={animationVariants.fadeInUp}
      >
        <VStack spacing={8} align="stretch">
          <Heading size="xl" textAlign="center" color="white">
            Our Journey
          </Heading>
          <VStack spacing={4} align="stretch">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                variants={animationVariants.fadeInScale}
                whileHover={{ scale: 1.02 }}
              >
                <Card variant="purple" p={6}>
                  <Flex align="center" gap={6}>
                    <Box
                      width="80px"
                      height="80px"
                      borderRadius="full"
                      bgGradient="linear(to-br, purple.500, magenta.500)"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      color="white"
                      fontWeight="bold"
                      fontSize="lg"
                      flexShrink={0}
                    >
                      {milestone.year}
                    </Box>
                    <Box flex="1">
                      <Heading size="md" mb={2} color="white">
                        {milestone.title}
                      </Heading>
                      <Text color="gray.300">{milestone.description}</Text>
                    </Box>
                  </Flex>
                </Card>
              </motion.div>
            ))}
          </VStack>
        </VStack>
      </motion.div>

      {/* Call to Action */}
      <motion.div
        initial="initial"
        animate={teamInView ? "animate" : "initial"}
        variants={animationVariants.fadeInUp}
      >
        <Card variant="neon" p={8} textAlign="center">
          <VStack spacing={6}>
            <Icon as={FaHeart} boxSize={12} color="magenta.500" />
            <Heading size="lg" color="white">
              Join Our Community
            </Heading>
            <Text color="gray.300" fontSize="lg" maxW="2xl">
              Whether you're coding the next big thing, creating digital art, or
              simply seeking the perfect cup of coffee, Neon Cafe is your home
              away from home in the digital age.
            </Text>
            <Flex gap={4} wrap="wrap" justify="center">
              <Button
                variant="solid"
                size="lg"
                _hover={{
                  transform: "translateY(-2px)",
                  boxShadow: "0 0 25px rgba(0,194,255,0.8)",
                }}
              >
                Visit Us Today
              </Button>
              <Button
                variant="neon"
                size="lg"
                _hover={{
                  transform: "translateY(-2px)",
                  boxShadow: "0 0 25px rgba(0,194,255,0.6)",
                }}
              >
                Join Events
              </Button>
            </Flex>
          </VStack>
        </Card>
      </motion.div>
    </PageContainer>
  );
}
