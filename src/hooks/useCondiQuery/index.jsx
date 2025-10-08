import { useEffect, useState } from "react";

const useCondiQuery = () => {
  const [condiQuery, setCondiQuery] = useState({});

  const condiPush = ({ queryKey, queryVal }) => {
    // delete condiQuery.page
    const ex_condi_query = condiQuery
      // ...condiQuery,
      // ...(queryKey === "page" ? {} : { page: 1 }),
    // };

    let new_condi_query = {};
    
    // if (!queryVal) {
    //   delete ex_condi_query[queryKey];
    //   new_condi_query = ex_condi_query;
    // } else {
      new_condi_query = {
        ...ex_condi_query,
        [queryKey]: queryVal,
      };
    // }
    return setCondiQuery(new_condi_query);
  };
 const clearQueries = (except_field) => {
    if(!except_field){
      return setCondiQuery({});
    }
    const except_value=condiQuery[except_field]
    return setCondiQuery({[except_field]:except_value});
  };

  return {
    condiPush,
    condiQuery,
    clearQueries,
    setCondiQuery
  };
};

export default useCondiQuery