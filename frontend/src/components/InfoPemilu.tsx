import React, { useRef, useEffect } from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import Chart, { ChartConfiguration, ChartDataset } from 'chart.js/auto'; // Import tipe ChartConfiguration dan ChartDataset
import VoteModal from './VoteModal';

const InfoPemilu: React.FC = () => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstance = useRef<Chart | null>(null);

  useEffect(() => {
    // Pastikan hanya dijalankan di sisi klien
    if (typeof window !== 'undefined' && chartRef.current) {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      const myChartRef = chartRef.current.getContext('2d');

      if (myChartRef) {
        chartInstance.current = new Chart(myChartRef, {
          type: 'pie',
          data: {
            datasets: [
              {
                data: [35, 25, 20],
                backgroundColor: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)', 'rgb(255, 205, 86)'],
                hoverOffset: 4,
              },
            ],
          },
        } as ChartConfiguration<'pie', ChartDataset<'pie'>>); // Sesuaikan dengan tipe ChartConfiguration dan ChartDataset yang diharapkan
      }

      return () => {
        if (chartInstance.current) {
          chartInstance.current.destroy();
        }
      };
    }
  }, []);
  

  return (
    <Box py={9}>
      <Text textAlign="center" fontSize="3xl" fontWeight="extrabold" mb={10} color="gray.400">
        INFO PEMILU TERUPDATE
      </Text>
      <Flex alignItems="center" justifyContent="center" gap={20}>
        <Box>
          <Text textAlign="center" fontWeight="bold" fontSize="xl" mb={2} color="gray.400">
            Hasil :
          </Text>
          <Box width="250px">
            <canvas ref={chartRef} style={{ width: '300px', height: '200px' }} />
          </Box>
        </Box>
        <Flex flexDir="column" gap={3}>
          <Box bg="pink.500" px={4} py={2} rounded="lg" shadow="lg">
            <Flex alignItems="center" gap={3}>
              <Box py={1} px={1} border="2" rounded="lg" bg="red.800" borderColor="white">
                <Text fontSize="xs" fontWeight="bold" textAlign="center" color="white">
                  No Paslon <Text fontSize="lg" mt="-1">1</Text>
                </Text>
              </Box>
              <Box>
                <Text fontSize="lg" fontWeight="bold" color="red.800">
                  ANAS TAYLOR
                </Text>
                <Text fontSize="lg" fontWeight="bold" color="red.800" mt="-2">78%</Text>
              </Box>
            </Flex>
          </Box>
          <Box bg="yellow.400" px={4} py={2} rounded="lg" shadow="lg">
            <Flex alignItems="center" gap={3}>
              <Box py={1} px={1} border="2" rounded="lg" bg="red.800" borderColor="white">
                <Text fontSize="xs" fontWeight="bold" textAlign="center" color="white">
                  No Paslon <Text fontSize="lg" mt="-1">2</Text>
                </Text>
              </Box>
              <Box>
                <Text fontSize="lg" fontWeight="bold" color="red.800">
                  PRAMUNDO
                </Text>
                <Text fontSize="lg" fontWeight="bold" color="red.800" mt="-2">78%</Text>
              </Box>
            </Flex>
          </Box>
          <Box bg="sky.500" px={4} py={2} rounded="lg" shadow="lg">
            <Flex alignItems="center" gap={3}>
              <Box py={1} px={1} border="2" rounded="lg" bg="red.800" borderColor="white">
                <Text fontSize="xs" fontWeight="bold" textAlign="center" color="white">
                  No Paslon <Text fontSize="lg" mt="-1">3</Text>
                </Text>
              </Box>
              <Box>
                <Text fontSize="lg" fontWeight="bold" color="red.800">
                  GANSHIN IMPACT
                </Text>
                <Text fontSize="lg" fontWeight="bold" color="red.800" mt="-2">78%</Text>
              </Box>
            </Flex>
          </Box>
         <VoteModal/>
        </Flex>
      </Flex>
    </Box>
  );
};

export default InfoPemilu;
