import { Route, Routes } from 'react-router-dom'

import MainPage from './pages/main/main.page'
import FilmsPage from './pages/films/films.page'

import './App.css'


const App = () => {

  return <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='/films' element={<FilmsPage />} />
        </Routes>
}

export default App
