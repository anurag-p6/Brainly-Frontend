import { ReactElement } from "react";

export const SideBarContent = ({text,icon}:{ 
  text: string;
  icon: ReactElement
}) => {
  return <div className="flex items-center gap-1 pl-4 py-2 hover:bg-violet-100 rounded-3xl font-normal text-[20px] w-52 font-sans">
      {icon}<span className="pl-2 text-gray-500">{text}</span>
    </div>
}