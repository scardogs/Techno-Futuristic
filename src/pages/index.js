import { useEffect, useState, useRef } from "react";
import Head from "next/head";
import {
  Box,
  Button,
  Heading,
  HStack,
  SimpleGrid,
  Text,
  VStack,
  Image,
  Skeleton,
  SkeletonText,
  Container,
  Flex,
  Icon,
  useBreakpointValue,
} from "@chakra-ui/react";
import { motion, useInView } from "framer-motion";
import {
  FaCoffee,
  FaWifi,
  FaClock,
  FaSeedling,
  FaStar,
  FaQuoteLeft,
  FaMapMarkerAlt,
  FaInstagram,
  FaTwitter,
  FaFacebook,
  FaUser,
  FaCalendarAlt,
  FaHeart,
  FaChevronRight,
} from "react-icons/fa";

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const fadeInScale = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5, ease: "easeOut" },
};

const slideInLeft = {
  initial: { opacity: 0, x: -60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const slideInRight = {
  initial: { opacity: 0, x: 60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

// Additional animation variants for scroll-triggered effects
const slideInUp = {
  initial: { opacity: 0, y: 100 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" },
};

const scaleIn = {
  initial: { opacity: 0, scale: 0.5 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.7, ease: "easeOut" },
};

const rotateIn = {
  initial: { opacity: 0, rotate: -10 },
  animate: { opacity: 1, rotate: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const bounceIn = {
  initial: { opacity: 0, y: -50 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      type: "spring",
      stiffness: 100,
    },
  },
};

export default function Home() {
  const [specials, setSpecials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [mounted, setMounted] = useState(false);
  const isMobile = useBreakpointValue({ base: true, md: false });

  // Refs for scroll-triggered animations
  const heroRef = useRef(null);
  const featuresRef = useRef(null);
  const drinksRef = useRef(null);
  const statsRef = useRef(null);
  const testimonialsRef = useRef(null);
  const galleryRef = useRef(null);
  const blogRef = useRef(null);
  const teamRef = useRef(null);
  const locationRef = useRef(null);
  const socialRef = useRef(null);
  const newsletterRef = useRef(null);
  const eventsRef = useRef(null);

  // useInView hooks for each section
  const heroInView = useInView(heroRef, { once: true, margin: "-100px" });
  const featuresInView = useInView(featuresRef, {
    once: true,
    margin: "-100px",
  });
  const drinksInView = useInView(drinksRef, { once: true, margin: "-100px" });
  const statsInView = useInView(statsRef, { once: true, margin: "-100px" });
  const testimonialsInView = useInView(testimonialsRef, {
    once: true,
    margin: "-100px",
  });
  const galleryInView = useInView(galleryRef, { once: true, margin: "-100px" });
  const blogInView = useInView(blogRef, { once: true, margin: "-100px" });
  const teamInView = useInView(teamRef, { once: true, margin: "-100px" });
  const locationInView = useInView(locationRef, {
    once: true,
    margin: "-100px",
  });
  const socialInView = useInView(socialRef, { once: true, margin: "-100px" });
  const newsletterInView = useInView(newsletterRef, {
    once: true,
    margin: "-100px",
  });
  const eventsInView = useInView(eventsRef, { once: true, margin: "-100px" });

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    async function loadSpecials() {
      try {
        const res = await fetch("/api/content?type=special");
        const data = await res.json();
        setSpecials(data.slice(0, 3)); // Show only first 3
      } catch (e) {
        console.error("Failed to load specials:", e);
      } finally {
        setLoading(false);
      }
    }
    loadSpecials();
  }, []);

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

      <VStack align="stretch" spacing={{ base: 12, md: 20 }}>
        {/* Enhanced Hero Section */}
        <motion.div
          ref={heroRef}
          initial="initial"
          animate={mounted && heroInView ? "animate" : "initial"}
          variants={fadeInUp}
          style={{ width: "100%" }}
        >
          <Box
            pt={{ base: 8, md: 16 }}
            pb={{ base: 8, md: 12 }}
            position="relative"
            overflow="hidden"
          >
            {/* Background glow effect */}
            <Box
              position="absolute"
              top="50%"
              left="50%"
              transform="translate(-50%, -50%)"
              width="800px"
              height="400px"
              bgGradient="radial(circle, rgba(0,194,255,0.15) 0%, rgba(155,92,255,0.1) 50%, transparent 70%)"
              filter="blur(60px)"
              opacity={0.6}
            />

            <Container maxW="6xl" position="relative" zIndex={1}>
              <VStack spacing={8} align="start">
                <motion.div variants={slideInLeft} style={{ width: "100%" }}>
                  <Heading
                    size={{ base: "2xl", md: "4xl" }}
                    lineHeight={1.1}
                    fontWeight="bold"
                    bgGradient="linear(to-r, brand.400, purple.500, magenta.500)"
                    bgClip="text"
                    textShadow="0 0 30px rgba(0,194,255,0.3)"
                  >
                    Neon Cafe
                  </Heading>
                </motion.div>

                <motion.div variants={slideInRight} style={{ width: "100%" }}>
                  <Text
                    fontSize={{ base: "lg", md: "2xl" }}
                    color="gray.200"
                    maxW="3xl"
                    lineHeight={1.6}
                    fontWeight="300"
                  >
                    A sci‑fi cafe for creators and night owls. Neon glow,
                    precise brews, and a vibe engineered for focus.
                  </Text>
                </motion.div>

                <motion.div variants={fadeInScale} style={{ width: "100%" }}>
                  <Flex
                    direction={{ base: "column", sm: "row" }}
                    gap={4}
                    mt={8}
                    wrap="wrap"
                  >
                    <Button
                      as="a"
                      href="/menu"
                      variant="solid"
                      size="lg"
                      px={8}
                      py={6}
                      fontSize="lg"
                      fontWeight="semibold"
                      _hover={{
                        transform: "translateY(-2px)",
                        boxShadow: "0 0 25px rgba(0,194,255,0.8)",
                      }}
                      transition="all 0.3s ease"
                    >
                      Explore Menu
                    </Button>
                    <Button
                      as="a"
                      href="/reservations"
                      variant="neon"
                      size="lg"
                      px={8}
                      py={6}
                      fontSize="lg"
                      fontWeight="semibold"
                      _hover={{
                        transform: "translateY(-2px)",
                        boxShadow: "0 0 25px rgba(0,194,255,0.6)",
                      }}
                      transition="all 0.3s ease"
                    >
                      Reserve a Table
                    </Button>
                  </Flex>
                </motion.div>
              </VStack>
            </Container>
          </Box>
        </motion.div>

        {/* Enhanced Features Section */}
        <motion.div
          ref={featuresRef}
          initial="initial"
          animate={mounted && featuresInView ? "animate" : "initial"}
          variants={staggerContainer}
          style={{ width: "100%" }}
        >
          <VStack spacing={8} align="stretch">
            <motion.div variants={fadeInUp}>
              <Heading
                size="xl"
                textAlign="center"
                bgGradient="linear(to-r, brand.400, purple.500)"
                bgClip="text"
                mb={2}
              >
                Why Choose Neon Cafe?
              </Heading>
              <Text
                textAlign="center"
                color="gray.400"
                fontSize="lg"
                maxW="2xl"
                mx="auto"
              >
                Experience the future of coffee culture
              </Text>
            </motion.div>

            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
              {[
                {
                  title: "Precision Coffee",
                  desc: "Dialed‑in profiles, consistent extraction.",
                  icon: FaCoffee,
                  gradient:
                    "linear(to-br, rgba(0,194,255,0.1), rgba(0,194,255,0.05))",
                  borderColor: "brand.500",
                },
                {
                  title: "Cyber Ambience",
                  desc: "Neon grids, ambient synths, deep focus.",
                  icon: FaWifi,
                  gradient:
                    "linear(to-br, rgba(155,92,255,0.1), rgba(155,92,255,0.05))",
                  borderColor: "purple.500",
                },
                {
                  title: "Events & Community",
                  desc: "Hack nights, art labs, live synthwave.",
                  icon: FaClock,
                  gradient:
                    "linear(to-br, rgba(255,31,143,0.1), rgba(255,31,143,0.05))",
                  borderColor: "magenta.500",
                },
              ].map((f, index) => (
                <motion.div
                  key={f.title}
                  variants={fadeInScale}
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.2 },
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Box
                    p={8}
                    border="1px solid"
                    borderColor={f.borderColor}
                    borderRadius="20px"
                    bgGradient={f.gradient}
                    backdropFilter="blur(10px)"
                    position="relative"
                    overflow="hidden"
                    _hover={{
                      boxShadow: `0 0 30px ${f.borderColor}40`,
                      borderColor: f.borderColor,
                    }}
                    transition="all 0.3s ease"
                  >
                    {/* Icon */}
                    <Box mb={4}>
                      <Icon
                        as={f.icon}
                        boxSize={8}
                        color={f.borderColor}
                        filter="drop-shadow(0 0 8px currentColor)"
                      />
                    </Box>

                    <Heading size="lg" mb={3} color="white">
                      {f.title}
                    </Heading>
                    <Text color="gray.300" lineHeight={1.6}>
                      {f.desc}
                    </Text>

                    {/* Subtle glow effect */}
                    <Box
                      position="absolute"
                      top={0}
                      right={0}
                      width="100px"
                      height="100px"
                      bgGradient={`radial(circle, ${f.borderColor}20, transparent)`}
                      filter="blur(20px)"
                      opacity={0.3}
                    />
                  </Box>
                </motion.div>
              ))}
            </SimpleGrid>
          </VStack>
        </motion.div>

        {/* Enhanced Featured Drinks Section */}
        <motion.div
          ref={drinksRef}
          initial="initial"
          animate={mounted && drinksInView ? "animate" : "initial"}
          variants={staggerContainer}
          style={{ width: "100%" }}
        >
          <VStack spacing={8} align="stretch">
            <motion.div variants={fadeInUp}>
              <Heading
                size="xl"
                textAlign="center"
                bgGradient="linear(to-r, brand.400, purple.500)"
                bgClip="text"
                mb={2}
              >
                Featured Drinks
              </Heading>
              <Text
                textAlign="center"
                color="gray.400"
                fontSize="lg"
                maxW="2xl"
                mx="auto"
              >
                Limited edition creations from our cyber baristas
              </Text>
            </motion.div>

            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
              {loading
                ? Array(3)
                    .fill(0)
                    .map((_, i) => (
                      <motion.div
                        key={i}
                        variants={fadeInScale}
                        style={{ animationDelay: `${i * 0.1}s` }}
                      >
                        <Box
                          p={8}
                          borderRadius="20px"
                          border="1px solid"
                          borderColor="whiteAlpha.200"
                          bgGradient="linear(to-br, rgba(0,194,255,0.08), rgba(155,92,255,0.08))"
                          backdropFilter="blur(10px)"
                        >
                          <Skeleton height="24px" mb={3} />
                          <SkeletonText mt="2" noOfLines={2} />
                          <Skeleton height="20px" mt={4} width="60%" />
                        </Box>
                      </motion.div>
                    ))
                : specials.length > 0
                ? specials.map((special, index) => (
                    <motion.div
                      key={special._id}
                      variants={fadeInScale}
                      whileHover={{
                        scale: 1.03,
                        transition: { duration: 0.2 },
                      }}
                      whileTap={{ scale: 0.97 }}
                    >
                      <Box
                        p={8}
                        borderRadius="20px"
                        border="1px solid"
                        borderColor="brand.500"
                        bgGradient="linear(to-br, rgba(0,194,255,0.12), rgba(155,92,255,0.08))"
                        backdropFilter="blur(10px)"
                        position="relative"
                        overflow="hidden"
                        _hover={{
                          boxShadow: "0 0 30px rgba(0,194,255,0.4)",
                          borderColor: "brand.400",
                        }}
                        transition="all 0.3s ease"
                      >
                        <Heading size="lg" mb={3} color="white">
                          {special.title}
                        </Heading>
                        <Text mt={3} color="gray.300" lineHeight={1.6}>
                          {special.description ||
                            "Limited release. Ask your barista."}
                        </Text>
                        {special.price && (
                          <Text
                            mt={4}
                            color="brand.400"
                            fontWeight="bold"
                            fontSize="lg"
                          >
                            {special.price}
                          </Text>
                        )}

                        {/* Animated glow effect */}
                        <Box
                          position="absolute"
                          top={0}
                          right={0}
                          width="120px"
                          height="120px"
                          bgGradient="radial(circle, rgba(0,194,255,0.2), transparent)"
                          filter="blur(25px)"
                          opacity={0.4}
                        />
                      </Box>
                    </motion.div>
                  ))
                : ["Neon Latte", "Quantum Espresso", "Aurora Tonic"].map(
                    (n, index) => (
                      <motion.div
                        key={n}
                        variants={fadeInScale}
                        whileHover={{
                          scale: 1.03,
                          transition: { duration: 0.2 },
                        }}
                        whileTap={{ scale: 0.97 }}
                      >
                        <Box
                          p={8}
                          borderRadius="20px"
                          border="1px solid"
                          borderColor="brand.500"
                          bgGradient="linear(to-br, rgba(0,194,255,0.12), rgba(155,92,255,0.08))"
                          backdropFilter="blur(10px)"
                          position="relative"
                          overflow="hidden"
                          _hover={{
                            boxShadow: "0 0 30px rgba(0,194,255,0.4)",
                            borderColor: "brand.400",
                          }}
                          transition="all 0.3s ease"
                        >
                          <Heading size="lg" mb={3} color="white">
                            {n}
                          </Heading>
                          <Text mt={3} color="gray.300" lineHeight={1.6}>
                            Limited release. Ask your barista.
                          </Text>

                          {/* Animated glow effect */}
                          <Box
                            position="absolute"
                            top={0}
                            right={0}
                            width="120px"
                            height="120px"
                            bgGradient="radial(circle, rgba(0,194,255,0.2), transparent)"
                            filter="blur(25px)"
                            opacity={0.4}
                          />
                        </Box>
                      </motion.div>
                    )
                  )}
            </SimpleGrid>
          </VStack>
        </motion.div>

        {/* Enhanced Neon Stats Section */}
        <motion.div
          ref={statsRef}
          initial="initial"
          animate={mounted && statsInView ? "animate" : "initial"}
          variants={scaleIn}
          style={{ width: "100%" }}
        >
          <VStack spacing={8} align="stretch">
            <motion.div variants={fadeInUp}>
              <Heading
                size="xl"
                textAlign="center"
                bgGradient="linear(to-r, brand.400, purple.500)"
                bgClip="text"
                mb={2}
              >
                Neon Stats
              </Heading>
              <Text
                textAlign="center"
                color="gray.400"
                fontSize="lg"
                maxW="2xl"
                mx="auto"
              >
                Powered by precision and innovation
              </Text>
            </motion.div>

            <motion.div variants={staggerContainer}>
              <SimpleGrid columns={{ base: 2, md: 4 }} spacing={6}>
                {[
                  {
                    k: "Brew Profiles",
                    v: "128",
                    icon: FaCoffee,
                    color: "brand.500",
                  },
                  {
                    k: "Beans",
                    v: "12 origins",
                    icon: FaSeedling,
                    color: "purple.500",
                  },
                  {
                    k: "Wi‑Fi",
                    v: "2 Gbps",
                    icon: FaWifi,
                    color: "magenta.500",
                  },
                  { k: "Open", v: "7a–12a", icon: FaClock, color: "brand.400" },
                ].map((s, index) => (
                  <motion.div
                    key={s.k}
                    variants={fadeInScale}
                    whileHover={{
                      scale: 1.05,
                      transition: { duration: 0.2 },
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Box
                      p={6}
                      borderRadius="16px"
                      border="1px solid"
                      borderColor={s.color}
                      bgGradient={`linear(to-br, ${s.color}15, ${s.color}05)`}
                      backdropFilter="blur(10px)"
                      position="relative"
                      overflow="hidden"
                      _hover={{
                        boxShadow: `0 0 25px ${s.color}40`,
                        borderColor: s.color,
                      }}
                      transition="all 0.3s ease"
                      textAlign="center"
                    >
                      <Icon
                        as={s.icon}
                        boxSize={6}
                        color={s.color}
                        mb={3}
                        filter="drop-shadow(0 0 6px currentColor)"
                      />
                      <Text color="gray.400" fontSize="sm" mb={2}>
                        {s.k}
                      </Text>
                      <Heading size="lg" color="white">
                        {s.v}
                      </Heading>

                      {/* Subtle glow effect */}
                      <Box
                        position="absolute"
                        top={0}
                        right={0}
                        width="80px"
                        height="80px"
                        bgGradient={`radial(circle, ${s.color}20, transparent)`}
                        filter="blur(15px)"
                        opacity={0.3}
                      />
                    </Box>
                  </motion.div>
                ))}
              </SimpleGrid>
            </motion.div>
          </VStack>
        </motion.div>

        {/* Customer Testimonials Section */}
        <motion.div
          ref={testimonialsRef}
          initial="initial"
          animate={mounted && testimonialsInView ? "animate" : "initial"}
          variants={staggerContainer}
          style={{ width: "100%" }}
        >
          <VStack spacing={8} align="stretch">
            <motion.div variants={fadeInUp}>
              <Heading
                size="xl"
                textAlign="center"
                bgGradient="linear(to-r, brand.400, purple.500)"
                bgClip="text"
                mb={2}
              >
                What Our Customers Say
              </Heading>
              <Text
                textAlign="center"
                color="gray.400"
                fontSize="lg"
                maxW="2xl"
                mx="auto"
              >
                Real experiences from our cyber community
              </Text>
            </motion.div>

            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
              {[
                {
                  name: "Alex Chen",
                  role: "Software Developer",
                  avatar: "AC",
                  rating: 5,
                  text: "The perfect blend of productivity and atmosphere. The neon vibes help me code for hours without losing focus.",
                  color: "brand.500",
                },
                {
                  name: "Maya Rodriguez",
                  role: "Digital Artist",
                  avatar: "MR",
                  rating: 5,
                  text: "Incredible coffee and the synthwave nights are legendary. This place fuels both my creativity and my caffeine addiction.",
                  color: "purple.500",
                },
                {
                  name: "Jordan Kim",
                  role: "Startup Founder",
                  avatar: "JK",
                  rating: 5,
                  text: "Best workspace in the city. Fast WiFi, great coffee, and the community events have helped me network like crazy.",
                  color: "magenta.500",
                },
              ].map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  variants={fadeInScale}
                  whileHover={{
                    scale: 1.03,
                    transition: { duration: 0.2 },
                  }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Box
                    p={8}
                    borderRadius="20px"
                    border="1px solid"
                    borderColor={testimonial.color}
                    bgGradient={`linear(to-br, ${testimonial.color}10, ${testimonial.color}05)`}
                    backdropFilter="blur(10px)"
                    position="relative"
                    overflow="hidden"
                    _hover={{
                      boxShadow: `0 0 30px ${testimonial.color}40`,
                      borderColor: testimonial.color,
                    }}
                    transition="all 0.3s ease"
                  >
                    {/* Quote icon */}
                    <Box mb={4}>
                      <Icon
                        as={FaQuoteLeft}
                        boxSize={6}
                        color={testimonial.color}
                        opacity={0.7}
                      />
                    </Box>

                    <Text
                      color="gray.200"
                      lineHeight={1.6}
                      mb={6}
                      fontSize="lg"
                    >
                      &ldquo;{testimonial.text}&rdquo;
                    </Text>

                    {/* Rating stars */}
                    <HStack mb={4}>
                      {Array(testimonial.rating)
                        .fill(0)
                        .map((_, i) => (
                          <Icon
                            key={i}
                            as={FaStar}
                            color={testimonial.color}
                            boxSize={4}
                          />
                        ))}
                    </HStack>

                    {/* Customer info */}
                    <Flex align="center" gap={3}>
                      <Box
                        width="50px"
                        height="50px"
                        borderRadius="full"
                        bgGradient={`linear(to-br, ${testimonial.color}, ${testimonial.color}80)`}
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        color="white"
                        fontWeight="bold"
                        fontSize="lg"
                      >
                        {testimonial.avatar}
                      </Box>
                      <Box>
                        <Text fontWeight="bold" color="white">
                          {testimonial.name}
                        </Text>
                        <Text color="gray.400" fontSize="sm">
                          {testimonial.role}
                        </Text>
                      </Box>
                    </Flex>

                    {/* Subtle glow effect */}
                    <Box
                      position="absolute"
                      top={0}
                      right={0}
                      width="100px"
                      height="100px"
                      bgGradient={`radial(circle, ${testimonial.color}20, transparent)`}
                      filter="blur(20px)"
                      opacity={0.3}
                    />
                  </Box>
                </motion.div>
              ))}
            </SimpleGrid>
          </VStack>
        </motion.div>

        {/* Gallery Preview Section */}
        <motion.div
          ref={galleryRef}
          initial="initial"
          animate={mounted && galleryInView ? "animate" : "initial"}
          variants={staggerContainer}
          style={{ width: "100%" }}
        >
          <VStack spacing={8} align="stretch">
            <motion.div variants={fadeInUp}>
              <Flex justify="space-between" align="center" wrap="wrap" gap={4}>
                <Box>
                  <Heading
                    size="xl"
                    bgGradient="linear(to-r, brand.400, purple.500)"
                    bgClip="text"
                    mb={2}
                  >
                    Neon Gallery
                  </Heading>
                  <Text color="gray.400" fontSize="lg">
                    See the cyber atmosphere in action
                  </Text>
                </Box>
                <Button
                  as="a"
                  href="/gallery"
                  variant="neon"
                  rightIcon={<FaChevronRight />}
                  _hover={{
                    transform: "translateY(-2px)",
                    boxShadow: "0 0 25px rgba(0,194,255,0.6)",
                  }}
                >
                  View All
                </Button>
              </Flex>
            </motion.div>

            <SimpleGrid columns={{ base: 2, md: 4 }} spacing={4}>
              {[
                {
                  src: "/api/placeholder/300/200",
                  alt: "Neon interior",
                  title: "Cyber Interior",
                },
                {
                  src: "/api/placeholder/300/200",
                  alt: "Coffee art",
                  title: "Latte Art",
                },
                {
                  src: "/api/placeholder/300/200",
                  alt: "Night vibes",
                  title: "Night Mode",
                },
                {
                  src: "/api/placeholder/300/200",
                  alt: "Community",
                  title: "Events",
                },
              ].map((image, index) => (
                <motion.div
                  key={index}
                  variants={fadeInScale}
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.2 },
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Box
                    position="relative"
                    borderRadius="16px"
                    overflow="hidden"
                    border="1px solid"
                    borderColor="brand.500"
                    bg="rgba(0,194,255,0.05)"
                    _hover={{
                      boxShadow: "0 0 25px rgba(0,194,255,0.4)",
                      borderColor: "brand.400",
                    }}
                    transition="all 0.3s ease"
                  >
                    <Box
                      height="200px"
                      bgGradient="linear(to-br, rgba(0,194,255,0.2), rgba(155,92,255,0.1))"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      color="white"
                      fontSize="lg"
                      fontWeight="bold"
                    >
                      {image.title}
                    </Box>
                    <Box p={4}>
                      <Text color="gray.300" fontSize="sm" fontWeight="medium">
                        {image.title}
                      </Text>
                    </Box>
                  </Box>
                </motion.div>
              ))}
            </SimpleGrid>
          </VStack>
        </motion.div>

        {/* Latest News/Blog Section */}
        <motion.div
          ref={blogRef}
          initial="initial"
          animate={mounted && blogInView ? "animate" : "initial"}
          variants={staggerContainer}
          style={{ width: "100%" }}
        >
          <VStack spacing={8} align="stretch">
            <motion.div variants={fadeInUp}>
              <Flex justify="space-between" align="center" wrap="wrap" gap={4}>
                <Box>
                  <Heading
                    size="xl"
                    bgGradient="linear(to-r, brand.400, purple.500)"
                    bgClip="text"
                    mb={2}
                  >
                    Latest Updates
                  </Heading>
                  <Text color="gray.400" fontSize="lg">
                    Stay connected with the neon community
                  </Text>
                </Box>
                <Button
                  as="a"
                  href="/blog"
                  variant="neon"
                  rightIcon={<FaChevronRight />}
                  _hover={{
                    transform: "translateY(-2px)",
                    boxShadow: "0 0 25px rgba(0,194,255,0.6)",
                  }}
                >
                  Read More
                </Button>
              </Flex>
            </motion.div>

            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
              {[
                {
                  title: "New Quantum Espresso Blend Available",
                  excerpt:
                    "Experience our latest single-origin blend from Ethiopia. Notes of blueberry and dark chocolate.",
                  date: "Dec 15, 2024",
                  category: "Coffee",
                  color: "brand.500",
                },
                {
                  title: "Synthwave Night Returns This Friday",
                  excerpt:
                    "Join us for an epic night of retro-futuristic beats. Free entry with any drink purchase.",
                  date: "Dec 12, 2024",
                  category: "Events",
                  color: "purple.500",
                },
              ].map((article, index) => (
                <motion.div
                  key={index}
                  variants={fadeInScale}
                  whileHover={{
                    scale: 1.02,
                    transition: { duration: 0.2 },
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Box
                    p={6}
                    borderRadius="16px"
                    border="1px solid"
                    borderColor={article.color}
                    bgGradient={`linear(to-br, ${article.color}10, ${article.color}05)`}
                    backdropFilter="blur(10px)"
                    position="relative"
                    overflow="hidden"
                    _hover={{
                      boxShadow: `0 0 25px ${article.color}30`,
                      borderColor: article.color,
                    }}
                    transition="all 0.3s ease"
                  >
                    <Flex align="center" gap={2} mb={3}>
                      <Icon
                        as={FaCalendarAlt}
                        color={article.color}
                        boxSize={4}
                      />
                      <Text color="gray.400" fontSize="sm">
                        {article.date}
                      </Text>
                      <Box
                        px={2}
                        py={1}
                        borderRadius="full"
                        bg={`${article.color}20`}
                        border="1px solid"
                        borderColor={article.color}
                      >
                        <Text
                          color={article.color}
                          fontSize="xs"
                          fontWeight="bold"
                        >
                          {article.category}
                        </Text>
                      </Box>
                    </Flex>

                    <Heading size="md" mb={3} color="white">
                      {article.title}
                    </Heading>
                    <Text color="gray.300" lineHeight={1.6} mb={4}>
                      {article.excerpt}
                    </Text>

                    <Button
                      size="sm"
                      variant="link"
                      color={article.color}
                      rightIcon={<FaChevronRight />}
                      _hover={{
                        color: article.color,
                        textShadow: `0 0 8px ${article.color}`,
                      }}
                    >
                      Read More
                    </Button>
                  </Box>
                </motion.div>
              ))}
            </SimpleGrid>
          </VStack>
        </motion.div>

        {/* Team/Baristas Section */}
        <motion.div
          ref={teamRef}
          initial="initial"
          animate={mounted && teamInView ? "animate" : "initial"}
          variants={staggerContainer}
          style={{ width: "100%" }}
        >
          <VStack spacing={8} align="stretch">
            <motion.div variants={fadeInUp}>
              <Heading
                size="xl"
                textAlign="center"
                bgGradient="linear(to-r, brand.400, purple.500)"
                bgClip="text"
                mb={2}
              >
                Meet Our Cyber Baristas
              </Heading>
              <Text
                textAlign="center"
                color="gray.400"
                fontSize="lg"
                maxW="2xl"
                mx="auto"
              >
                The talented humans behind your perfect cup
              </Text>
            </motion.div>

            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
              {[
                {
                  name: "Zara",
                  role: "Head Barista",
                  specialty: "Precision Espresso",
                  avatar: "Z",
                  color: "brand.500",
                  quote: "Every shot is a work of art",
                },
                {
                  name: "Kai",
                  role: "Coffee Artist",
                  specialty: "Latte Art",
                  avatar: "K",
                  color: "purple.500",
                  quote: "Creating beauty in every cup",
                },
                {
                  name: "Nova",
                  role: "Night Shift Lead",
                  specialty: "Cold Brew Master",
                  avatar: "N",
                  color: "magenta.500",
                  quote: "Fueling the night owls",
                },
              ].map((member, index) => (
                <motion.div
                  key={member.name}
                  variants={fadeInScale}
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.2 },
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Box
                    p={6}
                    borderRadius="20px"
                    border="1px solid"
                    borderColor={member.color}
                    bgGradient={`linear(to-br, ${member.color}10, ${member.color}05)`}
                    backdropFilter="blur(10px)"
                    position="relative"
                    overflow="hidden"
                    textAlign="center"
                    _hover={{
                      boxShadow: `0 0 30px ${member.color}40`,
                      borderColor: member.color,
                    }}
                    transition="all 0.3s ease"
                  >
                    <Box
                      width="80px"
                      height="80px"
                      borderRadius="full"
                      bgGradient={`linear(to-br, ${member.color}, ${member.color}80)`}
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      color="white"
                      fontWeight="bold"
                      fontSize="2xl"
                      mx="auto"
                      mb={4}
                      boxShadow={`0 0 20px ${member.color}50`}
                    >
                      {member.avatar}
                    </Box>

                    <Heading size="lg" mb={2} color="white">
                      {member.name}
                    </Heading>
                    <Text color={member.color} fontWeight="bold" mb={2}>
                      {member.role}
                    </Text>
                    <Text color="gray.400" fontSize="sm" mb={3}>
                      {member.specialty}
                    </Text>
                    <Text color="gray.300" fontSize="sm" fontStyle="italic">
                      &ldquo;{member.quote}&rdquo;
                    </Text>

                    {/* Subtle glow effect */}
                    <Box
                      position="absolute"
                      top={0}
                      right={0}
                      width="100px"
                      height="100px"
                      bgGradient={`radial(circle, ${member.color}20, transparent)`}
                      filter="blur(20px)"
                      opacity={0.3}
                    />
                  </Box>
                </motion.div>
              ))}
            </SimpleGrid>
          </VStack>
        </motion.div>

        {/* Location Finder Section */}
        <motion.div
          ref={locationRef}
          initial="initial"
          animate={mounted && locationInView ? "animate" : "initial"}
          variants={fadeInUp}
          style={{ width: "100%" }}
        >
          <Box
            borderRadius="20px"
            border="1px solid"
            borderColor="purple.500"
            bgGradient="linear(to-r, rgba(155,92,255,0.15), rgba(255,31,143,0.1))"
            backdropFilter="blur(10px)"
            p={8}
            position="relative"
            overflow="hidden"
            _hover={{
              boxShadow: "0 0 40px rgba(155,92,255,0.3)",
              borderColor: "purple.400",
            }}
            transition="all 0.3s ease"
          >
            {/* Background glow */}
            <Box
              position="absolute"
              top={0}
              left={0}
              width="200px"
              height="200px"
              bgGradient="radial(circle, rgba(155,92,255,0.2), transparent)"
              filter="blur(40px)"
              opacity={0.4}
            />

            <Flex
              direction={{ base: "column", md: "row" }}
              justify="space-between"
              align="center"
              gap={6}
              position="relative"
              zIndex={1}
            >
              <Box flex="1">
                <Flex align="center" gap={3} mb={4}>
                  <Icon as={FaMapMarkerAlt} color="purple.400" boxSize={6} />
                  <Heading size="lg" color="white">
                    Find Your Nearest Neon Cafe
                  </Heading>
                </Flex>
                <Text color="gray.300" fontSize="lg" mb={4}>
                  We&apos;re expanding across the city. Find the cyber cafe
                  closest to you.
                </Text>
                <HStack spacing={4}>
                  <Button
                    as="a"
                    href="/locations"
                    variant="solid"
                    size="lg"
                    _hover={{
                      transform: "translateY(-2px)",
                      boxShadow: "0 0 25px rgba(155,92,255,0.8)",
                    }}
                  >
                    View Locations
                  </Button>
                  <Button
                    as="a"
                    href="/reservations"
                    variant="neon"
                    size="lg"
                    _hover={{
                      transform: "translateY(-2px)",
                      boxShadow: "0 0 25px rgba(155,92,255,0.6)",
                    }}
                  >
                    Reserve Now
                  </Button>
                </HStack>
              </Box>

              <Box flex="1" textAlign="center">
                <Text
                  color="purple.400"
                  fontSize="2xl"
                  fontWeight="bold"
                  mb={2}
                >
                  3 Locations
                </Text>
                <Text color="gray.400">
                  Downtown • Tech District • Arts Quarter
                </Text>
              </Box>
            </Flex>
          </Box>
        </motion.div>

        {/* Social Media Section */}
        <motion.div
          ref={socialRef}
          initial="initial"
          animate={mounted && socialInView ? "animate" : "initial"}
          variants={staggerContainer}
          style={{ width: "100%" }}
        >
          <VStack spacing={8} align="stretch">
            <motion.div variants={fadeInUp}>
              <Heading
                size="xl"
                textAlign="center"
                bgGradient="linear(to-r, brand.400, purple.500)"
                bgClip="text"
                mb={2}
              >
                Join the Neon Community
              </Heading>
              <Text
                textAlign="center"
                color="gray.400"
                fontSize="lg"
                maxW="2xl"
                mx="auto"
              >
                Follow us for daily cyber vibes and exclusive content
              </Text>
            </motion.div>

            <Flex justify="center" gap={6} wrap="wrap">
              {[
                {
                  icon: FaInstagram,
                  label: "Instagram",
                  color: "magenta.500",
                  followers: "12.5K",
                },
                {
                  icon: FaTwitter,
                  label: "Twitter",
                  color: "brand.500",
                  followers: "8.2K",
                },
                {
                  icon: FaFacebook,
                  label: "Facebook",
                  color: "purple.500",
                  followers: "5.8K",
                },
              ].map((social, index) => (
                <motion.div
                  key={social.label}
                  variants={fadeInScale}
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.2 },
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Box
                    p={6}
                    borderRadius="16px"
                    border="1px solid"
                    borderColor={social.color}
                    bgGradient={`linear(to-br, ${social.color}15, ${social.color}05)`}
                    backdropFilter="blur(10px)"
                    textAlign="center"
                    minW="150px"
                    _hover={{
                      boxShadow: `0 0 25px ${social.color}40`,
                      borderColor: social.color,
                    }}
                    transition="all 0.3s ease"
                    cursor="pointer"
                  >
                    <Icon
                      as={social.icon}
                      boxSize={8}
                      color={social.color}
                      mb={3}
                      filter="drop-shadow(0 0 8px currentColor)"
                    />
                    <Text color="white" fontWeight="bold" mb={1}>
                      {social.label}
                    </Text>
                    <Text color="gray.400" fontSize="sm">
                      {social.followers} followers
                    </Text>
                  </Box>
                </motion.div>
              ))}
            </Flex>
          </VStack>
        </motion.div>

        {/* Enhanced Newsletter Section */}
        <motion.div
          ref={newsletterRef}
          initial="initial"
          animate={mounted && newsletterInView ? "animate" : "initial"}
          variants={fadeInUp}
          style={{ width: "100%" }}
        >
          <Box
            borderRadius="20px"
            border="1px solid"
            borderColor="brand.500"
            bgGradient="linear(to-r, rgba(0,194,255,0.15), rgba(155,92,255,0.15))"
            backdropFilter="blur(10px)"
            p={8}
            position="relative"
            overflow="hidden"
            _hover={{
              boxShadow: "0 0 40px rgba(0,194,255,0.3)",
              borderColor: "brand.400",
            }}
            transition="all 0.3s ease"
          >
            {/* Background glow */}
            <Box
              position="absolute"
              top={0}
              right={0}
              width="200px"
              height="200px"
              bgGradient="radial(circle, rgba(0,194,255,0.2), transparent)"
              filter="blur(40px)"
              opacity={0.4}
            />

            <Flex
              direction={{ base: "column", md: "row" }}
              justify="space-between"
              align="center"
              gap={6}
              position="relative"
              zIndex={1}
            >
              <Box flex="1">
                <Heading size="lg" mb={2} color="white">
                  Join the Neon list
                </Heading>
                <Text color="gray.300" fontSize="lg">
                  Weekly specials, events, and drops.
                </Text>
              </Box>
              <Flex
                direction={{ base: "column", sm: "row" }}
                gap={4}
                align="center"
                flex="1"
                maxW="400px"
              >
                <Box flex="1">
                  <input
                    placeholder="you@neoncafe.com"
                    style={{
                      background: "rgba(255,255,255,0.1)",
                      border: "1px solid rgba(255,255,255,0.2)",
                      borderRadius: "12px",
                      padding: "12px 16px",
                      color: "white",
                      width: "100%",
                      fontSize: "16px",
                      backdropFilter: "blur(10px)",
                    }}
                  />
                </Box>
                <Button
                  variant="solid"
                  size="lg"
                  px={8}
                  _hover={{
                    transform: "translateY(-2px)",
                    boxShadow: "0 0 25px rgba(0,194,255,0.8)",
                  }}
                  transition="all 0.3s ease"
                >
                  Subscribe
                </Button>
              </Flex>
            </Flex>
          </Box>
        </motion.div>

        {/* Enhanced Events Section */}
        <motion.div
          ref={eventsRef}
          initial="initial"
          animate={mounted && eventsInView ? "animate" : "initial"}
          variants={fadeInUp}
          style={{ width: "100%" }}
        >
          <Box
            textAlign="center"
            py={8}
            px={6}
            borderRadius="20px"
            border="1px solid"
            borderColor="purple.500"
            bgGradient="linear(to-br, rgba(155,92,255,0.1), rgba(255,31,143,0.05))"
            backdropFilter="blur(10px)"
            position="relative"
            overflow="hidden"
            _hover={{
              boxShadow: "0 0 30px rgba(155,92,255,0.3)",
              borderColor: "purple.400",
            }}
            transition="all 0.3s ease"
          >
            {/* Background glow */}
            <Box
              position="absolute"
              top={0}
              left={0}
              width="150px"
              height="150px"
              bgGradient="radial(circle, rgba(155,92,255,0.2), transparent)"
              filter="blur(30px)"
              opacity={0.4}
            />

            <VStack spacing={4} position="relative" zIndex={1}>
              <Heading size="lg" color="white">
                After‑hours Synthwave — Fridays 9 PM
              </Heading>
              <Text color="gray.300" fontSize="lg">
                Free entry with any drink. See the{" "}
                <Button
                  as="a"
                  href="/events"
                  size="sm"
                  variant="link"
                  color="purple.400"
                  fontWeight="bold"
                  _hover={{
                    color: "purple.300",
                    textShadow: "0 0 10px rgba(155,92,255,0.6)",
                  }}
                >
                  events
                </Button>
                .
              </Text>
            </VStack>
          </Box>
        </motion.div>
      </VStack>
    </>
  );
}
