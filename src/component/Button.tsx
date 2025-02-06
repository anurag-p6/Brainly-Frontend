import { ReactElement } from "react";

interface ButtonProps {
  variant :"primary" | "secondary";
  text:String;
  startIcon?:ReactElement;
  fullWidth?:boolean;
  loading?:boolean;
  onClick?:() => void
}

const variantClasses = {
  "primary": "bg-purple-600 text-white",
  "secondary": "bg-purple-200 tsxt-purple-400"
}

const defaultstyling = "px-4 py-2 rounded-md font-light flex items-center"


export const Button = ({variant,text,startIcon,onClick,fullWidth}:ButtonProps) => {
  return <button onClick={onClick} className={ variantClasses[variant] + " " + defaultstyling + `${fullWidth? " w-full flex justify-center items-center":""}` }>
    {startIcon}
      <div className="pr-2"></div>
    {text}
  </button>
}