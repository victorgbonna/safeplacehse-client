import ModalLayout from "../modalLayout"

export default function Ok({onClose, text, html}) {
    return (
        <ModalLayout onClose={onClose}>
            <div 
                onClick={(e)=> e.stopPropagation()} 
                className="max-w-[300px] tablet:max-w-full bg-white rounded-md px-10 py-10 text-center w-fit">
                <div>
                    {
                        text?
                        <p>{text}</p>: 
                        <>
                        <div
                            dangerouslySetInnerHTML={{__html: html}}
                        />
                        </>
                    }
                </div>
                <div className="flex mt-10 align-center justify-center mt-10">
                    <button
                        onClick={()=>{
                            onClose()
                        }} 
                        className="bg-l-green text-white pl-3 pr-3 rounded-sm w-full py-2">OK</button>
                </div>
            </div>
        </ModalLayout>

    );
  }
  