
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Slide from './Slide';

import bg1 from '../assets/bg1.jpg'
import bg2 from '../assets/bg2.jpg'
import bg3 from '../assets/bg3.jpg'

export default function Carousel() {
  return (
    <div className='container mx-auto'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <Slide image={bg1} text='Get something new'></Slide>
        </SwiperSlide>
        <SwiperSlide>
            <Slide image={bg2} text='Get something new'></Slide>
        </SwiperSlide>
        <SwiperSlide>
            <Slide image={bg3} text='Get something new'></Slide>
        </SwiperSlide>
        
        
      </Swiper>
    </div>
  );
}
