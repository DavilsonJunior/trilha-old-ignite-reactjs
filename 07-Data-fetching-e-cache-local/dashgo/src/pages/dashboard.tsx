import { Box, Flex, SimpleGrid, Text, theme } from "@chakra-ui/react";
import dynamic from 'next/dynamic'
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";

const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false
});

interface Options {
  chart?: {
    toolbar: {
      show: boolean
    },
    zoom: {
      enabled: boolean
    },
    foreColor: string
  }
  grid: {
    show: boolean
  },
  dataLabels: {
    enabled: boolean
  },
  tooltip: {
    enabled: boolean
  },
  xaxis: {
    type: 'datetime' | 'category' | 'numeric'
    axisBorder: {
      color: string
    },
    axisTicks: {
      color: string
    },
    categories?: unknown
  },
  fill: {
    opacity: number,
    type: 'gradient',
    gradient: {
      shade: 'dark',
      opacityFrom: number,
      opacityTo: number
    }
  }
}

const options: Options = {
  chart: {
    toolbar: {
      show: false
    },
    zoom: {
      enabled: false
    },
    foreColor: theme.colors.gray[500]
  },
  grid: {
    show: false
  },
  dataLabels: {
    enabled: false
  },
  tooltip: {
    enabled: false
  },
  xaxis: {
    type: 'datetime',
    axisBorder: {
      color: theme.colors.gray[600]
    },
    axisTicks: {
      color: theme.colors.gray[600]
    },
    categories: [
      '2021-03-18T00:00:00.000Z',
      '2021-03-19T00:00:00.000Z',
      '2021-03-20T00:00:00.000Z',
      '2021-03-21T00:00:00.000Z',
      '2021-03-22T00:00:00.000Z',
      '2021-03-23T00:00:00.000Z',
      '2021-03-24T00:00:00.000Z',
    ]
  },
  fill: {
    opacity: 0.3,
    type: 'gradient',
    gradient: {
      shade: 'dark',
      opacityFrom: 0.7,
      opacityTo: 0.3
    }
  }
};

const series = [
  {
    name: 'series1',
    data: [31, 120, 10, 28, 61, 18, 109]
  }
];


export default function Dashboard() {
  return (
    <Flex direction="column" h="100vh">
    <Header />

    <Flex
      my="6"
      mx="auto"
      px="6"
      w="100%"
      maxWidth={1480}
    >
      <Sidebar />

      <SimpleGrid
        flex="1"
        gap="4"
        minChildWidth="320px"
        alignItems="flex-start"
      >
        <Box
          p={["6", "8"]}
          pb="4"
          bg="gray.800"
          borderRadius={8}
        >
          <Text mb="4" fontSize="lg">Inscritos da semana</Text>
          <Chart options={options} series={series} type="area" height={160} />
        </Box>

        <Box
          p={["6", "8"]}
          pb="4"
          bg="gray.800"
          borderRadius={8}
        >
          <Text mb="4" fontSize="lg">Taxa de abertura</Text>
          <Chart options={options} series={series} type="area" height={160} />
        </Box>
      </SimpleGrid>
    </Flex>
  </Flex>   
  )
}