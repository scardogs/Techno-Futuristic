import { useEffect, useMemo, useState, useCallback } from "react";
import {
  Box,
  Button,
  Heading,
  HStack,
  Input,
  Select,
  SimpleGrid,
  Textarea,
  VStack,
  Text,
  Divider,
  useToast,
  Link,
  Flex,
  IconButton,
  Badge,
  Spacer,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { FaPlus, FaEdit, FaTrash, FaEye, FaEyeSlash } from "react-icons/fa";

const TYPES = [
  { key: "menu", label: "Menu Items", icon: "🍽️" },
  { key: "event", label: "Events", icon: "🎉" },
  { key: "location", label: "Locations", icon: "📍" },
  { key: "gallery", label: "Gallery", icon: "🖼️" },
  { key: "special", label: "Specials", icon: "⭐" },
  { key: "page", label: "Pages", icon: "📄" },
];

function ItemForm({ value, onChange, onClose, isOpen }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="lg">
      <ModalOverlay />
      <ModalContent
        bg="rgba(10,12,16,0.95)"
        border="1px solid"
        borderColor="whiteAlpha.200"
      >
        <ModalHeader color="brand.500">Create/Edit Item</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <VStack align="stretch" spacing={4}>
            <Select
              value={value.type || ""}
              onChange={(e) => onChange({ ...value, type: e.target.value })}
              bg="rgba(255,255,255,0.05)"
              borderColor="whiteAlpha.200"
              color="white"
            >
              <option value="">Select type…</option>
              {TYPES.map((t) => (
                <option
                  key={t.key}
                  value={t.key}
                  style={{ backgroundColor: "#0a0c10", color: "white" }}
                >
                  {t.label}
                </option>
              ))}
            </Select>
            <Input
              placeholder="Title"
              value={value.title || ""}
              onChange={(e) => onChange({ ...value, title: e.target.value })}
            />
            <Input
              placeholder="Slug (optional)"
              value={value.slug || ""}
              onChange={(e) => onChange({ ...value, slug: e.target.value })}
            />
            <Input
              placeholder="Price (optional)"
              value={value.price || ""}
              onChange={(e) => onChange({ ...value, price: e.target.value })}
            />
            <Input
              placeholder="Date (optional)"
              value={value.date || ""}
              onChange={(e) => onChange({ ...value, date: e.target.value })}
            />
            <Input
              placeholder="Image URL (optional)"
              value={value.image || ""}
              onChange={(e) => onChange({ ...value, image: e.target.value })}
            />
            <Textarea
              placeholder="Description"
              value={value.description || ""}
              onChange={(e) =>
                onChange({ ...value, description: e.target.value })
              }
              minH="100px"
            />
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default function AdminPage() {
  const [items, setItems] = useState([]);
  const [filterType, setFilterType] = useState("");
  const [editing, setEditing] = useState(null);
  const [draft, setDraft] = useState({ type: "menu" });
  const [auth, setAuth] = useState({ loading: true, ok: false });
  const [creds, setCreds] = useState({ email: "", password: "" });
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const filtered = useMemo(
    () => (filterType ? items.filter((i) => i.type === filterType) : items),
    [items, filterType]
  );

  const load = useCallback(async () => {
    const url = filterType
      ? `/api/content?type=${encodeURIComponent(filterType)}`
      : "/api/content";
    const res = await fetch(url);
    const data = await res.json();
    setItems(data);
  }, [filterType]);

  useEffect(() => {
    load();
  }, [filterType, load]);

  useEffect(() => {
    async function check() {
      const res = await fetch("/api/auth/me");
      setAuth({ loading: false, ok: res.ok });
    }
    check();
  }, []);

  async function save() {
    const method = editing ? "PUT" : "POST";
    const url = editing ? `/api/content/${editing._id}` : "/api/content";
    const res = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(draft),
    });
    if (!res.ok) return toast({ status: "error", title: "Save failed" });
    setDraft({ type: filterType || "menu" });
    setEditing(null);
    onClose();
    toast({ status: "success", title: "Saved" });
    load();
  }

  async function remove(item) {
    if (!confirm(`Delete "${item.title || item.slug || item._id}"?`)) return;
    const res = await fetch(`/api/content/${item._id}`, { method: "DELETE" });
    if (!res.ok) return toast({ status: "error", title: "Delete failed" });
    toast({ status: "success", title: "Deleted" });
    load();
  }

  function startEdit(item) {
    setEditing(item);
    setDraft({ ...item });
    onOpen();
  }

  function startCreate() {
    setEditing(null);
    setDraft({ type: filterType || "menu" });
    onOpen();
  }

  if (!auth.ok) {
    return (
      <VStack align="stretch" spacing={6} maxW="400px" mx="auto" mt={20}>
        <Heading
          size="2xl"
          color="brand.500"
          textShadow="0 0 24px rgba(0,194,255,0.7)"
          textAlign="center"
        >
          Admin Login
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
              placeholder="Email"
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
              onClick={async () => {
                const res = await fetch("/api/auth/login", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify(creds),
                });
                if (!res.ok)
                  return toast({
                    status: "error",
                    title: "Login failed",
                    description: (await res.json()).error || undefined,
                  });
                setAuth({ loading: false, ok: true });
                load();
              }}
            >
              Login
            </Button>
          </VStack>
        </Box>

        <Text textAlign="center" color="gray.400">
          Don&apos;t have an account?{" "}
          <Link as={NextLink} href="/register" color="brand.400">
            Register here
          </Link>
        </Text>
      </VStack>
    );
  }

  return (
    <Flex h="100vh" bg="#0a0c10">
      {/* Sidebar */}
      <Box
        w={sidebarCollapsed ? "60px" : "280px"}
        bg="rgba(255,255,255,0.02)"
        borderRight="1px solid"
        borderColor="whiteAlpha.200"
        transition="width 0.3s"
        overflow="hidden"
      >
        <VStack align="stretch" p={4} spacing={4}>
          <HStack justify="space-between">
            {!sidebarCollapsed && (
              <Heading size="md" color="brand.500">
                Admin Panel
              </Heading>
            )}
            <IconButton
              size="sm"
              onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
              aria-label="Toggle sidebar"
            >
              {sidebarCollapsed ? "→" : "←"}
            </IconButton>
          </HStack>

          <Divider />

          <VStack align="stretch" spacing={2}>
            {TYPES.map((t) => (
              <Button
                key={t.key}
                variant={filterType === t.key ? "solid" : "ghost"}
                justifyContent="flex-start"
                leftIcon={sidebarCollapsed ? undefined : <span>{t.icon}</span>}
                onClick={() => setFilterType(t.key)}
                size="sm"
              >
                {sidebarCollapsed ? t.icon : t.label}
              </Button>
            ))}
          </VStack>

          <Divider />

          <Button
            variant="neon"
            leftIcon={sidebarCollapsed ? undefined : <FaPlus />}
            onClick={startCreate}
            size="sm"
          >
            {sidebarCollapsed ? <FaPlus /> : "Add New"}
          </Button>

          <Spacer />

          <Button
            size="sm"
            variant="ghost"
            onClick={async () => {
              await fetch("/api/auth/logout", { method: "POST" });
              setAuth({ loading: false, ok: false });
            }}
          >
            {sidebarCollapsed ? "🚪" : "Logout"}
          </Button>

          <Button
            size="sm"
            variant="outline"
            onClick={async () => {
              if (!confirm("This will replace all existing content. Continue?"))
                return;
              const res = await fetch("/api/seed", { method: "POST" });
              if (res.ok) {
                toast({
                  status: "success",
                  title: "Database seeded successfully",
                });
                load();
              } else {
                toast({ status: "error", title: "Seeding failed" });
              }
            }}
          >
            {sidebarCollapsed ? "🌱" : "Seed Data"}
          </Button>
        </VStack>
      </Box>

      {/* Main Content */}
      <Box flex="1" p={6} overflow="auto">
        <VStack align="stretch" spacing={6}>
          <HStack justify="space-between">
            <Box>
              <Heading size="lg" color="brand.500">
                {filterType
                  ? TYPES.find((t) => t.key === filterType)?.label
                  : "All Content"}
              </Heading>
              <Text color="gray.400">
                {filtered.length} item{filtered.length !== 1 ? "s" : ""}
              </Text>
            </Box>
            <HStack>
              <Button onClick={load} size="sm" variant="neon">
                Refresh
              </Button>
              <Button
                onClick={startCreate}
                size="sm"
                variant="solid"
                leftIcon={<FaPlus />}
              >
                Add New
              </Button>
            </HStack>
          </HStack>

          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={4}>
            {filtered.map((i) => (
              <Box
                key={i._id}
                p={4}
                border="1px solid"
                borderColor="whiteAlpha.200"
                borderRadius="12px"
                bg="rgba(255,255,255,0.02)"
                _hover={{ bg: "rgba(255,255,255,0.05)" }}
                transition="all 0.2s"
              >
                <VStack align="stretch" spacing={3}>
                  <HStack justify="space-between" align="start">
                    <Box flex="1">
                      <Text fontWeight="semibold" fontSize="md">
                        {i.title || i.slug || "Untitled"}
                      </Text>
                      <Badge colorScheme="purple" variant="subtle" size="sm">
                        {i.type}
                      </Badge>
                      {i.price && (
                        <Text color="brand.400" fontSize="sm" mt={1}>
                          {i.price}
                        </Text>
                      )}
                    </Box>
                    <HStack>
                      <IconButton
                        size="sm"
                        icon={<FaEdit />}
                        onClick={() => startEdit(i)}
                        aria-label="Edit"
                      />
                      <IconButton
                        size="sm"
                        icon={<FaTrash />}
                        onClick={() => remove(i)}
                        aria-label="Delete"
                        colorScheme="red"
                        variant="ghost"
                      />
                    </HStack>
                  </HStack>

                  {i.description && (
                    <Text color="gray.400" fontSize="sm" noOfLines={2}>
                      {i.description}
                    </Text>
                  )}

                  {i.image && (
                    <Box
                      h="100px"
                      bg="rgba(255,255,255,0.05)"
                      borderRadius="8px"
                      bgImage={`url(${i.image})`}
                      bgSize="cover"
                      bgPos="center"
                    />
                  )}
                </VStack>
              </Box>
            ))}
          </SimpleGrid>

          {filtered.length === 0 && (
            <Box textAlign="center" py={12}>
              <Text color="gray.500" fontSize="lg">
                No{" "}
                {filterType
                  ? TYPES.find((t) => t.key === filterType)?.label.toLowerCase()
                  : "content"}{" "}
                yet.
              </Text>
              <Button mt={4} onClick={startCreate} variant="solid">
                Create your first{" "}
                {filterType
                  ? TYPES.find((t) => t.key === filterType)
                      ?.label.toLowerCase()
                      .slice(0, -1)
                  : "item"}
              </Button>
            </Box>
          )}
        </VStack>
      </Box>

      <ItemForm
        value={draft}
        onChange={setDraft}
        onClose={() => {
          onClose();
          setEditing(null);
          setDraft({ type: filterType || "menu" });
        }}
        isOpen={isOpen}
      />
    </Flex>
  );
}
