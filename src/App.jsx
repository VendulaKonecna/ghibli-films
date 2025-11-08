import { Route, Routes } from 'react-router-dom'

import MainPage from './pages/main/main.page'

import './App.css'

const App = () => {

  return <Routes>
            <Route path='/' element={<MainPage />} />
        </Routes>
}

export default App
