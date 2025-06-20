import React from 'react'
import SectionHead from '../SectionHead/SectionHead'
import Container from "../Layout/Container";
import SectionSubHead from '../SectionHead/SectionSubHead';
import PhonesSvg from '../Svg/PhonesSvg'
import ComputersSvg from '../Svg/ComputersSvg'
import SmartWatchSvg from '../Svg/SmartWatchSvg'
import CameraSvg from '../Svg/CameraSvg'
import HeadPhonesSvg from '../Svg/HeadPhonesSvg'
import GamingSvg from '../Svg/GamingSvg'
import AlienSvg from '../Svg/AlienSvg'
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
