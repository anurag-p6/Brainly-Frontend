import { BrainIcon } from "../icons/BrainIcon"
import { TwitterIcon } from "../icons/TwitterIcon"
import { YoutubeIcon } from "../icons/YoutubeIcon"
import { SideBarContent } from "./SideBarContent"

export const SideBar = () => {
  return (
    <div className="h-screen w-72 bg-white border-r-2 border-gray-200 left-0 top-0 absolute">
      <div className='flex items-center py-4 px-3'>
              <BrainIcon />
              <span className='text-[25px] font-semibold '>Second Brain</span>
            </div>
            <div className="ml-4 flex mt-4 flex-col gap-2 ">
              <SideBarContent text="Twitter" icon={<TwitterIcon />}/>
              <SideBarContent text="Youtube" icon={<YoutubeIcon />}/>
            </div>
    </div>
  )
}