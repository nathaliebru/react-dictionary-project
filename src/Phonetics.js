import React from "react";
import "./Phonetics.css";

export default function Phonetics(props) {
  function playAudio(event) {
    event.preventDefault();
    const audio = new Audio(props.phonetics.audio);
    audio.play();
  }

  return (
    <div className="Phonetics">
      <a href="/" onClick={playAudio}>
        <i className="fas fa-play-circle"></i>
      </a>{" "}
      <span className="phonetics-text">/{props.phonetics.text}/</span>
    </div>
  );
}
