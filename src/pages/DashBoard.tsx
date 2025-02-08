import { Button } from '../component/Button'
import { ShareIcon } from '../icons/ShareIcons'
import { AddContent } from '../icons/Addcontent'
import { Card } from '../component/Card'
import '../App.css'
import { CreateContentModal } from '../component/Createcontentmodel'
import { useState } from 'react'
import { SideBar } from '../component/SideBar'
import { useContent } from '../hooks/useContents'


export const DashBoard = () => {
  const contents = useContent() ;
  const [modalOpen, setModalOpen] = useState(false);
  return <div className='ml-72 min-h-screen border-2 bg-blue-100 bg-opacity-30'>
    <CreateContentModal open={modalOpen} onClose={() => {
      setModalOpen(false);
    }} />
    <div className='flex gap-4 justify-end p-4'>
      <Button variant="primary" text="Add content" onClick={() => {
        setModalOpen(true);
      }} startIcon={<AddContent />}>
      </Button>
      <Button variant="secondary" text="Share brain" startIcon={<ShareIcon />}>
      </Button>
    </div>
    <SideBar />

    <div className="grid grid-cols-3 gap-4">
      
        { contents.map(({type,link,title}) => <Card
        type={type} 
        link={link} 
        title={title} 
      />) }
    </div>

  </div>
}