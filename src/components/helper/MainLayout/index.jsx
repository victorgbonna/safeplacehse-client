import { use, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Footer, Nav } from "@/components";
import { Montserrat } from 'next/font/google'

// import {Alan} from 'next/font/google'
// import {Mon} from 'next/googlefont'
// import Nav from "../Nav";
const monte = Montserrat({ subsets: ['latin'], weight:['400','500','600','700','800','900'] });

export default function MainLayout({ children, isLoggedIn}) {
  const [scrolledPast, setScrolledPast] = useState(false);
  const [scrolledPastMobile, setScrolledPastMobile] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 0;
      setScrolledPast(scrolled);
      const oneVhInPixels = window.innerHeight / 100;

      const targetScrollYInVh = 50;
      const targetScrollYInPixels = targetScrollYInVh * oneVhInPixels;
      setScrolledPastMobile(window.scrollY >= targetScrollYInPixels)
    };
    
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); 
  const [activeNav, setActiveNav]= useState('')
  const router= useRouter()
   
  useEffect(() => {
    setActiveNav(router?.pathname)
  }, [router?.pathname])
  return (
      <div className={monte.className+"max-w-full text-black bg-lightgreen w-screen relative bg-[#f8faed]"}> 
        <Nav activeNav={activeNav} 
          scrolledPast={scrolledPast} 
          scrolledPastMobile={scrolledPastMobile}/>
        <div className="flex flex-col items-center">
        <main className={`max-w-[1700px] w-full`}
        style={{
          overflowX:'hidden'
        }}
        >
          {children}
        </main>
        </div>
        <Footer/>
      </div>
    );
  }

