const baseURL =
  process.env.NODE_ENV === "production"?
    "https://api.fanchallenger.com"
    // "https://fanchallenger-backend.onrender.com"
      // "http://localhost:5002"
    // :"http://192.168.153.36:5002";
    : "http://localhost:5000";
    // :"https://api.fanchallenger.com"
    // :"https://fanchallenger-backend.onrender.com"
    // :"https://primeage-etender-api.onrender.com/api/v1"



export default baseURL 