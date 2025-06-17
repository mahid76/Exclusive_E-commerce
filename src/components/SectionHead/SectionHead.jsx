import React from 'react'

const SectionHead = ({children}) => {
  return (
    <div className='flex items-center gap-x-4  '>
      <div className='w-5 h-10 rounded bg-primary '></div>
      <h3 className='font-primary font-semibold text-primary '>{children}</h3>
    </div>
  )
}

export default SectionHead
