import React from 'react'
import Container from "../Layout/Container";
import SectionSubHead from '../SectionHead/SectionSubHead';
import SectionHead from '../SectionHead/SectionHead';
import PrimaryButton from '../Button/PrimaryButton';

const BestSelling = () => {
  return (
    <div className='pt-[27px] pb-[122px]  '>
      <Container>
        <SectionHead>This Month</SectionHead>
        <div className='flex items-center justify-between'>
          <SectionSubHead>Best Selling Products</SectionSubHead>
          <PrimaryButton>
            View All
          </PrimaryButton>
        </div>
      </Container>



    </div>
  )
}

export default BestSelling
 