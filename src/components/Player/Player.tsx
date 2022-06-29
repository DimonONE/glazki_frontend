import React from "react";
import "../css/player.scss";
// @ts-ignore

export const Player = () => {
  const src = [
    "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.wav",
  ];
  return (
    <div className="wrapper-player">
      {/*<ReactAudioPlayer*/}
      {/*  className="player"*/}
      {/*  src="my_audio_file.ogg"*/}
      {/*  autoPlay*/}
      {/*  controls*/}
      {/*/>*/}
    </div>
  );
};
