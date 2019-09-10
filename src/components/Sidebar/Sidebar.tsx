import React, { useState } from "react";
import styled from "styled-components";
import { Bar, Line } from "react-chartjs-2";

export interface SidebarProps {}

const Sidebar: React.SFC<SidebarProps> = () => {
  const [
    chartData = {
      labels: [
        "6:00",
        "8:00",
        "12:00",
        "14:00",
        "16:00",
        "18:00",
        "20:00",
        "22:00"
      ],
      datasets: [
        {
          data: [20, 21, 25, 19, 16, 19, 15, 10],
          backgroundColor: ["rgba(192, 236, 174, 0.6)"]
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

  const WeatherIcon = styled.i`
    font-size: 70px;
    padding-bottom: 10px;
    font-weight: 400;
  `;

  const TempHeader = styled.h2`
    font-size: 35px;
    font-weight: 300;
  `;

  const ChartContainer = styled.div`
    width: 90%;
    margin: auto;
    height: 20vh;
  `;

  return (
    <Container>
      <NameHeader>Poznań</NameHeader>
      <WeatherIcon className="wi wi-day-sunny"></WeatherIcon>
      <TempHeader>23&deg;C</TempHeader>
      <ChartContainer>
        <Line
          height={200}
          data={chartData}
          options={{
            legend: {
              display: false
            },
            points: {
              display: false
            },
            scales: {
              yAxes: [
                {
                  ticks: {
                    beginAtZero: false,
                    fontColor: "#fff"
                  }
                }
              ],
              xAxes: [
                {
                  ticks: {
                    fontColor: "#fff"
                  }
                }
              ]
            },
            maintainAspectRatio: false
          }}
        />
      </ChartContainer>
    </Container>
  );
};

export default Sidebar;
