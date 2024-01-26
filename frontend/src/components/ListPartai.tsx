import React, {useState} from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Image,
  Container,
  Button,
} from '@chakra-ui/react';

import AddPartaiModal from './AddPartaiModal';

interface PartaiTableProps {
  parties: Partai[]; // Gantilah dengan interface sesuai struktur data Anda
}

interface Partai {
  id: number;
  number: number;
  logoUrl: string;
  chairman: string;
  visionMission: string;
  address: string;
}

const PartaiTable: React.FC<PartaiTableProps> = () => {
    const [isAddPartaiModalOpen, setAddPartaiModalOpen] = useState(false)

    const handleAddPartaiClick = () => {
        setAddPartaiModalOpen(true);
      };
    
      const handleAddPartaiModalClose = () => {
        setAddPartaiModalOpen(false);
      };


  return (
    <Container mt="200" mb="270">
<Button mb="5" onClick={handleAddPartaiClick}>Add Partai</Button>
<AddPartaiModal isOpen={isAddPartaiModalOpen} onClose={handleAddPartaiModalClose}/>
    <Table variant="simple">
      <Thead>
        <Tr>
          <Th>No Urut</Th>
          <Th>Gambar Logo</Th>
          <Th>Ketua Umum</Th>
          <Th>Visi Misi</Th>
          <Th>Alamat</Th>
        </Tr>
      </Thead>
      <Tbody>
       
            <Tr>
            <Td>1</Td>
            <Td>
              <Image src='https://pbs.twimg.com/profile_images/1352104224377561089/PrgM0fi__400x400.jpg' alt={`Logo `} boxSize="50px" objectFit="cover" />
            </Td>
            <Td>MegaChan</Td>
            <Td>Jual Pulau</Td>
            <Td>Kantor DPR RI</Td>
          </Tr>
        
      </Tbody>
    </Table>
        </Container>

  )
}

export default PartaiTable;
