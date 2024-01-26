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
  VStack,
  Radio,
  RadioGroup,
  Text,
  FormControl,
  FormLabel,
} from '@chakra-ui/react';
import LoginModal from './LoginModal';

const RegisterModal: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [fullName, setFullName] = useState('');
  const [address, setAddress] = useState('');
  const [gender, setGender] = useState('male');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    // Handle registration logic here
    console.log('Full Name:', fullName);
    console.log('Address:', address);
    console.log('Gender:', gender);
    console.log('Username:', username);
    console.log('Password:', password);
    // You can add your registration logic here
    // For simplicity, this example just logs the entered data
    onClose();
  };

  return (
    <>
      <text onClick={onOpen}>Register</text>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size="xs"
        motionPreset="slideInBottom"
        isCentered
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Register</ModalHeader>
          <ModalBody>
            <VStack spacing={4}>
              <Input
                placeholder="Full Name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
              <Input
                placeholder="Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
              <FormControl>
                <FormLabel>Jenis Kelamin</FormLabel>
                <RadioGroup value={gender} onChange={setGender}>
                  <Radio value="male">Laki-laki</Radio>
                  <Radio value="female" ml={3}>Perempuan</Radio>
                </RadioGroup>
              </FormControl>
              <Input
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <Input
                placeholder="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </VStack>
          </ModalBody>

          {/* Tambahkan teks 'Sudah memiliki akun? Login' */}
          <Text mt={2} textAlign="center">
            Sudah memiliki akun?{' '}
            <Text as="span" color="teal.500" cursor="pointer">
              Login
            </Text>
          </Text>

          <ModalFooter>
            <Button colorScheme="teal" onClick={handleRegister}>
              Register
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

export default RegisterModal;
