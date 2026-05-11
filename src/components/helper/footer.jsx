import Link from "next/link"
// import { useHttpServices, useToast } from '@/hooks';
import { PAGE_ROUTES, consolelog,API_ENDPOINTS } from '@/configs'
import { Fragment, useContext, useEffect, useState } from 'react'
import { useMutation } from '@tanstack/react-query';
import { iconSvgPath, ImageContainer } from "..";


export default function Footer() {
    const soc_links = [
        { icon: "insta", link: API_ENDPOINTS?.CONTACT?.INSTA_LINK },
        { icon: "fb", link: API_ENDPOINTS?.CONTACT?.FACEBOOK_LINK },
        { icon: "whatsapp", link: API_ENDPOINTS?.CONTACT?.WHATSAPP_LINK },
        { icon: "linkedin", link: API_ENDPOINTS?.CONTACT?.LINKEDIN_LINK },
    ];
    const [email, setEmail] = useState("");

    return (
        <footer className="px-[70px] tablet:px-10 tablet:py-10 tablet:mt-10 mt-[80px] tablet:mt-5 py-[40px] pb-10 bg-background border-t border-outline-variant/20 backdrop-blur-md">
            <div className="gap-x-[150px] tablet:gap-x-10 flex tablet:flex-col tablet:gap-y-10">
                <div className="max-w-[350px]">
                    <div className="flex items-end gap-x-2">
                        <ImageContainer src={'/images/safeplacehse_logo_2.png'} className={'w-[50px] h-[55px]'} alt='safeplace logo' />
                    </div>
                    <div className="flex items-center gap-6 mt-4">
                        {soc_links.map(({ icon, link }, ind) =>
                            <Link target="_blank" href={link || '/'} key={ind}>
                                <div>
                                    <ImageContainer src={iconSvgPath('socials/' + icon)} alt={icon}style={{
                                        filter: 'brightness(0%)'
                                    }} className="w-6 h-6 opacity-80 hover:opacity-100 transition" />
                                </div>
                            </Link>
                        )}
                    </div>
                </div>
                <div className="flex gap-x-10 tablet:flex-col tablet:gap-y-6">
                    <div>
                        <p className="text-lg font-[500] mb-4 text-on-background">Contact</p>
                        <div className="max-w-[300px] text-base space-y-2 text-on-background/80">
                            <p>Phone: <span className="font-medium">{API_ENDPOINTS?.CONTACT?.PHONE }</span></p>
                            <p>Email: <span className="font-medium">{API_ENDPOINTS?.CONTACT?.GMAIL ?? 'info.safeplacehse.com'}</span></p>
                        </div>
                    </div>
                </div>
                <div>
                    <p className="text-lg font-[500] mb-4 text-on-background">Quick Links</p>
                    <div className="text-base flex flex-col gap-y-2">
                        <Link href={PAGE_ROUTES.ABOUT}><p className="hover:underline">About Us</p></Link>
                        <Link href={PAGE_ROUTES.PROJECTS}><p className="hover:underline">Projects</p></Link>
                        <Link href={PAGE_ROUTES.CONTACT}><p className="hover:underline">Contact Us</p></Link>
                    </div>
                </div>
            </div>
            <hr className="mt-20 border-outline-variant/20" />
            <p className="text-center font-[600] text-sm pt-10 text-on-background/60">
                &copy; Copyright {new Date().getFullYear()} SafePlaceHSE. All rights reserved.
            </p>
        </footer>
    );
}