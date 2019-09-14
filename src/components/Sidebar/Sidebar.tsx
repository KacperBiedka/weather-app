import React, { useState } from "react";
import styled from "styled-components";
import { Bar, Line } from "react-chartjs-2";

export interface SidebarProps {}

const Sidebar: React.SFC<SidebarProps> = () => {
  const [
    lineChartData = {
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
          label: "Temperature",
          data: [20, 21, 25, 19, 16, 19, 15, 10],
          backgroundColor: "rgba(192, 236, 174, 0.6)"
        }
      ]
    },
    setLineChartData
  ] = useState();

  const [
    barChartData = {
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
          label: "Rain chance in %",
          data: [5, 10, 15, 20, 20, 15, 10, 5],
          backgroundColor: "rgba(139, 188, 218, 0.9)"
        }
      ]
    },
    setBarChartData
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
    font-weight: 400;
    color: #f6cf65;
  `;

  const TempHeader = styled.h2`
    margin-top: 10px;
    margin-bottom: 40px;
    font-size: 35px;
    font-weight: 300;
  `;

  const LineChartContainer = styled.div`
    width: 90%;
    margin: auto;
    height: 20vh;
  `;

  const BarChartContainer = styled.div`
    width: 90%;
    margin: auto;
    height: 20vh;
    margin-top: 5vh;s
  `;

  return (
    <Container data-test="component-container">
      <NameHeader data-test="name-header">Poznań</NameHeader>
      <WeatherIcon
        data-test="weather-icon"
        className="wi wi-day-sunny"
      ></WeatherIcon>
      <TempHeader data-test="temp-header">23&deg;C</TempHeader>
      <LineChartContainer data-test="line-chart-container">
        <Line
          data-test="line-chart"
          height={200}
          data={lineChartData}
          options={{
            legend: {
              labels: {
                fontColor: "#fff"
              }
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
      </LineChartContainer>
      <BarChartContainer data-test="bar-chart-container">
        <Bar
          data-test="bar-chart"
          height={200}
          data={barChartData}
          options={{
            legend: {
              labels: {
                fontColor: "#fff"
              }
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
      </BarChartContainer>
    </Container>
  );
};

export default Sidebar;
