import * as React from "react";
import styled from "styled-components";
import { GoogleMap, withGoogleMap, withScriptjs } from "react-google-maps";

import { mapsKey } from "../../apiKeys";

export interface WeatherMapProps {}

const WeatherMap: React.SFC<WeatherMapProps> = () => {
  const googleMapURL = `https://maps.googleapis.com/maps/api/js?v=3.exp&key=${mapsKey}`;

  const Container = styled.div`
    height: 100vh;
    width: 75vw;
    background: #555;
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

  const someLatLng = { lat: 55.751244, lng: 37.618423 };

  const MyGoogleMap = withScriptjs(
    withGoogleMap(() => (
      <GoogleMap
        defaultCenter={someLatLng}
        defaultZoom={16}
        options={{ disableDefaultUI: true }}
      />
    ))
  );

  const loadingElement = <div />;
  const containerElement = <div style={{ height: "100vh" }} />;
  const mapElement = <div style={{ height: "100vh" }} />;
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

export default WeatherMap;
