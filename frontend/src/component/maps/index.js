import { Grid, GridItem } from "@chakra-ui/react";
import HeaderData from "./HeaderData";
import List from "./list/ListData";
import Map from "./Map";
// import Detail from "./Detail"
import { useState,useEffect } from "react";
import axios from "axios"

const MapData = () => {
  const [schools, setSchools] = useState([]);
  // sets lat and lng of users location
  useEffect(() => {
    axios.get("/api/schools").then((res) => {
      setSchools(res.data.school);
    }).catch((err)=>{
      console.log(err)
    })
    
  }, []);
  return (
    <Grid templateColumns="repeat(2, 10fr)">
      <GridItem w="100%" h="100vh">
        <List schools={schools}/>
      </GridItem>
      <GridItem w="100%" h="100vh">
        <Map 
        schools={schools}/>
      </GridItem>
    </Grid>
  );
};
export default MapData;
