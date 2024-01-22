import React from 'react';
import {
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Input,
  FormLabel,
  FormControl,
  VStack,
  HStack,
  Image,
} from '@chakra-ui/react';

interface AddPaslonModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// ... (import statements)

// ... (import statements)

// ... (import statements)

const AddPaslonModal: React.FC<AddPaslonModalProps> = ({ isOpen, onClose }) => {
    return (
      <Modal isOpen={isOpen} onClose={onClose} size="xl" motionPreset="slideInBottom" isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Paslon</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <HStack spacing={4}>
              <Box flex="1">
                <Image src="/placeholder-image.jpg" alt="Paslon Image" boxSize="200px" objectFit="cover" />
              </Box>
              <VStack align="flex-start" flex="2">
                <FormControl>
                  <FormLabel htmlFor="name">Nama Paslon</FormLabel>
                  <Input type="text" id="name" placeholder="Masukkan Nama Paslon" />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="nomor">Nomor Paslon</FormLabel>
                  <Input type="number" id="nomor" placeholder="Masukkan Nomor Paslon" />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="visimisi">Visi Misi Paslon</FormLabel>
                  <Input type="text" id="visimisi" placeholder="Masukkan Visi Misi Paslon" />
                </FormControl>
              </VStack>
            </HStack>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Save</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    );
  };
  
  export default AddPaslonModal;
  
  
  