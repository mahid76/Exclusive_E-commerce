import React from 'react'
import AboutDetail01 from '../Svg/AboutDetail01'
import AboutDetail02 from '../Svg/AboutDetail02'
import AboutDetail03 from '../Svg/AboutDetail03'
import AboutDetail04 from '../Svg/AboutDetail04'

const AboutDetails = () => {
  const aboutDetails = [
    {
      image : <AboutDetail01 /> ,
      title:"10.5k ",
      description:"Sallers active our site",
    },
    {
      image :  <AboutDetail02 />  ,
      title:"33k",
      description:"Monthly Produduct Sale",
    }, 
    {
      image : <AboutDetail03 />   ,
      title:"45.5k",
      description:"Customer active in our site",
    },
    {
      image : <AboutDetail04 />   ,
      title:"25k",
      description:"Anual gross sale in our site",
    },
  ]
  return (
    <div className='py-[140px] '>
     
       <div className='pl-[120px] pr-[107px] '>
         <div className='flex justify-between gap-[30px] '>
          {aboutDetails.map((item)=>(
            <div className='w-[270px] text-center py-[30px] border border-black/30 rounded group hover:bg-primary' >
              <div className='flex justify-center'>{item.image}</div>
              <h3 className='font-secondary font-bold text-[32px] leading-[30px] group-hover:text-white text-black mt-6  mb-3'>{item.title}</h3>
              <p className='font-primary  group-hover:text-white leading-[24px] text-black '>{item.description}</p>
            </div>
          ))}
        </div>
       </div>
     
    </div>
  )
}

export default AboutDetails
