import React, { useEffect, useRef } from 'react';
import { Chart, ChartConfiguration } from 'chart.js/auto';

interface GDPData {
  Year: string;
  'GDP (current US$)': number;
}

interface GDPChartProps {
  data: GDPData[];
}

const GDPChart: React.FC = () => {
    const data: GDPData[] = [
        { Year: "1990", "GDP (current US$)": 320979026420.0349731445 },
        { Year: "1991", "GDP (current US$)": 270105341879.2260131836 },
        { Year: "1992", "GDP (current US$)": 288208066640.583984375 },
        { Year: "1993", "GDP (current US$)": 279295644530.0900268555 },
        { Year: "1994", "GDP (current US$)": 327275583539.5590209961 },
        { Year: "1995", "GDP (current US$)": 360281907854.9940185547 },
        { Year: "1996", "GDP (current US$)": 392896860670.8850097656 },
        { Year: "1997", "GDP (current US$)": 415867567334.1849975586 },
        { Year: "1998", "GDP (current US$)": 421351318896.8740234375 },
        { Year: "1999", "GDP (current US$)": 458820417337.8070068359 },
        { Year: "2000", "GDP (current US$)": 468394937262.3699951172 },
        { Year: "2001", "GDP (current US$)": 485441014538.6380004883 },
        { Year: "2002", "GDP (current US$)": 514937948870.0800170898 },
        { Year: "2003", "GDP (current US$)": 607699285433.8719482422 },
        { Year: "2004", "GDP (current US$)": 709148514804.6590576172 },
        { Year: "2005", "GDP (current US$)": 820381595512.9019775391 },
        { Year: "2006", "GDP (current US$)": 940259888792.1409912109 },
        { Year: "2007", "GDP (current US$)": 1216736448906.2900390625 },
        { Year: "2008", "GDP (current US$)": 1198895147694.7700195312 },
        { Year: "2009", "GDP (current US$)": 1341888016988.5700683594 },
        { Year: "2010", "GDP (current US$)": 1675615502766.1999511719 },
        { Year: "2011", "GDP (current US$)": 1823051829894.5500488281 },
        { Year: "2012", "GDP (current US$)": 1827637579584.7900390625 },
        { Year: "2013", "GDP (current US$)": 1856721494834.6398925781 },
        { Year: "2014", "GDP (current US$)": 2039126469963.3500976562 },
        { Year: "2015", "GDP (current US$)": 2103588347241.7700195312 },
        { Year: "2016", "GDP (current US$)": 2294796889945.0400390625 },
        { Year: "2017", "GDP (current US$)": 2651474263257.1499023438 },
        { Year: "2018", "GDP (current US$)": 2702929639861.5 },
        { Year: "2019", "GDP (current US$)": 2835606242052.4799804688 },
        { Year: "2020", "GDP (current US$)": 2671595389575.7001953125 },
        { Year: "2021", "GDP (current US$)": 3150306834279.6499023438 },
        { Year: "2022", "GDP (current US$)": 3385089881935.3901367188 },
      ];
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

  function formatChartData(data: GDPData[]): ChartConfiguration {
    const years = data.map((entry) => entry.Year);
    const gdpValues = data.map((entry) => entry['GDP (current US$)']);
  
    return {
      type: 'line',
      data: {
        labels: years,
        datasets: [
          {
            label: 'GDP (current US$)',
            data: gdpValues,
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
              text: 'GDP (current US$)',
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

export default GDPChart;
