import ModalLayout from "../modalLayout"

export default function ContinueCancel({onClose,isLoading=null, onNext,text,html, continueClass, cancelLabel="Cancel", continueLabel="Continue", extraClass=""}) {
    return (
        <ModalLayout onClose={onClose}>
            <div
                style={isLoading?{
                    opacity:'0.5'
                }:{

                }} 
                onClick={(e)=> e.stopPropagation()} 
                className={"monte bg-white relative rounded-md px-10 py-10 text-center w-fit text-sm"+extraClass}>
                <img src={'/svg/close.svg'} className="w-7 h-7 cursor-pointer absolute right-3 top-2" onClick={onClose}/>
                <div>
                    {html?html: <p className="text-semibold">{text}</p>}
                </div>
                <div className="flex mt-10 align-center gap-x-10 justify-between mt-10">
                    <button 
                        className="bg-white text-primary2 border pl-3 pr-3 pt-2 pb-2 rounded-sm w-full border-primary text-primary" 
                        onClick={onClose}>{cancelLabel}</button>
                    <button
                        disabled={isLoading}
                        onClick={()=>{
                            onNext()
                        }} 
                        className={" text-white pl-3 pr-3 w-full "+continueClass}>{continueLabel}</button>
                </div>
            </div>
        </ModalLayout>

    );
  }
  