const PAGE_ROUTES = {
  HOME: "/",
  ABOUT: "/about-us",
  SERVICES: "/about-us",
  PROJECTS: "/projects",
  COURSES: "/courses",
  BLOGS: "/blogs",
  CONTACT: "/contact-us",
  A_BLOG:(id)=>{
    return '/blogs/hse/'+id
  },
  CONTACT_LINK:{
    WHATSAPP_LINK:"https://wa.me/971592295379",
    PHONE:'+971592295379'
  },
  
};

export default PAGE_ROUTES