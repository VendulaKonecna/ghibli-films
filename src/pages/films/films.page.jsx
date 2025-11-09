import { useContext } from "react"
import AppDataContext from "../../utils/context/addDataContext"
import Header from "../../components/Header/Header"
import Section from "../../components/Section/MainSection"
import FilmCard from "../../components/FilmCard/FilmCard"
import Footer from "../../components/Footer/Footer"

const FilmsPage = () => {
const { appData } = useContext(AppDataContext)

  if (!appData) {
    return <div>Data nejsou dostupná.</div>;
  }

console.log(appData)
    return (
        <>
            <Header />
            <Section>
                <main className="films-grid">
                {appData.films.map((film) => (
                <FilmCard
                    key={film.id}
                    title={film.title}
                    image={film.image}
                />
            ))}
                </main>
            </Section>
            <Footer />
</>
)
}

export default FilmsPage


