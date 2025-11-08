
import { useQuery } from '@tanstack/react-query';
import AddDataContext from './addDataContext';

const loadData = async () => {
    const films = await fetch ('https://ghibliapi.vercel.app/films')
        .then(response => response.json());

    return { films }
}

const AddDataProvider = ({ children }) => {
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
        <AddDataContext.Provider value={{ appData }}>
            {children}
        </AddDataContext.Provider>
    )
}

export default AddDataProvider