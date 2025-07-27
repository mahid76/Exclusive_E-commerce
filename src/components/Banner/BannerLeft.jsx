import React from 'react'

const BannerLeft = () => {
  const bannerCategories  = [
    {
      title:"Woman’s Fashion"
    },
    {
      title:"Men’s Fashion"
    },
    {
      title:"Electronics"
    },
    {
      title:"Home & Lifestyle"
    },
    {
      title:"Medicine"
    },
    {
      title:"Sports & Outdoor"
    },
    {
      title:"Baby’s & Toys"
    },
    {
      title:"Groceries & Pets"
    },
    {
      title:"Health & Beauty"
    },
  ]

  return (
    <div className=' '>
      <ul className='font-primary text-black flex flex-col gap-y-4'>
        {
        bannerCategories.map((item)=>(
          <li key={item.title}>{item.title}</li>
        ))
      }
      </ul>
    </div>
  )
}

export default BannerLeft
