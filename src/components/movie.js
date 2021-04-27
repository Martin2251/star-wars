
// use effect hook with the films api
  useEffect(() => {
    fetch(`https://swapi.dev/api/films/${id}`)
        .then(response => {
            console.log(response)
            // console.log(response.json())
            return response.json()
