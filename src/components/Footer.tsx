import React from 'react';
import { Box, Container, Flex, Image, Text, Divider } from '@chakra-ui/react';

const Footer: React.FC = () => {
  return (
    <Box>
      <Container maxW="container.lg" display="flex" mb={10}>
        <Flex alignItems="flex-start">
          <Image src="/logo.png" alt="logo" width="60px" />
          <Flex flexDir="column" ml={3}>
            <Text>DUMBWAYS.ID</Text>
            <Text fontSize="sm">
              Jl. Elang IV, Sawah Lama, Kec. Ciputat, Kota Tangerang Selatan, Banten 15413
            </Text>
          </Flex>
        </Flex>
      </Container>
      <Divider />
      <Text textAlign="center" mt={3} mb={5}>
        Komisi Pemilihan Umum DumbWays.ID | Alfansyuri Ziaulhaq 2023
      </Text>
    </Box>
  );
};

export default Footer;