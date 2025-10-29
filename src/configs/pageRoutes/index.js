const PAGE_ROUTES = {
  HOME: "/",
  ABOUT: "/about-us",
  SERVICES: "/services",
  PROJECTS: "/projects",
  COURSES: "/courses",
  BLOGS: "/blogs",
  CONTACT: "/contact-us",

  A_BLOG:(id)=>{
    return '/blogs/hse/'+id
  },
  A_COMP_EDIT:(id)=>{
    return '/competition/edit/'+id
  },
  ONE_USER:(fId)=>{
    return '/users/p/'+fId
  }
  
};

export default PAGE_ROUTES