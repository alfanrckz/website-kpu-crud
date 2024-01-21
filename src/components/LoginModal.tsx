import React, { useState } from 'react';
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  Text
} from '@chakra-ui/react';
import RegisterModal from './RegisterModal';

const LoginModal: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Handle login logic here
    console.log('Username:', username);
    console.log('Password:', password);
    // You can add your authentication logic here
    // For simplicity, this example just logs the entered username and password
    onClose();
  };

  return (
    <>
      <Button onClick={onOpen}>Login</Button>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size="xs"
        motionPreset="slideInBottom"
        isCentered  // Properti ini akan menempatkan modal di tengah secara otomatis
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Login</ModalHeader>
          <ModalBody>
            <Input
              placeholder="Username"
              mb={4}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <Input
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </ModalBody>
          
          <Text mt={2} ml='6'>
            Belum memiliki akun? <Text as="span" color="teal.500" cursor="pointer"><RegisterModal/> </Text>
          </Text>
          <ModalFooter>
            <Button colorScheme="teal" onClick={handleLogin}>
              Login
            </Button>
            <Button variant="ghost" onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default LoginModal;
