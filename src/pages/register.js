import { useState } from "react";
import { useRouter } from "next/router";
import {
  Box,
  Button,
  Heading,
  Input,
  Text,
  VStack,
  useToast,
  Link,
} from "@chakra-ui/react";
import NextLink from "next/link";

export default function RegisterPage() {
  const [creds, setCreds] = useState({ email: "", password: "", name: "" });
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const router = useRouter();

  async function handleRegister() {
    if (!creds.email || !creds.password) {
      return toast({ status: "error", title: "Email and password required" });
    }

    setLoading(true);
    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(creds),
      });

      if (!res.ok) {
        const error = await res.json();
        return toast({
          status: "error",
          title: "Register failed",
          description: error.error || undefined,
        });
      }

      toast({ status: "success", title: "Registration successful!" });
      router.push("/admin");
    } catch (e) {
      toast({ status: "error", title: "Registration failed" });
    } finally {
      setLoading(false);
    }
  }

  return (
    <VStack align="stretch" spacing={6} maxW="400px" mx="auto" mt={20}>
      <Heading
        size="2xl"
        color="brand.500"
        textShadow="0 0 24px rgba(0,194,255,0.7)"
        textAlign="center"
      >
        Register Admin
      </Heading>

      <Box
        p={6}
        border="1px solid"
        borderColor="whiteAlpha.200"
        borderRadius="16px"
        bg="rgba(255,255,255,0.02)"
      >
        <VStack spacing={4} align="stretch">
          <Input
            placeholder="Name (optional)"
            value={creds.name}
            onChange={(e) => setCreds({ ...creds, name: e.target.value })}
          />
          <Input
            placeholder="Email"
            type="email"
            value={creds.email}
            onChange={(e) => setCreds({ ...creds, email: e.target.value })}
          />
          <Input
            placeholder="Password"
            type="password"
            value={creds.password}
            onChange={(e) => setCreds({ ...creds, password: e.target.value })}
          />
          <Button
            variant="solid"
            onClick={handleRegister}
            isLoading={loading}
            loadingText="Registering..."
          >
            Register
          </Button>
        </VStack>
      </Box>

      <Text textAlign="center" color="gray.400">
        Already have an account?{" "}
        <Link as={NextLink} href="/admin" color="brand.400">
          Login here
        </Link>
      </Text>
    </VStack>
  );
}
