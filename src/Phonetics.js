import React from "react";

export default function Phonetics(props) {
  console.log(props.phonetics);
  return (
    <div className="Phonetics">
      <h4>{props.phonetics.text}</h4>
      <audio controls src={props.phonetics.audio} />
    </div>
  );
}
