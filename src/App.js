import React, { useState, useEffect } from "react";

function App() {
  const [people, setPeople] = useState([]);
  const [currentPerson, setCurrentPerson] = useState(null);

  useEffect(() => {
    async function fetchPeople() {
      const res = await fetch("https://swapi.dev/api/people/");
      const data = await res.json();
      setPeople(data.results);
    }

    fetchPeople();
  }, []);

  async function fetchPerson(personUrl) {
    // const currentPerson = event.target.innerText;
    // const arr = currentPerson.split(" ");
    // arr.pop();

    // const currentPersonsName = arr.join(" ");

    // const currentPersonArray = people.filter(
    //   (person) => person.name === currentPersonsName
    // );

    const response = await fetch(personUrl);
    const data = await response.json();

    setCurrentPerson(data);
  }

  if (currentPerson) {
    return (
      <>
        <h1>Star Wars People</h1>
        <div>
          <h3>{currentPerson.name}</h3>
          <p>Height: {currentPerson.height}</p>
          <p>Mass: {currentPerson.mass}</p>
          <p>Hair Color: {currentPerson.hair_color}</p>
          <p>Eye Color: {currentPerson.eye_color}</p>
          <p>Gender: {currentPerson.gender}</p>
        </div>
        <button
          onClick={() => {
            setCurrentPerson(null);
          }}
        >
          Back
        </button>
      </>
    );
  }

  return (
    <>
      <h1>Star Wars People</h1>
      {people.map((person, index) => {
        return (
          <>
            <p key={index}>{person.name}</p>
            <button
              key={index + 100}
              onClick={() => {
                fetchPerson(person.url);
              }}
            >
              {person.name} Details
            </button>
          </>
        );
      })}
    </>
  );
}

module.exports = App;
