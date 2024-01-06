import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";

function SwipeableTextMobileStepper(props) {
  const pictures = [
    "https://fastly.picsum.photos/id/16/2500/1667.jpg?hmac=uAkZwYc5phCRNFTrV_prJ_0rP0EdwJaZ4ctje2bY7aE",
    "https://fastly.picsum.photos/id/19/2500/1667.jpg?hmac=7epGozH4QjToGaBf_xb2HbFTXoV5o8n_cYzB7I4lt6g",
  ];

  return (
    <Carousel>
      {pictures.map((picture, i) => (
        <Item key={i} item={picture} />
      ))}
    </Carousel>
  );
}

function Item(props) {
  return (
    <Paper>
      <img src={props.item} height="750px" width="2000px"></img>
    </Paper>
  );
}

export default SwipeableTextMobileStepper;
