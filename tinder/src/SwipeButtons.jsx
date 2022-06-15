import "./SwipeButtons.css"
import React from 'react';
import { IconButton } from "@mui/material";
import ReplayIcon from '@mui/icons-material/Replay';
import CloseIcon from '@mui/icons-material/Close';
import StarIcon from '@mui/icons-material/Star';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import FlashOn from "@mui/icons-material/FlashOn";

function SwipeButtons() {
  return (
    <div className="swipeButtons">
      <IconButton className="swipeButtons__repeat">
        <ReplayIcon/>
      </IconButton>

      <IconButton className="swipeButtons__left">
        <CloseIcon/>
      </IconButton>

      <IconButton className="swipeButtons__star">
        <StarIcon/>
      </IconButton>

      <IconButton className="swipeButtons__right">
        <FavoriteIcon/>
      </IconButton>

      <IconButton className="swipeButtons__lightning">
        <FlashOnIcon/>
      </IconButton>
    </div>
  );
}

export default SwipeButtons;