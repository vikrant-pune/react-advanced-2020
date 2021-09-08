import React, { useState } from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const [people, setPeople] = useState(data);
  return (
    <>
      {people.map((person) => {
        console.log(person.name);
        return <p>"Hi .. {person.name} "</p>;
      })}
    </>
  );
};

export default UseStateArray;
