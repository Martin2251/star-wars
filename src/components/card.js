import { useParams } from "react-router-dom";
import React, { useState, useEffect } from 'react'
import {link} from 'react-router-dom';

const Card = () => {
  const [card, setCard] = useState({});
  const [filmsTitle, setFilmsTitle] = useState([])

  const { id } = useParams();

  const fetchItems = async () => {
    const data = await fetch(`https://swapi.dev/api/people/${id}`)
    .then(response => {
      console.log(response)
      return response.json()
    })

  }
