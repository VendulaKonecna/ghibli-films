import { useContext } from "react"
import FilmCardDetail from "../../components/FilmCardDetail/FilmCardDetail"
import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import Section from "../../components/Section/MainSection"
import AppDataContext from "../../utils/context/addDataContext"
import { useParams } from "react-router-dom"

const FilmDetailPage = () => {
    const { id } = useParams()
    const { appData } = useContext(AppDataContext)

    if (!appData || !Array.isArray(appData.films)) {
    return <p>Data o filmech nejsou dostupná.</p>
  }

    const film = appData.films.find((f) => f.id === id)
    
    return (
        <>
            <Header />
            <Section>
                {film && (
                    <FilmCardDetail
                        key={film.id}
                        title={film.title}
                        original_title={film.original_title}
                        original_title_romanised={film.original_title_romanised}
                        image={film.image}
                        description={film.description}
                        director={film.director}
                        producer={film.producer}
                        release_date={film.release_date}
                        running_time={film.running_time}
                    />
                )}
            </Section>
            <Footer />
        </>

    )
}

export default FilmDetailPage