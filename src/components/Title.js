import { useEffect, useState } from "react";

//empty state from the user
const Title = (props) => {
  const [titleText, setTitleText] = useState("");

  console.log(props.filmLink);

  useEffect(() => {

    fetch(`${props.filmLink}`)
    .then(response => response.json())
    .then(data => {
      setTitleText(data.title)
    })
}, [])

// re rendering and adding props to use

return (
  <div className="mainCard">
    <ul className="movieBox">
      <li>{prop}</li>
    </ul>
  </div>
);

export default Title;
