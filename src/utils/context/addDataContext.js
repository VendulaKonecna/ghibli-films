import { createContext } from "react";

const AppDataContext = createContext({
    appData: null,
    setAppData: () => {}
})

export default AppDataContext