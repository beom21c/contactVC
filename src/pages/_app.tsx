import '@/styles/globals.css'
import type {AppProps} from 'next/app'
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {useState} from "react";
import { Provider } from 'react-redux';
import {wrapper} from "@/store/store";
export default function App({Component, pageProps}: AppProps) {
    const [queryClient] = useState(() => new QueryClient());
    const {store, props} = wrapper.useWrappedStore(pageProps);

    return  <Provider store={store}><QueryClientProvider client={queryClient}><Component {...pageProps} /></QueryClientProvider></Provider>
}
