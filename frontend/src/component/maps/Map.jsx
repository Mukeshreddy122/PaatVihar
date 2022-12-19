import React, { useEffect, useState } from "react";
import GoogleMapReact from "google-map-react";
import { Paper, Typography } from "@mui/material";
import useStyles from "./styles";
function Map({  schools }) {
  const classes = useStyles();

  // const [coordinates,setcoordinates]=useState([])
  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyD8Jx1IrCugJAlvxrFeavJxQpNGvudE2qY" }}
        defaultCenter={10}
        center={{lat: 18.1124,lng: 79.0193}}
        defaultZoom={14}
        options={""}
        // onChange={(e) => {
        //   setCoordinates({ lat: e.center.lat, lng: e.center.lng });
        // }}
        // onChildClick={""}
      >
        {schools?.map((school, i) => (
          <div
            color="primary"
            className={classes.markerContainer}
            lat={Number(school.latitude)}
            lng={Number(school.longitude)}
            key={i}
          >
            {
            
                
             
                <Paper elevation={3} className={classes.paper}>
                  <Typography className={classes.typography} variant="subtitle2" gutterBottom>{school.name}</Typography>
                 <img className={classes.pointer}
                 src="https://theindianpublicschool.org/wp-content/uploads/2021/12/cbse-tips.jpg"
                 alt="schoolImages"/>
                </Paper>
             
            }
          </div>
        ))}
      </GoogleMapReact>
    </div>
  );
}
export default Map;
