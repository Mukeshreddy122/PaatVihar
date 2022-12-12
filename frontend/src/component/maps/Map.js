// import GoogleMapReact from "google-map-react";
// import { Box } from "@chakra-ui/react";
// import { GoogleMap, LoadScript } from "@react-google-maps/api";

// function Map({ coordinates, setCoordinates }) {
//   return (
//     <Box width={"full"} height={"full"}>
//       <LoadScript googleMapsApiKey="AIzaSyD8Jx1IrCugJAlvxrFeavJxQpNGvudE2qY">
//         <GoogleMap
//           center={coordinates}
//           zoom={10}
//           onChange={() => {}}
//           onChildClick={() => {}}
//         >
//           {/* Child components, such as markers, info windows, etc. */}
//           <></>
//         </GoogleMap>
//       </LoadScript>
//     </Box>
//   );
// }

import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "100%",
};

function Map({setCoordinates,coordinates}) {
  return (
    
      <LoadScript googleMapsApiKey="AIzaSyD8Jx1IrCugJAlvxrFeavJxQpNGvudE2qY">
        <GoogleMap  mapContainerStyle={containerStyle} center={coordinates} zoom={5} defaultCenter={coordinates}  onChange={()=>{}} onChildClick={()=>{}}>
          {/* Child components, such as markers, info windows, etc. */}
          <></>
        </GoogleMap>
      </LoadScript>
  
  );
}
export default Map;
