import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { heroImg } from '../assets/data';

const Hero = () => {
  return (
    <div className='pb-5 md:px-8 md:py-6'>
      <Carousel
  additionalTransfrom={0}
  arrows
  autoPlay
  autoPlaySpeed={3000}
  centerMode={false}
  className=""
  containerClass="container"
  dotListClass=""
  draggable
  focusOnSelect={false}
  infinite={true}
  itemClass=""
  keyBoardControl
  minimumTouchDrag={80}
  pauseOnHover={false}
  renderArrowsWhenDisabled={false}
  renderButtonGroupOutside={false}
  renderDotsOutside={false}
  responsive={{
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024
      },
      items: 1
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0
      },
      items: 1
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 464
      },
      items: 1
    }
  }}
  rewind={false}
  rewindWithAnimation={false}
  rtl={false}
  shouldResetAutoplay
  showDots
  sliderClass=""
  slidesToSlide={1}
  swipeable
  
>
  <img
    src={heroImg}
    className='h-[200px] md:h-[400px] rounded-lg'
    
  />
  <img
    src={heroImg}
    className='h-[200px] md:h-[400px] rounded-lg'
    
  /><img
    src={heroImg}
    className='h-[200px] md:h-[400px] rounded-lg'
    
  />
  
 
</Carousel>
    </div>
  )
}

export default Hero