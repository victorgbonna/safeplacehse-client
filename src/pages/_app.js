import { MainLayout } from '@/components'
// import { EnquiryModal } from '@/components/modal'
// import { EnquiryContextComponent } from '@/context'
import '@/styles/globals.css'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; 
// import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google'

// import { Head } from 'next/head';

import {
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";



const queryClient = new QueryClient();
const queryCache = new QueryCache();
 

// export const metadata={
//   title:"Climax Properties Consult Limited",
//   description:"We are Nigeria's leading real estate brand that specializes in selling residential, commercial, and luxury properties, offering expert consultancy and personalized services.",
//   icons:{
//     icon:["favicon.ico?v=4"],
//     apple:["/apple-touch-icon.png?v=4"],
//     shortcut:["/apple-touch-icon.png"]
//   }
// }

export default function App({ Component, pageProps }) {
  
  return(
    <>
    <QueryClientProvider client={queryClient} queryCache={queryCache}>
    
    {/* <EnquiryContextComponent> */}
      <MainLayout>
          <Component {...pageProps} />
        {/* <EnquiryModal/>   */}
      </MainLayout>
    {/* </EnquiryContextComponent> */}
    <ToastContainer/>
  </QueryClientProvider>
 
  </>
  )
}