import Image from "next/image";

export default function ImageContainer({style={},src, imgClass="", className, alt="", parentColor="bg-transparent"}){
    return(
        <div style={style} className={className+ ' relative overflow-hidden '+parentColor}>
            <Image fill={true} priority={true} 
            
            className={"w-full h-full "+ imgClass}
                placeholder = 'empty'  src={src} alt={alt || src || 'icon'}
            />
            {/* <div className="shadow-md w-full h-full z-2 absolute"></div>
            <img src={src} alt={alt} className="w-full h-full absolute z-4 bg-inherit"/> */}
        </div>
    )
}
  