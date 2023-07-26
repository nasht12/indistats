"use client";
import React from "react";
import PopulationChart from "../../components/populationchart";

interface PopulationData {
  [key: string]: any;
}

interface PopulationPageProps {
  populationData: PopulationData[];
}

const PopulationPage: React.FC<PopulationPageProps> = () => {
  const populationData: PopulationData[] = [
    {
      "Country Name": "India",
      "Country Code": "IND",
      "Indicator Name": "Population, total",
      "Indicator Code": "SP.POP.TOTL",
      "1990": 870452165.0,
      "1991": 888941756.0,
      "1992": 907574049.0,
      "1993": 926351297.0,
      "1994": 945261958.0,
      "1995": 964279129.0,
      "1996": 983281218.0,
      "1997": 1002335230.0,
      "1998": 1021434576.0,
      "1999": 1040500054.0,
      "2000": 1059633675.0,
      "2001": 1078970907.0,
      "2002": 1098313039.0,
      "2003": 1117415123.0,
      "2004": 1136264583.0,
      "2005": 1154638713.0,
      "2006": 1172373788.0,
      "2007": 1189691809.0,
      "2008": 1206734806.0,
      "2009": 1223640160.0,
      "2010": 1240613620.0,
      "2011": 1257621191.0,
      "2012": 1274487215.0,
      "2013": 1291132063.0,
      "2014": 1307246509.0,
      "2015": 1322866505.0,
      "2016": 1338636340.0,
      "2017": 1354195680.0,
      "2018": 1369003306.0,
      "2019": 1383112050.0,
      "2020": 1396387127.0,
      "2021": 1407563842.0,
      "2022": 1417173173.0,
    },
  ];
  return (
    <div>
      <h1>Population Data Visualization</h1>
      {populationData && <PopulationChart data={populationData} />}
    </div>
  );
};

export default PopulationPage;
