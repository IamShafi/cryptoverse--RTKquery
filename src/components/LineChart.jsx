// import React, { useEffect, useRef } from 'react';
// import { Line } from 'react-chartjs-2';
// import { Col, Row, Typography } from 'antd';
// import Chart from 'chart.js/auto'; // Make sure to import the Chart.js library

// const { Title } = Typography;

// const LineChart = ({ coinHistory, currentPrice, coinName }) => {
//   const chartRef = useRef(null);

//   useEffect(() => {
//     // Destroy the existing chart before creating a new one
//     if (chartRef.current) {
//       chartRef.current.chartInstance.destroy();
//     }

//     // Create a new chart
//     chartRef.current = renderChart();

//     // Clean up on component unmount
//     return () => {
//       if (chartRef.current) {
//         chartRef.current.chartInstance.destroy();
//       }
//     };
//   }, [coinHistory, currentPrice, coinName]);

//   const renderChart = () => {
//     const coinPrice = [];
//     const coinTimestamp = [];

//     for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
//       coinPrice.push(coinHistory?.data?.history[i].price);
//     }

//     for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
//       coinTimestamp.push(new Date(coinHistory?.data?.history[i].timestamp).toLocaleDateString());
//     }

//     const data = {
//       labels: coinTimestamp,
//       datasets: [
//         {
//           label: 'Price In USD',
//           data: coinPrice,
//           fill: false,
//           backgroundColor: '#0071bd',
//           borderColor: '#0071bd',
//         },
//       ],
//     };

//     const options = {
//       scales: {
//         yAxes: [
//           {
//             ticks: {
//               beginAtZero: true,
//             },
//           },
//         ],
//       },
//     };

//     return new Chart(chartRef.current, {
//       type: 'line',
//       data: data,
//       options: options,
//     });
//   };

//   return (
//     <>
//       <Row className="chart-header">
//         <Title level={2} className="chart-title">{coinName} Price Chart </Title>
//         <Col className="price-container">
//           <Title level={5} className="price-change">Change: {coinHistory?.data?.change}%</Title>
//           <Title level={5} className="current-price">Current {coinName} Price: $ {currentPrice}</Title>
//         </Col>
//       </Row>
//       <Line ref={chartRef} data={data} options={options} />
//     </>
//   );
// };

// export default LineChart;
import React from 'react'

const LineChart = () => {
  return (
    <div>
      
    </div>
  )
}

export default LineChart
