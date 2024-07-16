import React from 'react'

const Loader = () => {
  return (
    <div className='flex items-center justify-center py-3 text-white'>
        <div className='animate-spin  rounded-full h-6 w-6  border-b-2  border-zinc-200' />

    </div>
  )
}

export default Loader