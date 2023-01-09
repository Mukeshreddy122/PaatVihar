import React, { useEffect, useState } from "react";
import "./Featured.css";
// import GoogleMap from "google-map-react";
import { useMemo } from "react";
 import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

// const AnyReactComponent = () => {};
// const renderMarkers = (map, maps) => {
//   let marker = new maps.Marker({
//     position: { lat: 17.405, lng: 78.621},
//     map,
//     title: "Hello World!",
//   });
//   return marker;
// };npm i -S @react-google-maps/api --legacy-peer-deps

function Map() {
  const center = useMemo(() => ({ lat: 17.405777, lng: 78.621254 }), []);

  return (
    <GoogleMap zoom={15} center={center}  mapContainerStyle={{ width: '100%', height: '600px' }}>
      <Marker position={center} />
    </GoogleMap>
  );
}
const Featured = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyD8Jx1IrCugJAlvxrFeavJxQpNGvudE2qY",
  });
  if (!isLoaded) return <div>Loading...</div>;
  return (
    <div className="featured">
      <Map />
    </div>
  );
};

export default Featured;
