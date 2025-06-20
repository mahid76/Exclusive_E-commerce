import React from 'react'
import SectionHead from '../SectionHead/SectionHead'
import Container from "../Layout/Container";
import SectionSubHead from '../SectionHead/SectionSubHead';
import CategorySlider from '../Slider/CategorySlider';

const Category = () => {


  return (
    <div className='pt-[153px]   '>
       <Container>
        <SectionHead>
          Categories
        </SectionHead>
        <SectionSubHead>
          Browse By Category
        </SectionSubHead>
       
       <div>
        <CategorySlider />
       </div>
       <div className='w-full h-[1px] bg-black/30 mt-[95px] '></div>
       </Container>
    </div>
  )
}

export default Category
