import React, { useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { GoogleMap, withGoogleMap, withScriptjs } from "react-google-maps";
import axios from "axios";
import * as actionTypes from "../../actions";

import { mapsKey, weatherKey } from "../../apiKeys";
import Loader from "../Loader/Loader";

export interface WeatherMapProps {}

export const UnconnectedWeatherMap: React.SFC = (props: any) => {
  (function getData() {
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?q=Poznan&units=metric&APPID=${weatherKey}`
      )
      .then(function(response) {
        props.getTemperature(response.data.main);
        console.log(response);
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      })
      .finally(function() {
        // always executed
      });
  })();

  const [location, setLocation] = useState({
    lat: 52.412144263995835,
    lng: 16.83990933013979
  });

  const Container = styled.div`
    height: 100vh;
    width: 75vw;
    background: #ccc;
    float: right;
  `;

  const SearchInput = styled.input`
    position: fixed;
    z-index: 2;
    background: white;
    height: 25px;
    padding: 5px;
    width: 30vw;
    right: 15vw;
    top: 10px;
    border: none;
  `;

  // Get the location of the user with the HTML5 GeoLocation API

  // const locationHandler = (position: any) => {
  //   const lat: number = position.coords.latitude;
  //   const lng: number = position.coords.longitude;
  //   console.log(lat, lng);
  //   setLocation({ lat, lng });
  // };

  // navigator.geolocation.getCurrentPosition(locationHandler);

  const MyGoogleMap = withScriptjs(
    withGoogleMap(() => (
      <GoogleMap
        defaultCenter={location}
        defaultZoom={16}
        options={{ disableDefaultUI: false }}
        onClick={e => {
          console.log("latitude", e.latLng.lat());
          console.log("longitude", e.latLng.lng());
        }}
      />
    ))
  );

  const loadingElement = <Loader />;
  const containerElement = <div style={{ height: "100vh" }} />;
  const mapElement = <div style={{ height: "100vh" }} />;
  const googleMapURL = `https://maps.googleapis.com/maps/api/js?v=3.exp&key=${mapsKey}`;
  const map = (
    <MyGoogleMap
      loadingElement={loadingElement}
      containerElement={containerElement}
      googleMapURL={googleMapURL}
      mapElement={mapElement}
    />
  );

  return (
    <Container data-test="component-container">
      <SearchInput data-test="map-search-input" />
      <div data-test="google-map-container" id="map">
        {map}
      </div>
    </Container>
  );
};

const mapDispatchToProps = (dispatch: Function) => {
  return {
    getTemperature: (temperature: Object) =>
      dispatch(actionTypes.getTemperature(temperature))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(UnconnectedWeatherMap);
