import React, { useState } from "react";
import {
  CircularProgress,
  Grid,
  Typography,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@mui/material";
import useStyles from "./styles.js";
import Detail from "../details/Detail.js";

const ListData = () => {
  const classes = useStyles();
  const [type, setType] = useState("");
  const [rating, setRating] = useState("");
  const schools = [{ name: "Nmrec" }, { name: "CBIT" }, { name: "IITB" },{ name: "NNRG" }, { name: "SVIT" }];

  return (
    <div className={classes.container}>
      <Typography variant="h5" style={{ color: "black" }}>
        Popular Schools ,Schools and attractions
      </Typography>
      <FormControl sx={{ m: 1, minWidth: 200 }}>
        <InputLabel id="demo-simple-select-helper-label">
          Type of School
        </InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={type}
          onChange={(e) => {
            setType(e.target.value);
          }}
        >
          <MenuItem value="popular">Popular Schools</MenuItem>
          <MenuItem value="schools">All Schools</MenuItem>
          <MenuItem value="attractions">Attractions</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 200 }}>
        <InputLabel id="demo-simple-select-helper-label">Rating</InputLabel>
        <Select
          value={rating}
          onChange={(e) => {
            setRating(e.target.value);
          }}
        >
          <MenuItem value={0}>All</MenuItem>
          <MenuItem value={3}>Above 3.0</MenuItem>
          <MenuItem value={4}>Above 4.0</MenuItem>
          <MenuItem value={4.5}>Above 4.5</MenuItem>
        </Select>
      </FormControl>
      <Grid container spacing={3} className={classes.list}>
        {schools?.map((school,i)=>(
          <Grid item key={i} xs={12}>
            <Detail school={school}/>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ListData;
