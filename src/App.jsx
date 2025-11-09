import { Route, Routes } from 'react-router-dom'

import MainPage from './pages/main/main.page'
import FilmsPage from './pages/films/films.page'
import FilmDetailPage from './pages/filmDetail/filmDetail.page'

import './App.css'



const App = () => {

  return <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='/films' element={<FilmsPage />} />
            <Route path='/films/:id' element={<FilmDetailPage />} />
        </Routes>
}

export default App
