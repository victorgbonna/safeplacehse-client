import {  useState } from "react";
import { API_ENDPOINTS, PAGE_ROUTES, commafy } from '@/configs';
import Link from 'next/link';
import Table from ".";
// import { ReadSuggestion, ContinueCancel } from "@/components/modal";
// import { useMutation } from "@tanstack/react-query";
import {ViewUserData } from "@/components/modal";
import moment from 'moment'

const UserTable = (
    {
        data, refetch, startIndex
}) => {
    const tableCols=['S/N','JOINED', 'NAME & EMAIL', 'FPL NAME & ID', 'PHONE', 'STATUS', 'ACTION']
    const [openModal, setOpenModal]=useState(null)
    const [gwList, setGwlList]= useState([])
    // const {NotifyError, NotifySuccess}= useToast()
    
    // const {deleteProtectedData,patchProtectedData}= useHttpServices()

    // const delFuncQuery= async()=>{    
    //     if(openModal?.type==="revoke"){
    //         return await patchProtectedData(
    //             {path:API_ENDPOINTS.REVOKE_USER,body:{userId:openModal._id}})    
    //     }
    //     return await deleteProtectedData(
    //         {path:API_ENDPOINTS.SUSPEND_USER,body:{userId:openModal._id}})
    // }
    
    // const {mutate:delFunc, isPending:delFuncLoading}=useMutation({
    //     mutationFn:delFuncQuery,
    //     onError:({error})=>{
    //         console.log({error})
    //         return NotifyError(error.message || 'Could not perform action')
    //     },
    //     onSuccess:({data:userData})=>{
    //       NotifySuccess(openModal?.type==="revoke"?'User is now back in the game':'You have suspended the user')
    //       setOpenModal(null)
    //       return refetch()h
          
    //     }
    //   })
    return (
        <>
        {/* {(openModal?.type==="delete"|| openModal?.type==="revoke")?
                <ContinueCancel
                    onClose={()=>setOpenModal(null)}
                    onNext={()=>delFunc()}
                    isLoading={delFuncLoading}
                    continueClass="bg-[#FF4A32] rounded-full"
                    html={
                        <div className="flex items-start monte gap-x-2">
                        
                        <p>{"Are you sure you want to "}{openModal?.type==="revoke"?"recall this user from suspension":"suspend this user?"}</p>
                        </div>}
                />:null
            } */}
        {/* {openModal?.type==="update"?
        <UpdateUserGW
            fId={openModal?.fantasy_id}
            userId={openModal?._id}
            current_gw={openModal?.current_gw}
            onClose={()=>setOpenModal(null)}
            onNext={(id)=>{
                setOpenModal(null)
                setGwlList([...gwList, id])
            }}
        />:null} */}
        {openModal?.type==="more"?
        <ViewUserData
            data={openModal}
            onClose={()=>setOpenModal(null)}
            onNext={(id)=>{
                setOpenModal(null)
            }}
        />:null}
        <section className="emptable overflow-x-auto z-[2]">
            
            <Table
                // onlyClass={true}
                className="mb-6 bg-dark-green"
                theadBg={'#1E5631'}
                th={<TableHead tableCols={tableCols}/>} 
                td={
                    <TableBody entries={data} 
                    setOpenModal={setOpenModal}
                    gwList={gwList}
                    startIndex={startIndex}
                />}
            /> 
        </section>
        </>
    )
}
const TableHead= ({tableCols}) =>{    
    return (
        <>
            {tableCols.map((col, index) => (
                <th className='py-4 text-white tablet:px-8' key={index} 
                    style={
                        col==="NAME & EMAIL"?{textAlign:"left", paddingLeft:"28px"}:
                        col==="ACTION"?{textAlign:"center"}:
                        {textAlign:"center"}
                        }
                    >
                    {col}
                </th>
            ))}
        </>
    );
};

const TableBody= ({entries, startIndex, setOpenModal, gwList }) =>{ 
    return (
        <>
            {entries.map(({ status, ...data},index)=>{
                return(
                <tr key={index} className="h-14 tablet:h-20 text-sm text-center text-[#414141]">
                    <td className="">
                        {startIndex+index+1}
                    </td> 
                    <td className="text-lef table:pl-5 ">
                        {/* <p className="text-xs text-[#727272]"> */}
                            {moment(data.createdAt).format('L')}
                        {/* </p> */}
                    </td>
                    <td className="pl-7 text-left">
                        <div>
                            <p className="text-[#3A71FF]">{data?.first_name+" "+data?.last_name}</p>
                            <p className="text-xs text-[#727272]">{data?.email}</p>
                        </div>
                        
                    </td> 
                    
                    <td>
                        <Link href="/" target="_blank" className="text-[#3A71FF]">
                            <p>{data?.fantasy_team_name}</p>        
                            <p className="text-xs text-[#727272]">{data?.fantasy_id}</p>
                        </Link>
                    </td> 
                    <td>
                        {data?.phone_number}
                    </td> 
                    
                    <td style={
                        data.isSuspended?{color:"#FF3D3D"}:
                        !data.isEmailVerified?{color:"#000000"}:
                        {color:"#00B900"}
                    }>
                        {data.isSuspended?"Suspended":!data.isEmailVerified?"Unverified":"Active"}
                    </td>
                
                    <td>
                        <div className="flex items-center justify-end pr-2 gap-x-4 monte">
                            <Link  href={PAGE_ROUTES.ONE_USER(data?._id)} target="_blank" className={'text-white monte text-xs rounded-full py-2 px-4 bg-[#0085FF]'}>
                                View
                            </Link>

                            <button style={{
                                color:"#0057FF", background:"rgba(0, 87, 255, 0.17)"
                            }} 
                                className={'text-white monte font-semibold text-xs rounded-full py-2 px-4 bg-[#0085FF]'}
                                onClick={()=>setOpenModal({
                                ...data, status, type:"more"
                            })}>
                                More Details
                            </button>
                            
                            {/* {( gwList.includes(data?._id))?
                                <p style={{
                                    background:"rgba(0, 188, 19, 0.17)", color:"#00BC13"
                                }} className={'text-white monte font-semibold text-xs rounded-full py-2 px-4 bg-[#0085FF]'} 
                                >GW UPDATED</p>:
                                <button style={{
                                    color:"#0057FF", background:"rgba(0, 87, 255, 0.17)"
                                }} 
                                onClick={()=>setOpenModal({
                                    ...data, status, type:"update"
                               })}
                                className={'text-white monte font-semibold text-xs rounded-full py-2 px-4 bg-[#0085FF]'} >UPDATE GW</button>
                            } */}
                            
                        </div>
                        
                    </td>
                </tr>
                )}
            )}
        </>
    );
};

// red - #FF4A32
// green- #20C905

// light-green -> rgba(32, 201, 5, 0.17)
// light-red -> rgba(255, 74, 50, 0.17)
export default UserTable
