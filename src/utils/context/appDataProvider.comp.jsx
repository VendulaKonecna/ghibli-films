
import { useQuery } from '@tanstack/react-query';
import AppDataContext from './addDataContext';

const loadData = async () => {
    const films = await fetch ('https://ghibliapi.vercel.app/films')
        .then(response => response.json());

    return { films }
}

const AppDataProvider = ({ children }) => {
    const {data: appData, isPending, isError } = useQuery({
        queryKey: ["filmData"],
        queryFn: loadData,
    })

    if (isPending) {
        return <div>Loading... </div>
    }

    if (isError) {
        return <div>Error</div>    
    }

    return (
        <AppDataContext.Provider value={{ appData }}>
            {children}
        </AppDataContext.Provider>
    )
}

export default AppDataProvider