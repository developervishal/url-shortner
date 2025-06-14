import { Loader2 } from 'lucide-react'
import React from 'react'

const Loading = () => {
  return (
    <div className='h-screen px-4 md:px-8 py-4 md:py-8 flex items-center justify-center'>
      <Loader2 className='animate-spin'/>
    </div>
  )
}

export default Loading