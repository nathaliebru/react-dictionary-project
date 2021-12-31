import React from "react";
import "./Meaning.css";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <div className="row">
        <div className="part-of-speech col-3">
          <h3> {props.meaning.partOfSpeech}</h3>
        </div>
        <div className="col-9">
          {props.meaning.definitions.map(function (definition, index) {
            return (
              <div key={index}>
                <div className="definition">{definition.definition}</div>
                <div className="example">{definition.example}</div>
                <Synonyms synonyms={definition.synonyms} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
