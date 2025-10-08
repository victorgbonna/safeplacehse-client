import {useContext, useState, useEffect} from 'react'
import { consolelog, API_ENDPOINTS } from "@/configs";
import { useMutation } from '@tanstack/react-query';
import { useHttpServices, useToast } from "@/hooks";
import { LoadButton } from '@/components';
import { setCookie } from 'cookies-next';
import { isNotEmail } from '@/configs/inputValidation';
// import { useMutation } from '@tanstack/react-query';

export default function SignIn({onClose,path=API_ENDPOINTS.LOGIN, onNext, extra, isPage=false}) {
    const [loginData, setLoginData]= useState({})

    const {NotifyError, NotifySuccess}= useToast()
    const {postData}= useHttpServices()
    // const router=useRouter()
    
    const addUserQuery= async()=>{
      return await postData({path,body:loginData})
    }
  
    const {mutate:registerUser, isPending:addUserLoading}=useMutation({
      mutationFn:addUserQuery,
      onError:({error})=>{
        //   consolelog({error})
          return NotifyError(error.message || 'Could not register user')
      },
      onSuccess:({data:userData})=>{
        consolelog({userData})
        setLoginData({})
        setCookie('tenderToken', userData?.data?.token,{maxAge:60*60*24*13})
        NotifySuccess('Logged In Successfully!')
        const {email, fullName}= userData?.data?.user
        onNext({token:userData?.data?.token, email, fullName})
      }
    })
    return (    
        <form>  
            {
            isPage?null:
            <>  
            <h3 className="text-lg font-medium uppercase">Signin</h3>
            <p className="text-gray-400 mb-2">Sign in to your account</p>
            </>
            }

            <div className="space-y-5">
                {[{
                    name:"email",label:"Email"
                },{
                    name:"password", label:"Password"
                }].map(({label,name},ind)=>
                    <div key={ind}>
                        <p className="text-gray-700 text-left">{label}</p>
                        <input  placeholder={label}
                        type={name} value={loginData[name] || ''}
                        className="text-sm px-2 py-2 tablet:text-base tablet:bg-transparent w-full border-b bd-green-real" 
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
                <LoadButton onClick={(e)=>{
                    e.preventDefault()
                    registerUser()
                }} 
                 isLoading={addUserLoading} 
                disabled={ 
                    !loginData.password || isNotEmail(loginData.email) 
                }
                className="bg-green-real tablet:text-lg px-6 text-base py-3 mt-4 rounded-md text-white w-full">
                    Sign In
                </LoadButton>

            </div>
        </form>
    )
}