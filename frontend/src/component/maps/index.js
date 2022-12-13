import { Grid, GridItem } from "@chakra-ui/react";
import HeaderData from "./HeaderData";
import List from "./ListData";
import Map from "./Map";
// import Detail from "./Detail"
import { useState } from "react";

const MapData = () => {
  return (
    <Grid templateColumns='repeat(2, 10fr)'>
      <GridItem w="50%" h="100vh">
        <List />
      </GridItem>
      <GridItem w="100%" h="100vh">
        <Map />
      </GridItem>
    </Grid>
  );
};
export default MapData;
