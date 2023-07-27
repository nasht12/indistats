import React, { useEffect, useRef } from "react";
import { Chart, ChartConfiguration } from "chart.js/auto";

interface InflationtData {
  [year: string]: number;
}

interface InflationChartProps {
  data: InflationtData[];
  field: string;
}

const LineChart: React.FC<InflationChartProps> = ({ data, field }) => {
  const chartRef = useRef<Chart | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  
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

  function formatChartData(data: InflationtData[]): ChartConfiguration {
    const years = Object.keys(data[0]);
    const unemploymentValues = years.map((year) => data[0][year]);

    return {
      type: "line",
      data: {
        labels: years,
        datasets: [
          {
            label: `${field}`,
            data: unemploymentValues,
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            borderColor: "rgba(75, 192, 192, 1)",
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
              text: "Year",
            },
          },
          y: {
            title: {
              display: true,
              text: `${field}`,
            },
          },
        },
      },
    };
  }

  return (
    <div className="max-w-3xl mx-auto p-4">
      <canvas
        ref={canvasRef}
        className="max-w-full h-auto"
        width="800"
        height="400"
      ></canvas>
    </div>
  );
};

export default LineChart;
