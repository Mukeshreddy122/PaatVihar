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
import GoogleMapReact from 'google-map-react'
import { Paper,Typography,useMediaQuery } from "@mui/material";
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import GradeOutlinedIcon from '@mui/icons-material/GradeOutlined';

import useStyles from "./styles"
function Map() {
  const classes=useStyles()
  const isMobile=useMediaQuery("(min-width:600px)")
  const coordinates={lat:0,lng:0}
  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
      bootstrapURLKeys={{key:"AIzaSyD8Jx1IrCugJAlvxrFeavJxQpNGvudE2qY"}}
      defaultCenter={coordinates}
      center={coordinates}
      defaultZoom={14}
      margin={[50,50,50,50]}
      options={''}
      onChange={''}
      onChildClick={''}>

      </GoogleMapReact>
      
    </div>
      
  
  );
}
export default Map;
