// Navbar.tsx
import React from "react";
import {
  Box,
  Flex,
  Spacer,
  Heading,
  Button,
  IconButton,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  VStack,
  Text,
  Image,
  useColorMode,
} from "@chakra-ui/react";
import { HamburgerIcon, SunIcon, MoonIcon } from "@chakra-ui/icons";
import Link from "next/link";

const Navbar: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Box bg="transparent" p={4}>
        <Flex>
          <Heading size="md">PEMILU KPU WAKANDA</Heading>
          <Spacer />
          <Box display={{ base: "block", md: "none" }}>
            <IconButton
              icon={<HamburgerIcon />}
              aria-label="Open Menu"
              onClick={onOpen}
            />
          </Box>
          <Box display={{ base: "none", md: "block" }}>
            <Link href="/">
              <Button variant="ghost">Home</Button>
            </Link>
            <Button variant="ghost" onClick={toggleColorMode}>
              {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            </Button>
          </Box>
        </Flex>
      </Box>

      <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Alfanrckz</DrawerHeader>
          <DrawerBody>
            <VStack spacing={4}>
              <Link href="/">
                <Button>Home</Button>
              </Link>
              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Navbar;
