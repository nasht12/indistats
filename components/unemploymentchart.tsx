import React, { useEffect, useRef } from 'react';
import { Chart, ChartConfiguration } from 'chart.js/auto';

interface UnemploymentData {
  [year: string]: number;
}

interface UnemploymentChartProps {
  data: UnemploymentData[];
}

const UnemploymentChart: React.FC = () => {
  const chartRef = useRef<Chart | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const data = [
    {
      "1991": 6.737,
      "1992": 6.815,
      "1993": 6.798,
      "1994": 6.83,
      "1995": 7.014,
      "1996": 7.181,
      "1997": 7.279,
      "1998": 7.487,
      "1999": 7.709,
      "2000": 7.77,
      "2001": 7.957,
      "2002": 8.102,
      "2003": 8.36,
      "2004": 8.531,
      "2005": 8.7,
      "2006": 8.625,
      "2007": 8.536,
      "2008": 8.354,
      "2009": 8.384,
      "2010": 8.319,
      "2011": 8.168,
      "2012": 8.095,
      "2013": 8.037,
      "2014": 7.981,
      "2015": 7.915,
      "2016": 7.842,
      "2017": 7.733,
      "2018": 7.65,
      "2019": 6.51,
      "2020": 10.195,
      "2021": 7.713,
      "2022": 7.33
    }
  ];  

  useEffect(() => {
    const chartData = formatChartData(data);

    if (chartRef.current) {
      // If chart instance exists, destroy it before creating a new one
      chartRef.current.destroy();
    }

    if (canvasRef.current) {
      chartRef.current = new Chart(canvasRef.current, chartData);
    }
  }, [data]);

  function formatChartData(data: UnemploymentData[]): ChartConfiguration {
    const years = Object.keys(data[0]);
    const unemploymentValues = years.map((year) => data[0][year]);

    return {
      type: 'line',
      data: {
        labels: years,
        datasets: [
          {
            label: 'Unemployment',
            data: unemploymentValues,
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
            fill: true,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            title: {
              display: true,
              text: 'Year',
            },
          },
          y: {
            title: {
              display: true,
              text: 'Unemployment',
            },
          },
        },
      },
    };
  }

  return (
    <div className="max-w-3xl mx-auto p-4">
      <canvas ref={canvasRef} className="max-w-full h-auto" width="800" height="400"></canvas>
    </div>
  );
};

export default UnemploymentChart;
