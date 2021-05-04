import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Title from "./Title";

const Card = () => {
  const [card, setCard] = useState({});

  const { id } = useParams();

  // Load the api for people
  useEffect(() => {
    fetch(`https://swapi.dev/api/people/${id}`)
      .then((response) => {
        console.log(response);
        // console.log(response.json())
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setCard(data);
      });
  }, card);

  console.log(card);

  //show the card and everthing else
  return (
    <div className="mainCard">
      <p className="name" data-cy="card-name">
        {card.name}
      </p>
      <div className="charactersFeatures">
        <p className="charactersData">Height:{card.height} cm</p>
        <p className="charactersData">Eye Color: {card.eye_color}</p>
        <p className="charactersData">Hair Color: {card.hair_color}</p>
        <p className="charactersData">Birth Date: {card.birth_year}</p>
      </div>


