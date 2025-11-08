import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import AddDataProvider from "./addDataProvider.comp";


const WithProviders = ({children}) => {
    const queryClient = new QueryClient();
    return  <BrowserRouter>
                <QueryClientProvider client={queryClient}>
                    <AddDataProvider>
                        {children}
                    </AddDataProvider>
                </QueryClientProvider>     
            </BrowserRouter>
}

export default WithProviders