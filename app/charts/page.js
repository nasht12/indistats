"use client"
import React, { useState, useEffect } from 'react';
import StackedBarChart from '../../components/ui/stackedbarchart';

// const MyPage = () => {
//   const data = [[10, 20, 30], [15, 25, 35], [5, 10, 15]]; // Replace with your data
//   const layout = "stacked"; // Use "grouped" for grouped layout

//   return (
//     <div>
//       <h1>Stacked Bar Chart</h1>
//       <StackedBarChart data={data} layout={layout} />
//     </div>
//   );
// };

// export default MyPage;


export const PopulationChart = () => {
  const [populationData, setPopulationData] = useState(null);

  useEffect(() => {
    // Fetch the JSON data here (or you can import it from a file if available)
    // For this example, we are using the data you provided directly.
    const jsonData = [{"Country Name":"India","Country Code":"IND","Indicator Name":"Population, total","Indicator Code":"SP.POP.TOTL","1960":445954579.0,"1961":456351876.0,"1962":467024193.0,"1963":477933619.0,"1964":489059309.0,"1965":500114346.0,"1966":510992617.0,"1967":521987069.0,"1968":533431909.0,"1969":545314670.0,"1970":557501301.0,"1971":569999178.0,"1972":582837973.0,"1973":596107483.0,"1974":609721951.0,"1975":623524219.0,"1976":637451448.0,"1977":651685628.0,"1978":666267760.0,"1979":681248383.0,"1980":696828385.0,"1981":712869298.0,"1982":729169466.0,"1983":745826546.0,"1984":762895156.0,"1985":780242084.0,"1986":797878993.0,"1987":815716125.0,"1988":833729681.0,"1989":852012673.0,"1990":870452165.0,"1991":888941756.0,"1992":907574049.0,"1993":926351297.0,"1994":945261958.0,"1995":964279129.0,"1996":983281218.0,"1997":1002335230.0,"1998":1021434576.0,"1999":1040500054.0,"2000":1059633675.0,"2001":1078970907.0,"2002":1098313039.0,"2003":1117415123.0,"2004":1136264583.0,"2005":1154638713.0,"2006":1172373788.0,"2007":1189691809.0,"2008":1206734806.0,"2009":1223640160.0,"2010":1240613620.0,"2011":1257621191.0,"2012":1274487215.0,"2013":1291132063.0,"2014":1307246509.0,"2015":1322866505.0,"2016":1338636340.0,"2017":1354195680.0,"2018":1369003306.0,"2019":1383112050.0,"2020":1396387127.0,"2021":1407563842.0,"2022":1417173173.0,"Unnamed: 67":null}]

    // Process the JSON data if needed (remove unwanted keys, format, etc.)
    // For this example, we are using the data directly without any processing.
    setPopulationData(jsonData);
  }, []);

  return (
    <div>
      <h1>India Population Chart</h1>
      {populationData && <StackedBarChart data={formatData(populationData)} layout="stacked" />}
    </div>
  );
};

// Helper function to format the data into the required format for the StackedBarChart component
function formatData(data) {
  // Process the data as needed to create the required format for the chart
  // For this example, we are using the population data directly, but you may need to extract and format it based on the specific JSON structure.
  return data.map((item) => [
    item["1962"],
    item["1972"],
    item["1982"],
    item["1992"],
    item["2002"],
    item["2012"],
    item["2022"]
  ]);
}

export default PopulationChart;
