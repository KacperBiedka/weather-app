import React, { useState } from "react";
import styled from "styled-components";
import { WeatherMapProps } from "../WeatherMap/WeatherMap";
import { Bar } from "react-chartjs-2";

export interface SidebarProps {}

const Sidebar: React.SFC<SidebarProps> = () => {
  const [
    chartData = {
      labels: ["Poznań", "Warszawa", "Wrocław", "Łódź", "Kraków", "Gdańsk"],
      datasets: [
        {
          label: "Population",
          fontColor: "#fff",
          data: [31232, 321312, 346436, 658658, 789879, 12123],
          backgroundColor: [
            "rgba(255, 99, 132, 0.6)",
            "rgba(255, 99, 132, 0.6)",
            "rgba(255, 99, 132, 0.6)",
            "rgba(255, 99, 132, 0.6)",
            "rgba(255, 99, 132, 0.6)",
            "rgba(255, 99, 132, 0.6)"
          ]
        }
      ]
    },
    setChartData
  ] = useState();

  const Container = styled.div`
    background: #555;
    height: 100vh;
    position: fixed;
    left: 0;
    width: 25vw;
    color: #fff;
    text-align: center;
  `;

  const NameHeader = styled.h1`
    font-weight: 200;
    padding: 10px;
    font-size: 50px;
  `;

  const TempHeader = styled.h2`
    font-size: 35px;
    font-weight: 300;
  `;

  const ChartContainer = styled.div`
    width: 90%;
    margin: auto;
    height: 50vh;
  `;

  return (
    <Container>
      <NameHeader>Poznań</NameHeader>
      <TempHeader>23&deg;C</TempHeader>
      <ChartContainer>
        <Bar
          height={200}
          data={chartData}
          options={{
            scales: {
              fontColor: "#fff"
            },
            maintainAspectRatio: false
          }}
        />
      </ChartContainer>
    </Container>
  );
};

export default Sidebar;
