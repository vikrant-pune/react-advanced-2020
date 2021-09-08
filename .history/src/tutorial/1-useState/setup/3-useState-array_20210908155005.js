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

  const removeItem = (id) => {
    let newPeople = people.filter((pep) => pep.id !== 1);
    setPeople(newPeople);
  };

  return (
    <>
      {people.map((person) => {
        const { id, name } = person;

        return (
          <div key={id} className="item">
            <h4> {name}</h4>
            <button onClick={removeItem(id)}>remove</button>
          </div>
        );
      })}

      <button
        className="btn"
        onClick={() => {
          if (people[0].name !== "Ram") {
            setPeople([
              { id: 1, name: "Ram" },
              { id: 2, name: "Laxman" },
            ]);
          } else {
            setPeople(data);
          }
        }}
      >
        Flip2
      </button>
    </>
  );
};

export default UseStateArray;
