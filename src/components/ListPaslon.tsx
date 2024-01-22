import React, {useState} from 'react';
import { Table, Thead, Tbody, Tr, Th, Td, Image, Box, Text, Container, Button } from '@chakra-ui/react';
import AddPaslonModal from './AddPaslonModal';

const ListPaslon: React.FC = () => {
    const [ModalIsOpen, setModalIsOpen] = useState(false)

    const openModal = () => {
        setModalIsOpen(true);
    }

    const closeModal = () => {
      setModalIsOpen(false)  
    }
  // Dummy data, gantilah dengan data sebenarnya
  const candidates = [
    {
      id: 1,
      name: 'Anas Taylor',
      image: 'https://media.suara.com/pictures/653x366/2023/05/30/87737-anies-baswedan-koalisi-perubahan-tim-delapan.webp',
      visionMission: 'Visi Misi Anas Taylor',
      coalition: 'Koalisi A',
      
    },
    {
      id: 2,
      name: 'Pramundo',
      image: 'https://rmol.id/images/berita/normal/2023/12/455572_08060613122023_prabowo.jpeg',
      visionMission: 'Visi Misi Pramundo',
      coalition: 'Koalisi B',
    },
    {
      id: 3,
      name: 'Ganshin Impact',
      image: 'https://asset.kompas.com/crops/A0qds-2BjWmU4g8xkkxJANW0Zmo=/0x0:0x0/750x500/data/photo/2022/10/24/635673c468c46.jpg',
      visionMission: 'Visi Misi Ganshin Impact',
      coalition: 'Koalisi C',
    },
  ];

  return (
    <Container mt="200" mb='220'>
        <Button onClick={openModal}>Add Paslon</Button>
        <AddPaslonModal isOpen={ModalIsOpen} onClose={closeModal}/>
    <Table variant="simple">
      <Thead>
        <Tr>
          <Th>No Urut</Th>
          <Th>Image</Th>
          <Th>Name</Th>
          <Th>Visi Misi</Th>
          <Th>Koalisi</Th>
        </Tr>
      </Thead>
      <Tbody>
        {candidates.map((candidate) => (
            <Tr key={candidate.id}>
            <Td>{candidate.id}</Td>
            <Td>
              <Image src={candidate.image} alt={candidate.name} boxSize="50px" objectFit="cover" />
            </Td>
            <Td>{candidate.name}</Td>
            <Td>
              <Box maxW="200px" overflow="hidden" textOverflow="ellipsis" whiteSpace="nowrap">
                <Text>{candidate.visionMission}</Text>
              </Box>
            </Td>
            <Td>{candidate.coalition}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
        </Container>
  );
};

export default ListPaslon;
