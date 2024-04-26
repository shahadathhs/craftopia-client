// Import images
import slide1 from '../assets/slider/slider1.jpg'
import slide2 from '../assets/slider/slider2.jpg'
import slide3 from '../assets/slider/slider3.jpg'
import slide4 from '../assets/slider/slider4.jpg'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Slider = () => {
  return (
    <div className='p-2'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation={true} 
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        loop={true}
      >
        {/* slider 1 */}
        <SwiperSlide>
          <div className="hero">
            <img 
            className='w-full h-[400px] lg:h-[500px] mx-auto rounded-xl' 
            src={slide1} 
            />
            <p className="hero-content max-w-md text-center font-bold text-xl text-violet-600 bg-white mx-4 rounded-xl">
            Unleash your creativity with our wide range of paper crafts and glass art supplies.
            </p>
          </div>
        </SwiperSlide>
       {/* slider 2 */}
       <SwiperSlide>
          <div className="hero">
            <img 
            className='w-full h-[400px] lg:h-[500px] mx-auto rounded-xl' 
            src={slide2} 
            />
            <p className="hero-content max-w-md text-center font-bold text-xl text-violet-600 bg-white mx-4 rounded-xl">
            Discover the joy of handmade creations with our expertly curated selection of crafting materials.
            </p>
          </div>
        </SwiperSlide>
        {/* slider 3 */}
        <SwiperSlide>
          <div className="hero">
            <img 
            className='w-full h-[400px] lg:h-[500px] mx-auto rounded-xl' 
            src={slide3} 
            />
            <p className="hero-content max-w-md text-center font-bold text-xl text-violet-600 bg-white mx-4 rounded-xl">
            From elegant card making to intricate glass painting, explore endless possibilities for artistic expression.
            </p>
          </div>
        </SwiperSlide>
        {/* slider 4 */}
        <SwiperSlide>
          <div className="hero">
            <img 
            className='w-full h-[400px] lg:h-[500px] mx-auto rounded-xl' 
            src={slide4} 
            />
            <p className="hero-content max-w-md text-center font-bold text-xl text-violet-600 bg-white mx-4 rounded-xl">
            Transform ordinary moments into extraordinary memories with our premium quality crafting supplies and expert guidance.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;