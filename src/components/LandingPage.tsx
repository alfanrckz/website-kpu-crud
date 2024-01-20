import React from "react";
import {
  ChakraProvider,
  Box,
  Heading,
  Text,
  Container,
  Grid,
  GridItem,
  Image,
} from "@chakra-ui/react";

const LandingPage: React.FC = () => {
  // Dummy data gambar (gantilah dengan data sesuai kebutuhan)
  const imageData = [
    { id: 1, src: "https://images.theconversation.com/files/563895/original/file-20231206-17-3itee.jpg?ixlib=rb-1.1.0&rect=0%2C94%2C4510%2C2255&q=45&auto=format&w=668&h=324&fit=crop", alt: "Deskripsi Gambar 1" },
    { id: 2, src: "https://www.kpu.go.id/images/ce7b3d976487594b1e092f84af5b286c.jpg", alt: "Deskripsi Gambar 2" },
    { id: 3, src: "https://cdn.rri.co.id/berita/52/images/1681823369168-IMG_20230418_210624/1681823369168-IMG_20230418_210624.jpg" },
    { id: 4, src: "https://cdn.antaranews.com/cache/1200x800/2019/04/27/PSU1.jpg.webp" },
    { id: 5, src: "https://cdn.antaranews.com/cache/1200x800/2023/12/11/antarafoto-kpu-gelar-konfrensi-pers-persiapan-debat-capres-cawapres-11122023-gp-2.jpg" },
  ];

  return (
    <Container maxW="container.lg" mt="15">

      <Box>
        {/* Jumbotron */}
        <Box position="relative" mb={10} height={420}>
      <Image
        src="https://perludem.org/wp-content/uploads/2018/07/kotak-suara-kpu-antaranews_ratio-16x9-800-x-450.jpg"
        alt="Selamat Datang"
        w="100%"
        h="100%"
        objectFit="cover"
      />
      <Box
        position="absolute"
        bottom="0"
        left="0"
        p={6}
        color="white"
        width="100%"
      >
        <Heading fontSize={["3xl", "4xl"]}>Selamat Datang di Website Kami</Heading>
        <Text mt={4}>Platform Terbaik untuk Pemilu</Text>
      </Box>
    </Box>
        {/* Grid */}
        <Container maxW="container.lg" mb={10}>
          <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={2} >
            {/* Elemen Besar (Mengambil 2 kolom pada layar lebar) */}
            <GridItem colSpan={{ base: 1, md: 2 }}>
            <Box bg="teal.300" p={8} borderRadius="lg" height={280} position="relative">
    <Image
      src={imageData[0].src}  // Menggunakan gambar dari data dummy (index 1)
      alt={imageData[1].alt}  // Deskripsi gambar dari data dummy (index 1)
      boxSize="100%"
      borderRadius="lg"
      position="absolute"
      top="0"
      left="0"
      right="0"
      bottom="0"
    />

<Text color="white" position="absolute" bottom="20" left="4" fontSize="md">
      12 Januari 2024
    </Text>
    <Text color="white" position="absolute" bottom="10" left="4" fontSize="lg">
      KPU PERSIAPKAN ANGGOTA KPPS UNTUK PERSIAPKAN PEMILU 2024
    </Text>
    <Text color="white" position="absolute" bottom="4" left="4" fontSize="md">
      SUPER ADMIN
    </Text>

    
  </Box>
            </GridItem>

            {/* Elemen Kecil (menggunakan map untuk menampilkan data gambar) */}
            {imageData.slice(1).map((data) => (
              <GridItem key={data.id} colSpan={{ base: 1, md: 1 }} >
                <Box bg="teal.200" p={4} borderRadius="lg" height={280} position="relative">
                  <Image src={data.src} alt={data.alt} boxSize="100%" borderRadius="lg"  position="absolute"
      top="0"
      left="0"
      right="0"
      bottom="0" />
      <Text color="white" position="absolute" bottom="20" left="4" fontSize="md">
      12 Januari 2024
    </Text>
    <Text color="white" position="absolute" bottom="10" left="4" fontSize="lg">
      KPU DIMULAI SEBENTAR LAGI
    </Text>
    <Text color="white" position="absolute" bottom="4" left="4" fontSize="md">
      SUPER ADMIN
    </Text>
                 
                </Box>
              </GridItem>
            ))}
          </Grid>
        </Container>
      </Box>
            </Container>

  );
};

export default LandingPage;
