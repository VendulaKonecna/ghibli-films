import { NavLink } from "react-router-dom"

const Header = () => {
    return <header className="header">
        <NavLink to={"/"}>
            <img src={"./logo.svg"} alt="Logo Ghibli studio" />
        </NavLink>
    </header>

}

export default Header