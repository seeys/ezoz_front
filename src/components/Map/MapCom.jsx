import React from "react";
import GoogleMapReact from "google-map-react";
import styled from "styled-components";
import { useState } from "react";
import { googleLogout } from "@react-oauth/google";
const Container = styled.div`
  width: 800px;
  height: 800px;
`;
function MapCom() {
  const defaultProps = {
    center: {
      lat: 37.49451137331156,
      lng: 126.94584585059987,
    },
    zoom: 11,
  };

  const handleClick = (e) => {
    console.log(e.lat, e.lng);
  };
  return (
    <Container>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: process.env.REACT_APP_MAP_KEY,
          region: "kr",
        }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        onClick={handleClick}
      ></GoogleMapReact>
    </Container>
  );
}

export default MapCom;
