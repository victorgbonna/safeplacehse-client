import Loading from "../Loading";

export default function DataFetch({children,
    emptyComponent, 
    isError, errorMsg,
    loadingComponent=<Loading/>,
    isEmpty, isLoading}) {
    
    if(isLoading){
        return loadingComponent
    }
    if(isError){
        return (
            <div className="py-10 flex flex-col items-center justify-center font-semibold text-primary2 text-base ">
                <p>{errorMsg ||'Something went wrong. Please check network'}</p>            
            </div>
        )
    }
    if(isEmpty){
        return(
            <div className="py-10 flex flex-col items-center justify-center font-semibold text-primary2 text-base ">
                <p>{errorMsg ||'no data available'}</p>            
            </div>
        )
    }
    return (
        <>
        
            {children}
        </>
    );
}