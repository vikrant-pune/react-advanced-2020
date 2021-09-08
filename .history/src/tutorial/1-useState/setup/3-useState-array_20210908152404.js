import React, { useState } from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const [people, setPeople] = useState(data);
  return (
    <>
      {people.map((person) => {
        return "Hi .. " + person;
      })}
    </>
  );
};

export default UseStateArray;
