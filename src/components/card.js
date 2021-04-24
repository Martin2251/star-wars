import { useParams } from "react-router";

const Card = () => {
  const [card, setCard] = useState({});
  const [filmsTitle, setFilmsTitle] = useState([])

  const { id } = useParams();
