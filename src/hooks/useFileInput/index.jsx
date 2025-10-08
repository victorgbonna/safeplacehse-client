import {useState, useRef} from 'react'
import { useHttpServices } from '..';
import { consolelog } from '@/configs';

const useFileInput = (len) => {
    const CLOUD_NAME = "dwnuecoee";
    const CLOUD_PRESETS = "user_lsm2w2n9";
    const [isLoadState, setIsLoadState] = useState(false);
    const [productPics, setProductPics] = useState(Array.from({length: len}, (_) => ""));
    const [productValues, setProductValues] = useState(Array.from({length: len}, (_) => ""));
    const [loadingPics, setLoadingPics] = useState({});
    const {postDataWithoutBaseUrl}= useHttpServices()
    const imageDiv = useRef(null);

    const previewPic = async (e, index) => {
        const reader = new FileReader();

        const selectedFile = e.target.files[0];
        consolelog({selectedFile})
        if(!selectedFile) return
        // consolelog({selectedFile})
        reader.onload = (readerEvent) => {
            const [newProductPics, newProductValues] = [productPics,productValues];
            consolelog({newProductPics, newProductValues})
            newProductPics[index] = readerEvent.target.result;
            newProductValues[index] = selectedFile;
            // consolelog({reader:readerEvent.target.result})
            consolelog({newProductValues})
            setProductPics(newProductPics);
            setProductValues([...newProductPics])

            setLoadingPics({ id: index, fileName: selectedFile.name });
        };
        if (selectedFile) {
            reader.readAsDataURL(selectedFile);
            setLoadingPics({});
        }
    };
    // "#productImage" + 
    const openPic = (picId) => {
        const div = imageDiv.current;
        const imageInp = div.querySelector(picId);
        consolelog({imageInp, picId})
        imageInp?.click();
    };
    const uploadImages = async () => {
        setIsLoadState(true)
        const productImgForm = new FormData();
    
        let imagesURLs = [];
        for (let i = 0; i < productPics.length; i++) {
          if(!productPics[i]) continue
          productImgForm.append(
            "file",
            productValues[i]
            // productFormRef.get("productImage" + (i + 1))
          );

          productImgForm.append("upload_preset", CLOUD_PRESETS);
    
          try{
            // const { data, error } = 
            const {data}=await postDataWithoutBaseUrl(
              `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
              productImgForm
            )
            imagesURLs.push({url:data.secure_url, width:data.width, height:data.height,index:i});
            // setIsLoadState(false)
          } catch(error){
            // setIsLoadState(false)
            return error.message || "Cloudinary not working";
          }
        }
        return { imagesURLs };
    };
    return {
        openPic, previewPic, 
        isLoadState, setIsLoadState,loadingPics,
        uploadImages, productPics, productValues,imageDiv
    };
};

export default useFileInput