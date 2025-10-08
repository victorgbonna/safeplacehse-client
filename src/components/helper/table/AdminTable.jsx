import { useEffect, useState } from "react";
import { API_ENDPOINTS } from '@/configs';
import Link from 'next/link';
import Table from ".";
import { useMutation } from "@tanstack/react-query";
import {ContinueCancel, DisplayAdmin } from "@/components/modal";

import moment from 'moment'
import { useHttpServices, useToast } from "@/hooks";


const AdminTable = (
    {
        users,
        refetch,
        type="sugg"
}) => {
    const tableCols= ['S/N','DATE & TIME', 'NAME & EMAIL', 'PHONE', 'ROLE','STATUS', 'ACTION']
    const [openModal, setOpenModal]=useState(null)
    const {NotifyError, NotifySuccess}= useToast()
    
    const {patchProtectedData}= useHttpServices()
    const [delList, setDelList]= useState([])

    const delAdminQuery= async()=>{
    
        return await patchProtectedData(
            {path:API_ENDPOINTS.SUSPEND_ADMIN,body:{adminId:openModal._id}})
    }
    
    const {mutate:delAdmin, isPending:delAdminLoading}=useMutation({
        mutationFn:delAdminQuery,
        onError:({error})=>{
            console.log({error})
            return NotifyError(error.message || 'Could not perform action')
        },
        onSuccess:({data:userData})=>{
          NotifySuccess('You have Suspended Admin')
          setDelList([...delList, openModal._id])
          return setOpenModal(null)
          
        }
      })
    
    return (
        <>
         {openModal?.type==="view"?
                <DisplayAdmin
                refetch={refetch}
                 header="Edit Admin"
                    defaultValues={openModal}
                    onClose={()=>setOpenModal(null)}
                />:null
            }
        {openModal?.type==="delete"?
                <ContinueCancel

                    onClose={()=>setOpenModal(null)}
                    onNext={()=>delAdmin()}
                    continueLabel="Suspend"
                    isLoading={delAdminLoading}
                    continueClass="bg-[#FF4A32] rounded-full"
                    html={
                        <div className="flex items-start monte gap-x-2">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM2 10C2 5.58 5.58 2 10 2C11.85 2 13.55 2.63 14.9 3.69L3.69 14.9C2.59163 13.5032 1.99623 11.7769 2 10ZM10 18C8.15 18 6.45 17.37 5.1 16.31L16.31 5.1C17.4084 6.49679 18.0038 8.22309 18 10C18 14.42 14.42 18 10 18Z" fill="#EF0107"/>
                        </svg>
                        <p>Are you sure you want to suspend this user?</p>
                        </div>}
                />:null
            }
        <section className="emptable overflow-x-auto z-[2]">
            
            <Table
                // onlyClass={true}
                className="mb-6 bg-dark-green"
                theadBg={'#1E5631'}
                th={<TableHead tableCols={tableCols}/>} 
                td={
                    <TableBody entries={users}  
                    setOpenModal={setOpenModal}
                    type={type} delList={delList}
                    // refetchEmpTable={refetchEmpTable} 
                    // refetchSummary={refetchSummary}
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
                <th className={`py-4 text-white tablet:px-6 ${col!=="S/N"?" tablet:min-w-[170px]":""}`} key={index} 
                    style={
                        col==="S/N"?{textAlign:"left", paddingLeft:"15px"}:
                        col==="ACTION"?{textAlign:"center", paddingRight:"15px"}:
                        {textAlign:"left"}
                        }
                    >
                    {col}
                </th>
            ))}
        </>
    );
};

const TableBody= ({entries, setOpenModal,type, delList}) =>{ 
    
    return (
        <>
           
            {entries.map(({status, ...admin},index)=>{
                return(
                <tr key={index}  className="h-14 tablet:h-20 text-sm text-center text-[#414141]">
                    <td className="text-left pl-5">
                        {index+1}
                    </td> 
                    <td className="text-left tablet:pl-5 ">
                        <div>
                            <p className="">{moment(admin.createdAt).format("MMM Do YYYY")}</p>
                            <p className="text-xs text-[#727272]">{moment(admin.createdAt).format('LT')}</p>
                        </div>
                    </td>
                    <td className="text-left tablet:pl-5 min-w-[180px]">
                        <div>
                            <p className="text-[#3A71FF]">{admin.first_name+" "+admin.last_name}</p>
                            <p className="text-xs text-[#727272]">{admin.email}</p>
                        </div>
                    </td> 
                    <td className="text-left tablet:pl-5">
                        {admin.phone}
                    </td> 
                    <td className="text-left tablet:pl-5">
                        {admin.page_access?.length===8?"ROOT ADMIN":"ADMIN"}
                    </td>
                    
                    <td className="text-left tablet:pl-5 capitalize" >
                        <div style={
                            status==="suspended" || delList.includes(admin._id)?{color:"#535353"}:
                            status==="active"?{color:"#00B900"}:
                            status==="deleted"?{color:"#FF3D3D"}:{
                                color:"#000000"
                            }
                        }>
                            {status}
                        </div>
                    </td>
                    <td >
                        <div className="flex items-center justify-end pr-2 gap-x-4">
                            <button onClick={()=>setOpenModal({
                                ...admin, type:"view"
                            })} className={'text-white monte text-xs rounded-full py-2 px-4 bg-[#0085FF]'}>Edit</button>

                            {!delList.includes(admin._id) && status ==="active"?
                            <>

                            <button onClick={()=>setOpenModal({type:"delete", _id:admin._id})}
                                 className={'text-white monte text-xs rounded-full py-2 px-4 bg-[#FF4A32]'}
                                >
                                    Suspend
                            </button>
                            </>:
                            <>
                            <p className="bg-gray-800 w-fit text-white monte text-xs rounded-full py-2 px-5">{'Revoke'}</p>
                            {/* <div className="w-fit invisible px-2 ">pddd</div> */}
                            </>
                            }
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
export default AdminTable
