// material
import { Box, Card, CardHeader } from '@mui/material';
import { merge } from 'lodash';
import ReactApexChart from 'react-apexcharts';

//
import { BaseOptionChart } from '@/components/charts';
// utils
import { fNumber } from '@/utils/formatNumber';
import { ApexOptions } from 'apexcharts';

// ----------------------------------------------------------------------

const CHART_DATA = [{ data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380] }];

export default function AppConversionRates() {
  const chartOptions = merge(BaseOptionChart(), {
    tooltip: {
      marker: { show: false },
      y: {
        formatter: (value: number) => fNumber(value),
        title: {
          formatter: (seriesName: string) => `#${seriesName}`,
        },
      },
    },
    plotOptions: {
      bar: { horizontal: true, barHeight: '28%', borderRadius: 2 },
    },
    xaxis: {
      categories: [
        'Italy',
        'Japan',
        'China',
        'Canada',
        'France',
        'Germany',
        'South Korea',
        'Netherlands',
        'United States',
        'United Kingdom',
      ],
    },
  });

  return (
    <Card>
      <CardHeader title="Conversion Rates" subheader="(+43%) than last year" />
      <Box sx={{ mx: 3 }} dir="ltr">
        <ReactApexChart
          type="bar"
          series={CHART_DATA}
          options={chartOptions as unknown as ApexOptions}
          height={364}
        />
      </Box>
    </Card>
  );
}
