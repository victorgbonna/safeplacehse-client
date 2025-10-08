import {useContext, useState, useEffect} from 'react'
import { consolelog, API_ENDPOINTS } from "@/configs";
import { useMutation } from '@tanstack/react-query';
import { useHttpServices, useToast } from "@/hooks";
import { LoadButton } from '@/components';
import { setCookie } from 'cookies-next'
import { isNotEmail } from '@/configs/inputValidation';

export default function SignUp({onClose, onNext, extra, isPage=false, type="signup", gridLayout='space-y-5 '}) {
    const [loginData, setLoginData]= useState({})
    const {NotifyError, NotifySuccess}= useToast()
    const {postData}= useHttpServices()
    // const router=useRouter()
  
    const addUserQuery= async()=>{
        const {confirm_password,firstName, lastName, ...body}= loginData
        body.terms=true
        body.fullName=firstName+' '+lastName
        // NotifyError('uees')
      return await postData({path:API_ENDPOINTS.REGISTER,body})
    }
    
    const {mutate:registerUser, isPending:addUserLoading}=useMutation(
    {
        mutationFn: ()=>addUserQuery(),
        onError:({error})=>{
            //   consolelog({error:error.message})
            return NotifyError(error?.message || 'Could not register user')
        },
        onSuccess:({data:userData})=>{
            consolelog({userData})
            setLoginData({})
            setCookie('tenderToken', userData?.data?.token,{maxAge:60*60*24*13})
            NotifySuccess('Account created!')
            // onNext(userData?.data?.token)
            const {email, fullName}= userData?.data?.user
        onNext({token:userData?.data?.token, email, fullName})
        }
    })
    return (    
        <form>
            {
            isPage?null:
            <>  
            <h3 className="text-lg font-medium uppercase">Register</h3>
            <p className="text-gray-400 mb-2">Create your account</p>
            </>
            }
            <div className={gridLayout}>
                {[{
                    label:"First Name", name:"firstName",     
                },{
                    label:"Last Name", name:"lastName",  
                }, {
                    label:"Email", name:"email", 
                },{
                    label:"Phone Number", name:"phone",  
                },
                {
                label:"Password", name:"password",type:"password"  
                },{
                label:"Confirm Password", name:"confirm_password",type:"password"  
                }
                // ,
                // {
                //     label:"Company Name(optional)", name:"company"
                // }
            ].filter((x)=>(type==="edit" && x.type==="password")?false:(type==="edit-password" && x.type!=="password")?false:true)
                    .map(({label,name, type="text"},ind)=>
                    <div key={ind}>
                        <p className="text-gray-700 text-left">{label}</p>
                        <input  placeholder={label}
                        type={type} value={loginData[name] || ''}
                        className="text-sm px-2 py-2 w-full tablet:bg-transparent tablet:text-base border-b bd-green-real" 
                        onChange={(e)=>setLoginData({
                            ...loginData, [name]:e.target.value
                        })}/>
                    </div>
                )}
            </div>
            <div className="mt-3 justify-between items-center gap-3  flex">
                {/* {extra?<button onClick={()=>onClose()} className="bg-red-500 px-3 py-2 text-base rounded-md text-white">
                    Cancel
                </button>:null} */}
                <LoadButton 
                    isLoading={addUserLoading} 
                    disabled={
                        type==="signup"?(
                            !loginData.firstName || !loginData.lastName || isNotEmail(loginData.email) || 
                            !loginData.phone || !loginData.password || loginData.password!==loginData.confirm_password):
                        type==="edit"?(!loginData.firstName || !loginData.lastName || isNotEmail(loginData.email) || !loginData.phone):
                        type==="edit-password"?(loginData.password!==loginData.confirm_password):true
                    }
                    onClick={(e)=>{
                        e.preventDefault()
                        registerUser()
                    }} 
                    style={isPage?{
                        width:"fit-content"
                    }:{
                        width:"100%"
                    }}
                    className="bg-green-real tablet:text-lg px-6 text-base py-3 mt-4 rounded-md text-white w-full">
                    {type==="edit"?"Update":type==="edit-password"?"Change Password":"Signup"}
                </LoadButton>

            </div>
        </form>
    )
}