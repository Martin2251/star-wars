import { useParams } from "react-router-dom";
import React, { useState, useEffect } from 'react'
import {link} from 'react-router-dom';
import './Catalog.css'

const Card = () => {
  const [card, setCard] = useState({});
  const [filmsTitle, setFilmsTitle] = useState([])

  const { id } = useParams();

// show a person on loading first time
  useEffect(() => {
    fetch(`https://swapi.dev/api/people/${id}`)
        .then(response => {
            console.log(response)
            // console.log(response.json())
            return response.json()

  const fetchItems = async () => {
    const data = await fetch(`https://swapi.dev/api/people/${id}`)
    .then(response => {
      console.log(response)
      return response.json()
    })

  }


  <div className='charactersFeatures'>
  <p className='charactersData'>Height:{card.height} cm</p>
  <p className='charactersData'>Eye Color: {card.eye_color}</p>
  <p className='charactersData'>Hair Color: {card.hair_color}</p>
  <p className='charactersData'>Birth Date: {card.birth_year}</p>
</div>


export default Card
