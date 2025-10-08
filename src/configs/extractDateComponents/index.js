const extractDateComponents=(date)=> {
    // const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1; 
    const year = date.getFullYear();
  
    return `${year}/${month}/${day}`;
}
export default extractDateComponents;
