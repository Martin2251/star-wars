import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react'
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
    .then(data)

  }



export default Card
