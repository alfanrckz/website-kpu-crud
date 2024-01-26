import React, { useState } from 'react';
import { Box, Flex, Image, Text, Button } from '@chakra-ui/react';
import { GrFormPrevious, GrFormNext } from 'react-icons/gr';
import dataPaslon from '../Mocks/data-paslon.json';

const CardCarousel: React.FC = () => {
  const paslonData = dataPaslon;
  const [current, setCurrent] = useState(0);

  const previousSlide = () => {
    setCurrent((prev) => (prev === 0 ? paslonData.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === paslonData.length - 1 ? 0 : prev + 1));
  };

  return (
    <Flex direction="column" align="center" my={8}>
      <Text textAlign="center" color="gray.400" fontSize="3xl" fontWeight="extrabold" mb={8}>
        INFO PASLON
      </Text>
      <Flex
        bg="gray.400"
        mx={[4, 8, 20, 24]}
        px={[4, 8, 10, 24]}
        py={[8, 10, 12]}
        flexDir={['column', 'row']}
        gap={[4, 4]}
        my={3}
        rounded="md"
        justifyContent="center"
        transition="transform 0.3s ease-in-out"
        _hover={{ transform: 'scale(1.05)' }}
      >
        <Box flex={['1', '1', '0.5']}>
          <Image
            rounded="md"
            w={['full', 'full', '80']}
            src={paslonData[current].image}
            alt={`Paslon ${paslonData[current].number}`}
          />
        </Box>
        <Box flex={['1', '1', '0.5']}>
          <Text>Nomor Urut: {paslonData[current].number}</Text>
          <Text fontSize={['2xl', '3xl', '4xl']} fontWeight="bold" my={2}>
            {paslonData[current].name}
          </Text>
          <Text mt={2}>Visi & Misi</Text>
          <ul style={{ marginLeft: '1rem', marginTop: '0.5rem' }}>
            {paslonData[current].visionMission.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
          <Text mt={2}>Koalisi:</Text>
          <ul style={{ marginLeft: '1rem', marginTop: '0.5rem' }}>
            {paslonData[current].coalition.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </Box>
      </Flex>

      <Flex
        position="absolute"
        top="0"
        h="full"
        w="full"
        align="center"
        justify="space-between"
        color="white"
        fontWeight="bold"
        px={[1, 1, 5, 10]}
      >
        <Button
          w={['7', '7', '10', '10']}
          h={['7', '7', '10', '10']}
          bg="slate.700"
          rounded="full"
          _hover={{ bg: 'gray.950' }}
          onClick={nextSlide}
        >
          <GrFormPrevious fontSize={['2xl', '3xl', '4xl']} />
        </Button>
        <Button
          w={['7', '7', '10', '10']}
          h={['7', '7', '10', '10']}
          bg="slate.700"
          rounded="full"
          _hover={{ bg: 'gray.950' }}
          onClick={previousSlide}
        >
          <GrFormNext fontSize={['2xl', '3xl', '4xl']} />
        </Button>
      </Flex>
    </Flex>
  );
};

export default CardCarousel;
