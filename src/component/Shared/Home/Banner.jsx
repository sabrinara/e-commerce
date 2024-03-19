import { useRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Typewriter from 'typewriter-effect';
import { Link } from 'react-router-dom';
import { BsArrowUpRightCircle } from "react-icons/bs";
const Banner = () => {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
    return (
        <>
            <div className='flex flex-col md:flex-row justify-between items-center md:mx-20 p-20'>
                <div >
                    <h1  className= 'text-4xl text-center font-bold mb-4 text-red-600 '>Hi! <br /> Welcome to Compy!</h1>
                   <p className='text-2xl text-center font-bold my-4 text-cyan-600 '>
                    <Typewriter
                    
                        options={{
                            strings: ['Where you will find', 'the best products', 'for every occasion...'],
                            autoStart: true,
                            loop: true,
                            delay: 50,
                            className: 'text-4xl text-center font-bold my-10 text-cyan-600 '
                        }}
                    />
                   </p>
                   {/* explore more button */}
                   <div className='flex justify-between items-center my-10 gap-10'>
                   <p className='text-xl text-center font-bold my-4 text-cyan-900 '> Explore our all products</p>
                   <Link to="allProducts"><button className='px-3 py-2 bg-cyan-800 text-white rounded  '> <BsArrowUpRightCircle className='inline text-xl mr-2' />See More</button></Link>
                   </div>
                 
                    
                </div>
                <div className='w-full md:w-1/2 md:h-96'>
                    <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Autoplay, Pagination, Navigation]}
                        onAutoplayTimeLeft={onAutoplayTimeLeft}
                        className="mySwiper"
                    >
                        <SwiperSlide><img src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/0a340319370844e99645abc90091df96_9366/Terrex_Agravic_Tech_Pro_Trail_Running_Shoes_Black_FU7634_01_standard.jpg" className='w-40' alt="" /></SwiperSlide>
                        <SwiperSlide><img src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/c2ee4c27eba64258bcbaad5100e5d998_9366/Terrex_Trailmaker_Mid_COLD.RDY_Hiking_Shoes_Brown_FZ3370_01_standard.jpg" alt="" /></SwiperSlide>
                        <SwiperSlide><img src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/0a340319370844e99645abc90091df96_9366/Terrex_Agravic_Tech_Pro_Trail_Running_Shoes_Black_FU7634_01_standard.jpg" alt="" /></SwiperSlide>
                        <SwiperSlide><img src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/0a340319370844e99645abc90091df96_9366/Terrex_Agravic_Tech_Pro_Trail_Running_Shoes_Black_FU7634_01_standard.jpg" alt="" /></SwiperSlide>
                        <div className="autoplay-progress" slot="container-end">
                            <svg viewBox="0 0 48 48" ref={progressCircle}>
                                <circle cx="24" cy="24" r="20"></circle>
                            </svg>
                            <span ref={progressContent}></span>
                        </div>
                    </Swiper>
                </div>
            </div>

        </>
    );
}
export default Banner;