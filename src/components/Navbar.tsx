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
import LoginModal from "./LoginModal";

const Navbar: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Box bg="transparent" p={4}>
        <Flex>
          <Link href={'/'}>
          <Heading size="sm">PEMILU KPU WAKANDA</Heading>
          </Link>
          <Spacer />
         
          <Box display={{ base: "block", md: "none" }}>
            <IconButton
              icon={<HamburgerIcon />}
              aria-label="Open Menu"
              onClick={onOpen}
            />
          </Box>
          <Box display={{ base: "none", md: "block" }}>
            <Link href="/paslon">
              <Button variant="ghost" mr={2}>
                Paslon
              </Button>
            </Link>
            <Link href="/partai">
              <Button variant="ghost" mr={2}>
                Partai
              </Button>
            </Link>
            <Link href="/vote">
              <Button variant="ghost" mr={2}>
                Voting
              </Button>
            </Link>

            <LoginModal />

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
              <Link href="/paslon">
                <Button variant="ghost" w="full">
                  Paslon
                </Button>
              </Link>
              <Link href="/partai">
                <Button variant="ghost" w="full">
                  Partai
                </Button>
              </Link>
              <Link href="/vote">
                <Button variant="ghost" w="full">
                  Voting
                </Button>
              </Link>

              <LoginModal />

              <Button w="full" onClick={toggleColorMode}>
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
