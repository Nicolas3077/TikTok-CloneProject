import React from "react";
import "./VideoFooter.css";
import MusicNoteIcon from "@mui/icons-material/MusicNote";

function VideoFooter({name, description, music}) {
  return (
    <div className="VideoFooter">
      <div className="VideoFooter_Text">
        <h3>@{name}</h3>
        <p>{description}</p>
        <div className="VideoFooter_Music">
          <MusicNoteIcon className="VideoFooter_Icon" />
          <div className="VideoFooterMusic_Text">
            <p>{music}</p>
          </div>

        </div>
      </div>
      <img
        className="VideoFooter_Record"
        alt="Imagem de um vinil girando" /*Descreve uma imagem*/
        src="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/vinil.png"
      />
    </div>
  );
}

export default VideoFooter;
