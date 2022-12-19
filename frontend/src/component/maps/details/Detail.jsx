import React from "react";
import {
  Box,
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Chip,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import StarIcon from "@mui/icons-material/Star";

import useStyles from "./styles";
const Detail = ({ school }) => {
  const classes = useStyles();
  return (
    <Card elevation={6}>
      <CardMedia
        style={{ height: 350 }}
        image={
          school.image
            ? school.schoolPictures[0].img
            : "https://theindianpublicschool.org/wp-content/uploads/2021/12/cbse-tips.jpg"
        }
        title={school.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5">
          {school.name}
        </Typography>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="subtitle1">Fee:</Typography>
          <Typography variant="subtitle1">{school.fees}</Typography>
        </Box>
        {/* Rating */}
        <Box display="flex" justifyContent="space-between">
          <Typography variant="subtitle1">Board Of Education:</Typography>
          <Typography variant="subtitle1">{school.boardOfEduction}</Typography>
        </Box>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="subtitle2" color="textsecondary">
            {school.description}
          </Typography>
        </Box>
        {school?.address && (
          <Typography
            gutterBottom
            variant="subtitle2"
            color="textSecondary"
            className={classes.subtitle}
          >
            <LocationOnIcon />
            {school.address}
          </Typography>
        )}
        {school?.phone && (
          <Typography
            gutterBottom
            variant="subtitle2"
            color="textSecondary"
            className={classes.subtitle}
          >
            <PhoneIcon />
            {school.phone}
          </Typography>
        )}
        <CardActions>
          <Button size="small" variant="outlined" color="error" onClick={()=>window.open(school.url,'_blank')}>
            Website URL
          
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default Detail;
