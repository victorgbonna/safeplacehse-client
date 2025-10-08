// function isNumeric(str) {
//   return !isNaN(str) && !isNaN(parseInt(str))
// }
export const isNotInteger=(val)=>{
    if(!val) return true
    if(!+val) return true

    return false
}
export const isNotEmail=(email)=>{
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    // let regexEmail = /^\w+([-]?\w+)*@\w+([-]?\w+)*(\w{2,3})+$/;    
    
    if(!email){
        return true
    }else if(email.includes(' ')){
        return true
        // obj.email="Field should not contain whitespace(s)";
    }
    else if(!regexEmail.test(email)){
        return true
        // obj.email="Field is not a valid email address";
    }
    return false
}
export const isNotRequired=(data)=>{
    // let obj=errorObj
    if(!data){
        return true
        // obj[prop]="Field is required";
    }
    return false
}
// const isUrl=({url})=>{

// }
export const isNotEqualTo=(data1,data2)=>{
    // let obj=errorObj
    if(data1!==data2){
        // obj[prop]=message;
        return true
    }
    return false
    // return obj
}
// const isPassword=({password})=>{

// }
// const isBetween=({min, max, data, errorObj, prop})=>{
//     let obj=errorObj
//     if(data.length>min && data.length<max){
//         obj[prop]=`Field should be between ${min} and ${max} characters`;
//     }
//     return obj
// }
export const isLengthNotEqualTo=({len, data})=>{
    // let obj=errorObj
    if(data.length!==len){
        return true
        // obj[prop]=`Field should be ${len} characters`;
    }
    return false
}