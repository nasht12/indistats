"use client"
import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

const StackedBarChart = ({ data, layout }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const createChart = () => {
      const width = 928;
      const height = 500;
      const marginTop = 0;
      const marginRight = 0;
      const marginBottom = 10;
      const marginLeft = 0;
      const n = data[0].length; // Number of data groups

      const y01z = d3.stack()
        .keys(d3.range(n))
        (d3.transpose(data)) // Stacked data (yz)
        .map((data, i) => data.map(([y0, y1]) => [y0, y1, i]));

      const yMax = d3.max(data, y => d3.max(y));
      const y1Max = d3.max(y01z, y => d3.max(y, d => d[1]));

      const xz = data.map((_, i) => i); // X-axis data points

      const x = d3.scaleBand()
        .domain(xz)
        .rangeRound([marginLeft, width - marginRight])
        .padding(0.08);

      const y = d3.scaleLinear()
        .domain([0, y1Max])
        .range([height - marginBottom, marginTop]);

      const color = d3.scaleSequential(d3.interpolateBlues)
        .domain([-0.5 * n, 1.5 * n]);

      const svg = d3.select(chartRef.current)
        .attr("viewBox", [0, 0, width, height])
        .attr("width", width)
        .attr("height", height)
        .attr("style", "max-width: 100%; height: auto;");

      const rect = svg.selectAll("g")
        .data(y01z)
        .join("g")
          .attr("fill", (d, i) => color(i))
        .selectAll("rect")
        .data(d => d)
        .join("rect")
          .attr("x", (d, i) => x(i))
          .attr("y", height - marginBottom)
          .attr("width", x.bandwidth())
          .attr("height", 0);

      function transitionGrouped() {
        y.domain([0, yMax]);

        rect.transition()
          .duration(500)
          .delay((d, i) => i * 20)
          .attr("x", (d, i) => x(i) + x.bandwidth() / n * d[2])
          .attr("width", x.bandwidth() / n)
          .transition()
          .attr("y", d => y(d[1] - d[0]))
          .attr("height", d => y(0) - y(d[1] - d[0]));
      }

      function transitionStacked() {
        y.domain([0, y1Max]);

        rect.transition()
          .duration(500)
          .delay((d, i) => i * 20)
          .attr("y", d => y(d[1]))
          .attr("height", d => y(d[0]) - y(d[1]))
          .transition()
          .attr("x", (d, i) => x(i))
          .attr("width", x.bandwidth());
      }

      function update() {
        if (layout === "stacked") transitionStacked();
        else transitionGrouped();
      }

      update();
    };

    createChart();
  }, [data, layout]);

  return <svg ref={chartRef}></svg>;
};

export default StackedBarChart;
