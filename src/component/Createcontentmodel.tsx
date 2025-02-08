import { useRef,useState } from "react"
import { RemoveIcon } from "../icons/RemoveIcon"
import { Input } from "./Input"
import axios from "axios";
import { BACKEND_URL } from "../config";
import { Button } from "./Button";

export enum ContentType  {
   Youtube = "youtube",
   Twitter = "twitter"
}
//@ts-ignore   //controlled conponent
export const CreateContentModal= ({open,onClose}) => {
  const titleRef = useRef<HTMLInputElement>(null);
  const linkRef = useRef<HTMLInputElement>(null);
  const [type,setType] = useState(ContentType.Youtube);


  async function addContent() {
    const title = titleRef.current?.value;
    const link = linkRef.current?.value;

    
    await axios.post(`${BACKEND_URL}/api/v1/content`, {
      link,
      title,
      type
    },{
      headers :{
        "Authorization": localStorage.getItem("token")
      }
    })
    onClose();
  }


  return <div className="z-50">
      {open && <div className="w-screen h-screen items-center bg-black fixed top-0 left-0 bg-opacity-50 flex justify-center z-50">
           <div className="  bg-white p-10 justify-center rounded-xl ">
            <div className="flex justify-between items-center pb-10 font-sans text-[20px] font-semibold">
              <div>
                Add Memory
              </div>
              <div className=" cursor-pointer" onClick={onClose}> <RemoveIcon /> </div>
            </div>
            <div> 
              <Input ref={titleRef} placeholder="title" type="text" />
              <Input ref={linkRef} placeholder="link" type="link" />
            </div>
            <div className="flex justify-evenly pb-4">
              <Button onClick={() => {
                setType(ContentType.Youtube)
              }} text="Youtube" variant={ type === ContentType.Youtube? "primary":"secondary"}></Button>
              <Button onClick={() => {
                setType(ContentType.Twitter)}} text="Twitter" variant={ type === ContentType.Twitter? "primary":"secondary"}></Button>
            </div>
            <div className="justify-center flex">
              <button onClick={addContent} className="bg-gradient-to-br from-blue-500 to-green-500 py-2 px-4 rounded-md text-white hover:opacity-85 active:opacity-75 font-semibold">Submit</button>
            </div>
           </div>
      </div>
      }
  </div>
}

