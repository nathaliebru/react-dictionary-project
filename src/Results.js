import React from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";
import "./Results.css";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <section>
          <div className="row justify-content-between">
            <div className="col-sm-2">
              <h2>{props.results.word}</h2>
            </div>
            <div className="col-sm-4 text-center">
              {props.results.phonetics.map(function (phonetic, index) {
                return (
                  <div key={index}>
                    <Phonetics phonetics={phonetic} />
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        {props.results.meanings.map(function (meaning, index) {
          return (
            <section key={index}>
              <Meaning meaning={meaning} />
            </section>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
