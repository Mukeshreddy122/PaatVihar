import {
  Flex,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { Autocomplete } from "@react-google-maps/api";
import React from "react";
import { BiSearch } from "react-icons/bi";
const HeaderData = ({ setType, setRatings, setCoordinates }) => {
  return (
    <Flex position={"absolute"} top={0} left={0} px={4} py={2} zIndex={101} alignItems={"center"} justifyContent={"center"}>
      
        <Flex  alignItems={"center"} justifyContent={"center"}>
          {/* <Autocomplete> */}

          <InputGroup width={"35vw"} shadow="lg">
            <InputRightElement
              pointerEvents={"none"}
              children={<BiSearch color="grey" fontSize={20} />}
            >
              <Input
              type={"text"}
              placeholder="search for location"
              variant="filter"
              fontSize={18}
              bg={"white"}
              _hover={{ bg: "whiteAlpha.800" }}
              _focus={{ bg: "whiteAlpha.800" }}
              _placeholder={{ color: "gray.700" }}
            />
            </InputRightElement>
            
          </InputGroup>
          {/* </Autocomplete> */}
        </Flex>
     
    </Flex>
  );
};

export default HeaderData;
