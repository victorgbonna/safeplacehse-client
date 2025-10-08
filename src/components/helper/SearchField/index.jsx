// import { Button } from "components/ui/button";
import { iconSvgPath } from "@/components";
import { useEffect, useState } from "react";
// import { iconSvgPath } from "utils/iconSvgPath";

export default function SearchField({
  parentClass = "flex border gap-x-1 bg-white items-center px-4 py-2 rounded-lg relative",
  inpClass = "",
  initialValue = "",
  value,
  placeholder,
  searchIconPath = "",
  onClick,onChange
}){
  const [searchQuery, setSearchQuery] = useState("");
  useEffect(() => {
    setSearchQuery(initialValue);
  }, [initialValue]);
  return (
    <div className={"relative monte " + parentClass}
        style={{
            boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)"

        }}

    >
      
      <input
        value={value!==null?value:searchQuery}
        onChange={onChange?(e)=>onChange(e.target.value):(e)=> setSearchQuery(e.target.value)}
        className={" w-[300px]" + inpClass}
        placeholder={placeholder}
        type="text"
        // style={{ outlineStyle: "none", width: "100%" }}
        onKeyDown={onChange?()=>null:(e) => {
          if (e.keyCode === 13) {
            console.log(e.type);
            return onClick(searchQuery);
            // searchParams.set("keyword", e.target.value)
            // setSearchParams(searchParams)
          }
          return;
        }}
      />
      {onChange?null:<img
        src={searchIconPath || iconSvgPath("search")}
        onClick={(e) => {
          onClick(searchQuery);
        }}
        alt="Search"
        className="cursor-pointer"
      />}
    </div>
  );
};
