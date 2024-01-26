import React, { useState } from 'react';
import {
  Box,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  HStack,
  Text,
  Image,
  Flex,
  Button
} from '@chakra-ui/react';

const VoteModal: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedPaslon, setSelectedPaslon] = useState<number | null>(null);
  const [isVoteSubmitted, setIsVoteSubmitted] = useState<boolean>(false)

  // Array berisi path atau URL gambar untuk masing-masing paslon
  const paslonImages = [
    'https://media.suara.com/pictures/653x366/2023/05/30/87737-anies-baswedan-koalisi-perubahan-tim-delapan.webp',
    'https://rmol.id/images/berita/normal/2023/12/455572_08060613122023_prabowo.jpeg',
    'https://asset.kompas.com/crops/A0qds-2BjWmU4g8xkkxJANW0Zmo=/0x0:0x0/750x500/data/photo/2022/10/24/635673c468c46.jpg',
  ];

  // Informasi untuk masing-masing paslon
  const paslonInfo = [
    { name: 'Anies Baswedan', description: 'Deskripsi Paslon 1', party: 'Partai A' },
    { name: 'Prabowo Subianto', description: 'Deskripsi Paslon 2', party: 'Partai B' },
    { name: 'Ganjar Pranowo', description: 'Deskripsi Paslon 3', party: 'Partai C' },
  ];

  const handleSelectPaslon = (paslonId: number) => {
    if (!isVoteSubmitted) {
      setSelectedPaslon(paslonId);
    }
  };
  const handleReset = () => {
    setSelectedPaslon(null);
  };

   const handleSubmit = () => {
    console.log('Selected Paslon:', selectedPaslon);
    setIsVoteSubmitted(true);
    onClose();
  };

  return (
    <>
        <Box cursor="pointer">
        <Button
        
          rounded="md"
          fontWeight="bold"
        
          fontSize="sm"
          py={1}
          onClick={onOpen}
          disabled={isVoteSubmitted}
        >
          {isVoteSubmitted ? 'ANDA SUDAH MEMILIH' : 'MASUKAN SUARAMU'}
        </Button>
      </Box>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size="4xl"
        motionPreset="slideInBottom"
        isCentered
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Pilih Pasangan Calon</ModalHeader>
          <ModalBody>
            <Flex justify="center">
              {paslonImages.map((image, index) => (
                <Box
                  key={index + 1}
                  bg={selectedPaslon === index + 1 ? 'teal.500' : 'gray.200'}
                  color={selectedPaslon === index + 1 ? 'white' : 'black'}
                  borderRadius="lg"
                  p={6}
                  onClick={() => handleSelectPaslon(index + 1)}
                  cursor="pointer"
                  mx={2}  // Mengatur margin horizontal antara card paslon
                >
                  <HStack spacing={2} align="center">
                    <Image
                      src={image}
                      alt={`Paslon ${index + 1}`}
                      boxSize="200px"
                    />
                  </HStack>
                  <Text mt={2} fontWeight="bold">
                    {`Paslon ${index + 1}`}
                  </Text>
                  <Text>{paslonInfo[index].name}</Text>
                  <Text fontSize="sm">{paslonInfo[index].description}</Text>
                  <Text fontSize="sm">{`Partai Pengusung: ${paslonInfo[index].party}`}</Text>
                </Box>
              ))}
            </Flex>
          </ModalBody>

          {/* Tambahkan tombol reset dan submit */}
          <ModalFooter>
            <Box
              p={6}
              bg="red.500"
              color="white"
              borderRadius="lg"
              onClick={handleReset}
              cursor="pointer"
            >
              Reset
            </Box>
            <Box
              p={6}
              bg="teal.500"
              color="white"
              borderRadius="lg"
              onClick={handleSubmit}
              cursor="pointer"
              ml={3}
            >
              Submit
            </Box>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default VoteModal;
