import { MainLayout } from '@/components'
// import { EnquiryModal } from '@/components/modal'
// import { EnquiryContextComponent } from '@/context'
import '@/styles/globals.css'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; 

import {
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

const queryClient = new QueryClient();
const queryCache = new QueryCache();

export default function App({ Component, pageProps }) {
  
  return(
    <>
    <div>
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