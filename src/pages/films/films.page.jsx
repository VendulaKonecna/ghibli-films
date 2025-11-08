import { useContext } from "react"
import AppDataContext from "../../utils/context/addDataContext"
import FilmCard from "../../components/FilmCard/FilmCard"


const FilmsPage = () => {
const { appData } = useContext(AppDataContext)

  if (!appData) {
    return <div>Data nejsou dostupná.</div>;
  }


    return (
<main className="films-grid">
    {appData.films.map((film) => (
    <FilmCard
        key={film.id}
        title={film.title}
        image={film.image}
    />
    ))}
</main>
)
}

export default FilmsPage


