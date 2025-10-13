import { MainLayout } from '@/components'
// import { EnquiryModal } from '@/components/modal'
// import { EnquiryContextComponent } from '@/context'
import '@/styles/globals.css'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; 
// import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google'
import { Montserrat } from 'next/font/google'
// import { Head } from 'next/head';

import {
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

const queryClient = new QueryClient();
const queryCache = new QueryCache();

const monte = Montserrat({ subsets: ['latin'], weight:['400','500','600','700','800','900'] });

export default function App({ Component, pageProps }) {
  
  return(
    <>
    <div className={monte.className}>
    <QueryClientProvider client={queryClient} queryCache={queryCache}>
    
      {/* <EnquiryContextComponent> */}
        <MainLayout>
            <Component {...pageProps} />
          {/* <EnquiryModal/>   */}
        </MainLayout>
      {/* </EnquiryContextComponent> */}
      <ToastContainer/>
    </QueryClientProvider>
    </div>
 
  </>
  )
}