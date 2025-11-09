import Article from "../../components/Article/Article"
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
                <Article>
                    <p>
                        Studio Ghibli (japonsky 株式会社スタジオジブリ, Kabušiki gaiša Sutadžio Džiburi) je japonské animátorské filmové studio a pobočka vydavatelství Tokuma Šoten. Jejich anime filmy jsou celosvětově úspěšné a sklízejí ohlas u kritiky i publika – řada z nich se řadí k nejsledovanějším anime filmům známým mimo Japonsko. Někdy se studiu Ghibli přezdívá „japonské studio Disney“ podle podobné míry popularity jeho děl v Japonsku.
                    </p>
                    <p>
                        Studio Ghibli bylo založeno v roce 1985 a vede jej všeobecně respektovaný režisér Hajao Mijazaki spolu se svým kolegou Isao Takahatou. Počátky studia se datují zpět do roku 1983 k filmu Naušika z Větrného údolí, po jehož vydání bylo vytvořeno studio, aby zastřešilo další produkci týmu. Jeho mateřskou společností je Tokuma, která také nakládá s právy na jednotlivé filmy.
                    </p>
                    <p>
                        Jméno Ghibli pochází z italské přezdívky pro saharská průzkumná letadla z druhé světové války, původně z arabského výrazu ghibli (v italštině sirocco, jiný výraz pro horký vítr vanoucí Saharou). Jeho japonská výslovnost je však /džibri/ nebo /džiburi/. Podle jedné domněnky za jménem stojí úmysl zakladatelů do světa anime vnést nový vítr; jeden ze zakladatelů, Hajao Mijazaki, je známým milovníkem létání a italskému letectvu také později věnoval film Porco Rosso. Logem Studia Ghibli je Totoro, postava z filmu Můj soused Totoro.
                    </p>
                </Article>
                <img src="./totoro-logo.png" alt="totoro logo" />
                <Button onClick={() => navigate('/films')}> Seznam filmů </Button>
            </MainSection >
            <Footer />
        </>        
}

export default MainPage