import React, { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import axios from 'axios';

const options = {
  legend: {
    show: true,
    position: 'top',
    horizontalAlign: 'left',
  },
  colors: ['#3C50E0', '#000000', '#FF5733', '#DAF7A6'], // Extend colors as needed
  chart: {
    fontFamily: 'Satoshi, sans-serif',
    height: 335,
    type: 'area',
    dropShadow: {
      enabled: true,
      color: '#623CEA14',
      top: 10,
      blur: 4,
      left: 0,
      opacity: 0.1,
    },
    toolbar: {
      show: false,
    },
  },
  responsive: [
    {
      breakpoint: 1024,
      options: {
        chart: {
          height: 300,
        },
      },
    },
    {
      breakpoint: 1366,
      options: {
        chart: {
          height: 350,
        },
      },
    },
  ],
  stroke: {
    width: [2],
    curve: 'smooth',
  },
  grid: {
    xaxis: {
      lines: {
        show: true,
      },
    },
    yaxis: {
      lines: {
        show: true,
      },
    },
  },
  dataLabels: {
    enabled: false,
  },
  markers: {
    size: 4,
    colors: '#fff',
    strokeColors: '#3C50E0',
    strokeWidth: 3,
    strokeOpacity: 0.9,
    fillOpacity: 1,
    hover: {
      size: undefined,
      sizeOffset: 5,
    },
  },
  xaxis: {
    type: 'category',
    categories: [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
    ],
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    title: {
      style: {
        fontSize: '0px',
      },
    },
    min: 0,
    max: 100,
  },
};

const Linechart = () => {
  const [series, setSeries] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/payment2/get')
      .then(response => {
        const payments = response.data; // Adjust based on actual response structure

        if (!Array.isArray(payments)) {
          throw new Error('Payments data is not an array');
        }

        const seriesData = payments.reduce((acc, payment) => {
          const date = new Date(payment.paymentDateTime);
          const year = date.getFullYear();
          const month = date.getMonth();
          if (year === 2024) {
            acc[month]++;
          }
          return acc;
        }, Array(12).fill(0));

        setSeries([{ name: 'Payments', data: seriesData }]);
      })
      .catch(error => {
        console.error('Error fetching payment details', error);
      });
  }, []);

  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pt-7.5 pb-5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-8">
      <div className="flex flex-wrap items-start justify-between gap-3 sm:flex-nowrap">
        <h2 className="text-lg font-semibold text-heading">Monthly Payments</h2>
      </div>

      <div>
        <div id="chartOne" className="-ml-5">
          <ReactApexChart
            options={options}
            series={series}
            type="area"
            height={330}
          />
        </div>
      </div>
    </div>
  );
};

export default Linechart;
