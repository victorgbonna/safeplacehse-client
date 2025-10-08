import { baseURL, consolelog } from "@/configs";
import axios from "axios";
import {getCookie} from "cookies-next"

const useHttpServices = () => {

  const postData = async({path, body}) => {
    consolelog({path:`${baseURL}/${path}`,body})
    try {
      consolelog('yes')
      const {data} = await axios.post(`${baseURL}/${path}`, body);
      consolelog({data})
      return {data};

    } catch (e) {
      consolelog('erro here')
      consolelog(e?.response?.data?.error?.message);
      const error=e?.response?.data;
      throw error;
    } finally {
      
    }
  };
  const postDataWithoutBaseUrl = async ({path,body}) => {
    try {

      const { data } = await axios.post(`${path}`, body);
      consolelog({data})
      return {data};
    } catch (e) {
      consolelog(e?.response?.data?.error?.message);
      const error=e?.response?.data;
      throw error;
    } finally {
      
    }
  };
  const postProtectedData = async ({path, body={}, userType}) => {
    consolelog({path, body})
    const fanAdminToken= getCookie('fanAdminToken')
    const headers={
      authorization: `Bearer ${fanAdminToken}`,
    }
    try {
      
      const { data } = await axios.post(`${baseURL}/${path}`, body, {headers});
      consolelog(data.status);
      return {data}
    } catch (e) {
        consolelog(e?.response?.data?.error?.message);
        const error=e?.response?.data;
        consolelog(e)
        throw error;
    } finally {
      
      
    }
  };
  const putProtectedData = async ({path, body={}, userType}) => {
    consolelog({path})
    const fanAdminToken= getCookie('fanAdminToken')
    const headers={
      authorization: `Bearer ${fanAdminToken}`,
    }
    try {
;
      // const response=await axios.put(`${baseUrl}/bootcamps/edit/${btcId}`, formData,{headers})
      const { data } = await axios.put(`${baseURL}/${path}`, body, {headers});
      consolelog(data.status);
      return {data}
    } catch (e) {
        consolelog(e?.response?.data?.error?.message);
        const error=e?.response?.data;
        throw error;
    } finally {
      
      
    }
  };
  const patchProtectedData = async ({path, body={}, userType}) => {
    consolelog({path})
    const fanAdminToken= getCookie('fanAdminToken')
    const headers={
      authorization: `Bearer ${fanAdminToken}`,
    }
    try {

      // const response=await axios.put(`${baseUrl}/bootcamps/edit/${btcId}`, formData,{headers})
      const { data } = await axios.patch(`${baseURL}/${path}`, body, {headers});
      consolelog(data.status);
      return {data}
    } catch (e) {
        consolelog(e?.response?.data?.error?.message);
        const error=e?.response?.data;
        throw error;
    } finally {
      
      
    }
  };
  const deleteProtectedData = async ({path, body={}, userType}) => {
    consolelog({path})
    const fanAdminToken= getCookie('fanAdminToken')
    const headers={
      authorization: `Bearer ${fanAdminToken}`,
    }
    try {

      const { data } = await axios.delete(`${baseURL}/${path}`, {headers, data:body});
      consolelog(data.status);
      return {data}
    }  catch (e) {
      consolelog(e?.response?.data?.error?.message);
      const error=e?.response?.data;
      throw error;
    } finally {
      
      
    }
  };
  const getProtectedData = async ({path, userType}) => {
    consolelog({path})
    const fanAdminToken= getCookie('fanAdminToken')
    
    try {
      const {data}= await axios.get(`${baseURL}/${path}`, {
        headers: {
          authorization: `Bearer ${fanAdminToken}`,
        },
      });
      // console.log({data})
      return data;
    } catch (error) {
      consolelog({error})
      const e=error?.response?.data;
      throw e
    } finally {
    
    }
  };
  const getData = async ({path}) => {
    try {
      const { data } = await axios.get(`${baseURL}/${path}`);
      
      return data;
    } catch (e) {
      // consolelog(error?.response?.status);
      // consolelog(error?.response?.data?.error?.message);
      const error=e?.response?.data;
      throw error;
    } finally {
    }
  };
  return {
    postData,
    postProtectedData,
    putProtectedData,
    patchProtectedData,
    getProtectedData,
    deleteProtectedData,
    postDataWithoutBaseUrl,
    getData,
    //  parseCSVFile
  };
};

export default useHttpServices