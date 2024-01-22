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
  Textarea,
  FormLabel,
  FormControl,
  VStack,
  HStack,
  Image,
} from '@chakra-ui/react';

interface AddPartaiModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AddPartaiModal: React.FC<AddPartaiModalProps> = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl" isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add Partai</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <HStack spacing={4}>
            <Box flex="1">
              <Image src="/placeholder-image.jpg" alt="Partai Image" boxSize="200px" objectFit="cover" />
            </Box>
            <VStack align="flex-start" flex="2">
              <FormControl>
                <FormLabel htmlFor="name">Nama Partai</FormLabel>
                <Input type="text" id="name" placeholder="Masukkan Nama Partai" />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="chairman">Ketua Umum</FormLabel>
                <Input type="text" id="chairman" placeholder="Masukkan Nama Ketua Umum" />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="visimisi">Visi Misi Partai</FormLabel>
                <Textarea id="visimisi" placeholder="Masukkan Visi Misi Partai" />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="address">Alamat Partai</FormLabel>
                <Input type="text" id="address" placeholder="Masukkan Alamat Partai" />
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

export default AddPartaiModal;
