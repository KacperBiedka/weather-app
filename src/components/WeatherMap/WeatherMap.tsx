import React, { useState } from "react";
import styled from "styled-components";
import { GoogleMap, withGoogleMap, withScriptjs } from "react-google-maps";

import { mapsKey } from "../../apiKeys";
import Loader from "../Loader/Loader";

export interface WeatherMapProps {}

const WeatherMap: React.SFC<WeatherMapProps> = () => {
  const [location, setLocation] = useState({ lat: 52.409538, lng: 16.931992 });

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
    width: 250px;
    right: 0;
    border: none;
  `;

  // Get the location of the user with the HTML5 GeoLocation API

  const locationHandler = (position: any) => {
    const lat: number = position.coords.latitude;
    const lng: number = position.coords.longitude;
    setLocation({ lat, lng });
  };

  navigator.geolocation.getCurrentPosition(locationHandler);

  const MyGoogleMap = withScriptjs(
    withGoogleMap(() => (
      <GoogleMap
        defaultCenter={location}
        defaultZoom={16}
        options={{ disableDefaultUI: false }}
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
        {/* {map} */}
        <Loader />
      </div>
    </Container>
  );
};

export default WeatherMap;
