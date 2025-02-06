import { Button } from '../component/Button'
import { ShareIcon } from '../icons/ShareIcons'
import { AddContent } from '../icons/Addcontent'
import { Card } from '../component/Card'
import '../App.css'
import { CreateContentModal } from '../component/Createcontentmodel'
import { useState } from 'react'
import { SideBar } from '../component/SideBar'


export const DashBoard = () => {
  const [modalOpen, setModalOpen] = useState(false);
  return <div className='ml-72 min-h-screen bg-blue-100 bg-opacity-30'>
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

    <div className="flex gap-4 ml-4">
      <Card title="Latest Tweet " link="https://x.com/stoicannu/status/1884686733448786340" type='twitter' />
      <Card title="Python Learning video" link="https://www.youtube.com/watch?v=-6OTjB6e8RM" type="youtube" />
    </div>

  </div>
}