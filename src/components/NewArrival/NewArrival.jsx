import React from 'react'
import Container from '../Layout/Container'
import SectionHead from '../SectionHead/SectionHead'
import SectionSubHead from '../SectionHead/SectionSubHead'
import newArr01 from '../../assets/newArr01.png'
import newArr02 from '../../assets/newArr02.png'
import newArr03 from '../../assets/newArr03.png'
import newArr04 from '../../assets/newArr04.png'

const NewArrival = () => {
  return (
    <div>
      <Container>
       <div>
         <SectionHead>
          Featured
        </SectionHead>
        <SectionSubHead>
          New Arrival
        </SectionSubHead>
       </div>
       <div className='mt-15 flex gap-x-[30px] '>
          <div className='w-1/2'>
          <img className='w-full' src={newArr01} alt="" />
          </div>
          <div className='w-1/2 flex flex-col gap-y-[32px] '>
          <div>
            <img   className='w-full' src={newArr02} alt="" />
          </div>
          <div className='flex justify-between'>
          <div>
            <img src={newArr03} alt="" />
          </div>
          <div>
            <img src={newArr04} alt="" />
          </div>
          </div>
          
          </div>
       </div>
      </Container>
    </div>
  )
}

export default NewArrival
