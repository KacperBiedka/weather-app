import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Bar, Line } from "react-chartjs-2";
import { connect } from "react-redux";
import { reduxState } from "../../reducers";

export interface SidebarProps {}

export const UnconnectedSidebar: React.SFC = (props: any) => {
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

  // setTimeout(() => {
  //   console.log(props.temperature.list[0].main.temp);
  // }, 5000);

  useEffect(() => {
    let newTempChartData: Array<number> = [];
    let newTempChartLabels: Array<string> = [];
    props.temperature.list.map((hourTemperature: any, index: number) => {
      if (index < 8) {
        newTempChartData.push(hourTemperature.main.temp);
        console.log(hourTemperature.main.temp);
        let tempDate = hourTemperature.dt_txt.slice(11, 16);
        if (tempDate.endsWith(":")) {
          tempDate = "0" + tempDate.slice(0, 3);
        }
        newTempChartLabels.push(tempDate);
        console.log(tempDate);
      }
    });
    setLineChartData({
      ...lineChartData,
      labels: [...newTempChartLabels],
      datasets: [
        {
          label: "Temperature",
          data: [...newTempChartData],
          backgroundColor: "rgba(192, 236, 174, 0.6)"
        }
      ]
    });
  }, [props.temperature]);

  return (
    <Container data-test="component-container">
      <NameHeader data-test="name-header">
        {props.temperature.city ? props.temperature.city.name : "Ławica"}
      </NameHeader>
      <WeatherIcon
        data-test="weather-icon"
        className="wi wi-day-sunny"
      ></WeatherIcon>
      <TempHeader data-test="temp-header">
        {props.temperature.list
          ? Math.ceil(props.temperature.list[0].main.temp)
          : "25"}{" "}
        &deg;C
      </TempHeader>
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

const mapStateToProps = (state: reduxState) => {
  return {
    temperature: state.temperature
  };
};

export default connect(mapStateToProps)(UnconnectedSidebar);
