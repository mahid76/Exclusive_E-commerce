
import React from 'react'

const PrimaryButton = ({children}) => {
  return (
    <div>
      <a href="#">
         <div className='bg-primary inline-block py-4 px-[48px] rounded '>
        <p className='font-primary font-medium text-base text-secondary'>{children}</p>
       </div>
      </a>
    </div>
  )
}

export default PrimaryButton
