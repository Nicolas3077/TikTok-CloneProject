import React, { useState } from "react";
import "./videoSidebar.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatIcon from "@mui/icons-material/Chat";
import ShareIcon from "@mui/icons-material/Share";

function VideoSidebar({ likes, messages, shares, onShare, onMessageClick }) {
  const [liked, setLiked] = useState(false); //define o estado "liked" como false e a função "setLiked" para alterar o valor
  const [heartAnimation, setHeartAnimation] = useState(false); //define o estado "heartAnimation" como false e a função "setHeartAnimation" para alterar o valor

  const handleLike = () => {
    setLiked(!liked); //inverte o valor de "liked"

    if (!liked) {
      //se "liked" for false
      setHeartAnimation(true); //define "heartAnimation" como true

      setTimeout(() => {
        //define um timer para executar a função abaixo após 1 segundo
        setHeartAnimation(false); //define "heartAnimation" como false novamente
      }, 1000);
    }
  };

  return (
    <div className="videoSidebar">
      <div className="videoSideBar__option" onClick={handleLike}>
        {liked ? (
          <FavoriteIcon fontSize="medium" />
        ) : (
          <FavoriteBorderIcon fontSize="medium" />
        )}

        <p>{liked ? likes + 1 : likes} </p>

        {heartAnimation && (
          <FavoriteIcon className="heart-animation" fontSize="large" />
        )}
      </div>

      <div className="videoSideBar__option" onClick={onMessageClick}>
        {" "}
        {}
        <ChatIcon fontSize="medium" /> {}
        <p> {messages} </p> {}
      </div>

      <div className="videoSideBar__option" onClick={onShare}>
        {" "}
        {}
        <ShareIcon fontSize="medium" /> {}
        <p>{shares}</p> {}
      </div>
    </div>
  );
}

export default VideoSidebar;
