import React from 'react'
import aboutStory from "../../assets/aboutStory.png";

const AboutOurStory = () => {
  return (
    <div>
          <div className="max-w-[525px]">
            <h3 className="font-secondary text-[54px] leading-[64px] tracking-[6%] text-black font-semibold  ">
              Our Story
            </h3>
            <p className="mt-10 mb-6 font-primary leading-[26px] text-black ">Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. </p>
            <p className="font-primary leading-[26px] text-black ">Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</p>
          </div>
					<div className="absolute top-0 right-0">
						<img src={aboutStory} alt="" />
					</div>
				</div>
  )
}

export default AboutOurStory
