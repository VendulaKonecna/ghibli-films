import Button from "../../components/Button/Button"
import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import MainSection from "../../components/Section/MainSection"

const MainPage = () => {
    return <>
            <Header />
            <MainSection> 
                <Button> Seznam filmů </Button>
            </MainSection >
            <Footer />
        </>        
}

export default MainPage