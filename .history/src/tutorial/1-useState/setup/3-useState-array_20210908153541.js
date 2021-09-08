import React, { useState } from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const [people, setPeople] = useState(data);
  // return (
  //   <>
  //     {people.map((person) => {
  //       console.log(person.name);
  //       return <p>"Hi .. {person.name} "</p>;
  //     })}
  //   </>
  // );

  return (
    <>
      {people.map((person) => {
        const { id, name } = person;

        return (
          <div key={id} className="item">
            <h4> {name}</h4>
          </div>
        );
      })}
      <button
        className="btn"
        onClick={() => {
          setPeople(["Ram", "Suresh"]]);
        }}
      >
        Flip
      </button>
    </>
  );
};

export default UseStateArray;
