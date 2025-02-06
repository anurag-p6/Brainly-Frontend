import { DeleteIcon } from "../icons/DeleteIcon"
import { ShareIcon } from "../icons/ShareIcons"


interface CardType {
  title:string;
  link:string;
  type : "youtube" | "twitter"
}

export const Card = ({title,link,type}:CardType) => {
  return <div className="my-4 p-4 max-w-80 bg-white drop-shadow-sm border-gray-200 min-h-48 rounded-md border-2">
    <div className="flex justify-between items-center m-0">
      <div className="flex items-center justify-between " >
        <ShareIcon /> 
        <span className="px-2">{title}</span>
      </div>
      <div className="flex">
        <div className="cursor-pointer">
          <ShareIcon />
        </div>
        <div className="pl-4">
          <DeleteIcon />
        </div>
      </div>
    </div>
    <div className="pt-4">
      {type === "youtube" &&  <iframe className="w-full" src={link.replace("watch","embed").replace("?v=", "/")} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin">
        </iframe>}
     
      {type === "twitter" && <blockquote className="twitter-tweet">
        <a href={link.replace("x.com", "twitter.com")}></a> 
      </blockquote>}
      
    </div>
  </div>
}