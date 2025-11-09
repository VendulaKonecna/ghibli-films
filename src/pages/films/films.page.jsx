import { useContext, useEffect, useState } from "react"
import AppDataContext from "../../utils/context/addDataContext"
import Header from "../../components/Header/Header"
import Section from "../../components/Section/MainSection"
import FilmCard from "../../components/FilmCard/FilmCard"
import Footer from "../../components/Footer/Footer"
import { PuffLoader } from "react-spinners"

const FilmsPage = () => {
const { appData } = useContext(AppDataContext);
const [delayedData, setDelayedData] = useState(null)

useEffect(() => {
  const timer = setTimeout(() => {
    setDelayedData(appData)
  }, 3000)

  return () => clearTimeout(timer)
}, [appData])

if (!delayedData || !delayedData.films) {
  return (
    <div className="loader-container">
      <PuffLoader color="#109ceb" size={80} />
    </div>
  )
}

  if (!appData) {
    return <div>Data nejsou dostupná.</div>;
  }

    return (
        <>
            <Header />
            <Section>
                <main className="films-grid">
                {delayedData.films.map((film) => (
                <FilmCard
                    key={film.id}
                    id={film.id}
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


