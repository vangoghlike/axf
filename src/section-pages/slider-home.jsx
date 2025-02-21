import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from "react-router-dom";


const Slider = () => {
  return (
    <Swiper className="mainslider"
      // install Swiper modules
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      loop={true}
      navigation
      speed={1200}
      autoplay={{ delay: 3000 }}
      pagination={{
        clickable: false,
        renderBullet: function (index, className) {
          return `<span class="${className}">${index + 1} <span className="swiper-pagination-current">/ 2</span></span>`;
        },
      }}
      >
      <SwiperSlide>
        <div className="swiper-inner" style={{
                                              backgroundImage: `url("./img/slider/3.webp")`,
                                              width: '100%',
                                              height: '100%',
                                            }}>
            <div className="sw-caption">
                <div className="container">
                    <div className="row gx-5 align-items-center">
                        <div className="col-lg-8 mb-sm-30">
                            <div className="subtitle blink mb-4">Crypto Clan War</div>
                            <h1 className="slider-title text-uppercase mb-1">War and Conquer</h1>
                        </div>
                        <div className="col-lg-6">
                            <p className="slider-text">Command your AI Agent and dominate your enemies</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="phone_img">
                <img class="logo-main" src="./img/slide/phone1.png" alt=""/>
            </div> 
            <div className="sw-overlay"></div>
        </div> 
      </SwiperSlide>
      <SwiperSlide>
        <div className="swiper-inner" style={{
                                              backgroundImage: `url("./img/slider/4.webp")`,
                                              width: '100%',
                                              height: '100%',
                                            }}>
            <div className="sw-caption">
                <div className="container">
                    <div className="row gx-5 align-items-center">
                        <div className="col-lg-8 mb-sm-30">
                            <div className="subtitle blink mb-4">Drill 3D Puzzle</div>
                            <h1 className="slider-title text-uppercase mb-1">Beyound the limits</h1>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div class="phone_img">
                <img class="logo-main" src="./img/slide/phone2.png" alt=""/>
            </div>    
            <div className="sw-overlay"></div>
        </div>         
      </SwiperSlide>
      
      
    </Swiper>
  );
};
export default Slider;