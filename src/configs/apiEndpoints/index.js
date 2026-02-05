const API_ENDPOINTS = {
  GOOGLE_SHEET_LINK:'https://script.google.com/macros/s/AKfycbyzbnj2F-hJWg6c-3i0zzoEo9IO2uREjV5M0r5rldB_gintRbTDVIIBHeSyeMKMcCR6Aw/exec',
  GOOGLE_SHEET_ID:'1n1F44RrxXW4OY-FEoQMwjkLQzGcRB1-Bi8eZin_mqeA',
  CERTIFICATIONS:[
    {label:'Nebosh IGC', img:'nebosh2.png' },
    {label:'ISO 45001 IRCA certified lead Auditor', img:'iso.png'}, 
    {label:'iosh diploma level 6', img:'iosh2.png'}
  ],
  BLOGS: [
  // {
  //   id: -14,
  //   title: "Building a Safer Workplace: Our HSE Commitment in Action.",
  //   text: "At SafeplaceHSE, safety is more than a policy, it's our culture. Through regular HSE trainings, safety drills, and compliance audits, we ensure every team member is equipped to work smart and safe on-site.",
  //   date: "02/10/2025",
  //   category: ["public"],
  //   type: "HSE update",
  //   link: "/blogs/hse/building-a-safer-workplace",
  //   src: "projects/white/izzy-on-white2.jpg"
  // },
  // {
  //   id: -18,
  //   title: "Environmental Management: ing Our Sites Clean and Sustainable.",
  //   text: "Beyond compliance, we are committed to environmental protection. Our recent environmental management campaign focused on proper waste disposal and eco-friendly practices across all project sites.",
  //   date: "25/07/2025",
  //   category: ["public"],
  //   type: "environmental update",
  //   link: "/blogs/hse/environmental-management",
  //   src: "conference/izzy-cyber-conference4.jpeg"
  // },
  {
    id: -15,
    title: "Fire Safety Awareness: Preparing Teams for Emergency Response.",
    text: "Our recent Fire Safety Awareness training empowered staff with the right knowledge to prevent, detect, and respond to fire emergencies. Every second counts, and we’re making each one matter.",
    date: "19/09/2025",
    category: ["public"],
    type: "HSE training",
    link: "fire-safety-awareness",
    src: "firesafety/evacuation_sign.jpg"
  },
  {
    id: -16,
    title: "Workplace Hazard Identification Exercise at SafeplaceHSE Sites.",
    text: "We carried out a proactive hazard identification exercise across our active sites to promote safety consciousness and reduce potential risks. Prevention remains our strongest defense.",
    date: "28/08/2025",
    category: ["public"],
    type: "HSE exercise",
    link: "workplace-hazard-identification",
    src: "projects/white/izzy-on-white3.jpg"
  },
  {
    id: -17,
    title: "First Aid & CPR Training for All Site Workers.",
    text: "In our continuous effort to maintain a safe and responsive environment, SafeplaceHSE organized a comprehensive First Aid and CPR training for all site personnel.",
    date: "12/08/2025",
    category: ["public"],
    type: "HSE training",
    link: "first-aid-cpr-training",
    src: "projects/white/izzy-on-white5.jpg"
  }
],

  SIDELINKS:[
    // {
    //   label:"Dashboard", value:"DASHBOARD",icon:"dashboard", notActive:true
    // },
    {
        label:"Users", value:"USERS",icon:"users", api_page_access:"user"
    },{
        label:"Competitions", value:"COMPS",icon:"cup", api_page_access:"comp"
    },{
        label:"Create Competition", value:"CREATE_COMP",icon:"create",api_page_access:"create_comp"
    },{
        label:"Notification", value:"NOTI",icon:"noti", api_page_access:"noti"
    },{
      label:"Requests", value:"REQ",icon:"requests", api_page_access:"requests"
    },{
      label:"Suggestion Box", value:"SUGG",icon:"sugg", api_page_access:"sugg"
    },{
      label:"Send Mail", value:"MAIL",icon:"mail", api_page_access:"mails"
    },{
      label:"Transactions", value:"TRANSC",icon:"transa", api_page_access:"transac"
    },{
      label:"Admins", value:"ADMINS",icon:"admin", api_page_access:"admins"
    }
  ],
  COMMUNITY:[
    {type:"whatsapp", link:"https://wa.me/971592295379"},
    {type:"telegram"},
    {type:"discord"},
    {type:"slack"}
  ],
  CONTACT:{
    WHATSAPP_LINK:"https://wa.me/971592295379",
    PHONE:'+971592295379',
    INSTA_LINK:"https://instagram.com",
    FACEBOOK_LINK:"https://facebook.com",
    LINKEDIN_LINK:"https://linkedin.com"
  },
  REGISTER:"api/admin/auth/create",
  LOGIN:"api/admin/auth/login",
  GET_ALL_ADMINS:'api/admin?limit=10',

  EDIT_ADMIN:'api/admin/edit',
  SUSPEND_ADMIN:'api/admin/suspend',
  DELETE_ADMIN:'aagepi/admin/delete',

  GET_ALL_TRANSACTIONS:"api/admin/transactions?limit=20",
  DELETE_TRANSACTION:"api/admin/transactions/delete",
  CONFIRM_TRANSACTION:"api/admin/transactions/confirm",

  
  GET_ALL_SUGGESTIONS:"api/admin/suggestion?limit=20",
  DELETE_SUGG:"api/admin/suggestion/delete",

  GET_ALL_REQUESTS:"api/admin/request?limit=20",
  DELETE_REQ:"api/admin/request/delete",
  FINALIZE_REQ:"api/admin/request/finalize",

  GET_ALL_USERS:"api/admin/user?limit=50",
  GET_USER_SUMMARY:"api/admin/user/summary",
  GET_USER_SHORT_INFO:({info,_id})=>{
    return "api/admin/user/get-one/"+_id+"/"+info
  },
  RESET_USER_POINTS:'api/admin/user/reset-points',
  UPDATE_USER_POINTS:"api/admin/user/update-points",
  UPDATE_USER_WALLET:"api/admin/user/update-user-wallet",
  SUSPEND_USER:"api/admin/user/delete",
  REVOKE_USER:"api/admin/user/revoke",

  DELETE_NOTIFICATION:'api/admin/contact/delete',
  READ_NOTIFICATION:"api/admin/contact/read",
  GET_ALL_NOTIFICATIONS:"api/admin/contact?limit=20",
  
  UPDATE_COMP_STATUS:(id)=>{
    return 'api/admin/competition/update-comp-status/'+id
  },
  END_COMPETITION:(id)=>{
    return 'api/admin/competition/end-comp/'+id
  },
  GET_ALL_COMPS:"api/admin/competition/get-all?limit=50",

  GET_COMPETITION_WINNERS:(id)=>{
    return 'api/admin/competition/'+id+'/winners'
  },
  PAYOUT_USER_IN_COMP:"api/admin/competition/manager/payout",

  SWITCH_TO_NEW_SEASON:'api/admin/user/toggle-new-season',
  GET_NOTIF_COUNT:'api/admin/notification-summary',

  READ_SUGGESTION:(id)=>{
    return 'api/admin/suggestion/read/'+id
  },
  GET_CURRENT_SEASON:'api/admin/user/season-info', 

  GET_ALL_USERS_WITHOUT_PAGINATION:'api/admin/user/get-all-users',
  GET_ALL_EMAILS:'api/admin/mail/get',
  SEND_EMAIL:'api/admin/mail/send'
}

export default API_ENDPOINTS