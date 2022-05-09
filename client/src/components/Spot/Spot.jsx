import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";
// import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
// import DeleteIcon from "@material-ui/icons/Delete";
// import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
// import { useDispatch } from "react-redux";
import ModalMap from "../Modals/ModalMap";
import ModalForecast from "../Modals/ModalForecast";
import ModalInfo from "../Modals/ModalInfo";

// import { likePost, deletePost } from '../../../actions/posts';
// import useStyles from "./styles";

const Spot = ({ spot, setCurrentId }) => {
  // const dispatch = useDispatch();
  // const classes = useStyles();
  const src = "./images/logo.png";
  console.log(src);

  return (
    <Card className={""} style={{ border: "1px solid blue" }}>
      <img src={spot.selectedFile || src} alt="logo" />
      <CardMedia
        className={""}
        // image={spot.selectedFile || ""}
        image={spot.selectedFile || src}
        title={spot.spot_name}
      />
      <div className={""}>
        <Typography variant="h6">{spot.spot_name}</Typography>
      </div>

      <div className={""}>
        <Typography variant="body2" color="textSecondary" component="h2">
          {spot.country}
        </Typography>
      </div>
      <Typography className={""} gutterBottom variant="h5" component="h2">
        {spot.city}
      </Typography>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {spot.wave_form}
        </Typography>
      </CardContent>
      <img src={spot.selectedFile} style={{ width: "100%" }} alt="spot" />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "3px",
        }}
      >
        <ModalMap spot={spot} />
        <ModalForecast spot={spot} />
        <ModalInfo spot={spot} />
      </div>
    </Card>
  );
};

export default Spot;
