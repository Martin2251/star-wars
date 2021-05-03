import React from "react";
import "./Catalog.css";
import { Link } from "react-router-dom";

class Catalog extends React.Component {
  constructor(props) {
      super(props)
      this.state = {
          charactersInfo: [],
          totalPages: 0,
          currentPage: 1
      }
  }

  // executed on first render, i want to fetch the people
  componentDidMount = () => {
      fetch('https://swapi.dev/api/people/')
          .then(response => response.json())
          .then(data => {
              this.setState({ charactersInfo: data.results })
              let totalPages = Math.ceil(data.count / 10)
              this.setState({ totalPages: totalPages })
          })
  }

