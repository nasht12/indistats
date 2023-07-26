"use client";
import React from "react";
import UnemploymentChart from "@/components/unemploymentchart";

const UnemploymentPage: React.FC = () => {

  return (
    <div>
      <h1>Unemployment Data Visualization</h1>
      <UnemploymentChart />
    </div>
  );
};

export default UnemploymentPage;
