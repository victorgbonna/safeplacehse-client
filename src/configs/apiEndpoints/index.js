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

COURSES: [
  {
    img: "nebosh-igc.png",
    title: "NEBOSH International General Certificate (IGC)",
    desc: "A globally recognized safety qualification providing essential knowledge of health, safety, and risk management principles.",
    duration: "6–8 weeks",
    audience: ["Aspiring Safety Professionals", "HSE Officers", "Supervisors"],
    price: "",
    views: 0
  },
  {
    img: "nebosh-idip.png",
    title: "NEBOSH International Diploma (IDIP)",
    desc: "Advanced NEBOSH diploma for experienced safety practitioners focusing on higher-level health and safety management skills.",
    duration: "10–14 weeks",
    audience: ["Senior HSE Officers", "Safety Managers"],
    price: "",
    views: 0
  },
  {
    img: "nebosh-psm.png",
    title: "NEBOSH HSE Certificate in Process Safety Management (PSM)",
    desc: "Specialized NEBOSH qualification concentrating on major hazard and process safety risk management.",
    duration: "Varies",
    audience: ["Process Industry Professionals", "Safety Specialists"],
    price: "",
    views: 0
  },
  {
    img: "nebosh-emc.png",
    title: "NEBOSH Environmental Management Certificate (EMC)",
    desc: "NEBOSH course focused on environmental risk control, sustainability practices and ISO 14001 principles.",
    duration: "Varies",
    audience: ["Environmental Officers", "HSE Practitioners"],
    price: "",
    views: 0
  },
  {
    img: "nebosh-raw.png",
    title: "NEBOSH Risk Assessment at Work (RAW)",
    desc: "Practical NEBOSH award for improving risk assessment skills and workplace hazard recognition.",
    duration: "Varies",
    audience: ["Supervisors", "Team Leads"],
    price: "",
    views: 0
  },
  {
    img: "nebosh-hsw.png",
    title: "NEBOSH Health and Safety at Work Award (HSW)",
    desc: "Entry-level NEBOSH award introducing core health and safety basics for workplace safety culture.",
    duration: "Varies",
    audience: ["New Safety Practitioners", "Employees"],
    price: "",
    views: 0
  },
  {
    img: "nebosh-incident-investigation.png",
    title: "NEBOSH Introduction to Incident Investigation",
    desc: "Course designed to help learners investigate workplace incidents and apply corrective actions to prevent recurrence.",
    duration: "Varies",
    audience: ["Safety Officers", "Team Leads"],
    price: "",
    views: 0
  },
  {
    img: "nebosh-environmental-awareness.png",
    title: "NEBOSH Environmental Awareness",
    desc: "An introductory NEBOSH course focused on environmental risk management and sustainability in the workplace.",
    duration: "1 week",
    audience: ["Safety Officers", "Environmental Assistants"],
    price: "",
    views: 0
  },
  {
    img: "nebosh-working-with-wellbeing.png",
    title: "NEBOSH Working With Wellbeing",
    desc: "Course on wellbeing principles and creating healthier, more productive workplaces.",
    duration: "1 week",
    audience: ["HR Professionals", "Supervisors"],
    price: "",
    views: 0
  },
  {
    img: "iosh-managing-safely.png",
    title: "IOSH Managing Safely",
    desc: "Core IOSH safety leadership training for managers to understand risk and legal responsibilities.",
    duration: "3–5 days",
    audience: ["Managers", "Supervisors"],
    price: "",
    views: 0
  },
  {
    img: "iosh-level-3-certificate.png",
    title: "IOSH Level 3 Certificate",
    desc: "A formal IOSH Level 3 safety certificate covering broader safe working practices.",
    duration: "2 weeks",
    audience: ["Safety Practitioners", "Team Leads"],
    price: "",
    views: 0
  },
  {
    img: "iosh-level-6-diploma.png",
    title: "IOSH Level 6 Diploma – IOSH IDIP",
    desc: "Advanced IOSH Diploma for occupational health and safety professionals aiming for senior roles.",
    duration: "8–12 weeks",
    audience: ["HSE Managers", "Lead Auditors"],
    price: "",
    views: 0
  },
  {
    img: "proqual-nvq-assessing-vocational-achievement.png",
    title: "ProQual Level 3 NVQ Certificate in Assessing Vocational Achievement",
    desc: "NVQ qualification focused on assessing vocational achievements in workplace training.",
    duration: "Varies",
    audience: ["Assessors", "Trainers"],
    price: "",
    views: 0
  },
  {
    img: "proqual-nvq-environmental-management.png",
    title: "ProQual Level 3 NVQ Award in Environmental Management",
    desc: "NVQ award centered on environmental management principles for operational safety.",
    duration: "Varies",
    audience: ["Environmental Officers", "Safety Officers"],
    price: "",
    views: 0
  },
  {
    img: "proqual-nvq-occupational-health-safety.png",
    title: "ProQual Level 3 NVQ Certificate in Occupational Health and Safety",
    desc: "Practical NVQ safety certification focused on occupational OH&S standards.",
    duration: "Varies",
    audience: ["HSE Practitioners", "Safety Team Members"],
    price: "",
    views: 0
  }],

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

}

export default API_ENDPOINTS