import { Flex } from "@chakra-ui/react";
import HeaderData from "./HeaderData";
import List from "./ListData";
import Map from "./Map";
// import Detail from "./Detail"
import { useState } from "react";

const MapData = () => {
  const [coordinates, setCoordinates] = useState({ lat: 0, lng: 0 });
  const [type, settype] = useState("popular");
  const [ratings, setRatings] = useState("");
  return (
    <Flex
      justifyContent={"center"}
      alignItems={"center"}
      width={"100vw"}
      height={"100vh"}
      position={"relative"}
    >
      <HeaderData
        settype={settype}
        setratings={setRatings}
        setCoordinates={setCoordinates}
      />
      <List />
      <Map setCoordinates={setCoordinates} coordinates={coordinates} />
    </Flex>
  );
};
export default MapData;
