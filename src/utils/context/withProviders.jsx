import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import AppDataProvider from "./appDataProvider.comp";


const WithProviders = ({children}) => {
    const queryClient = new QueryClient();
    return  <BrowserRouter>
                    <QueryClientProvider client={queryClient}>
                        <AppDataProvider>
                            {children}
                        </AppDataProvider>
                    </QueryClientProvider>     
            </BrowserRouter>
}

export default WithProviders