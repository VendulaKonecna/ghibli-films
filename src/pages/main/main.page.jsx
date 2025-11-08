import Button from "../../components/Button/Button"
import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import MainSection from "../../components/Section/MainSection"

import { useNavigate } from "react-router-dom"

const MainPage = () => {
    const navigate = useNavigate()

    return <>
            <Header />
            <MainSection> 
                <Button onClick={() => navigate('/films')}> Seznam filmů </Button>
            </MainSection >
            <Footer />
        </>        
}

export default MainPage