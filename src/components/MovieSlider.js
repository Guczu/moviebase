import React from 'react';
import { useRef } from 'react';
import images from './images';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, EffectFade } from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

export default function MovieSlider() {

    return (
        <div className='movieslider--maincontainer'>
            <div className='movieslider--sectiontext'>
                <p className="movieslider--sectiontitle">POPULARNE</p> 
            </div>
            <Swiper
                modules={[Navigation, EffectFade]}
                navigation
                speed={400}
                slidesPerView={5}
                loop={true}
                spaceBetween={-50}
                className="movieslider--container"
            >
                <SwiperSlide className="movieslider--miniposter">
                    <div className='movieslider--topcontainer'>
                        <div className='movieslider--top'>#1</div>
                    </div>
                    <img src={images[0]}></img>
                </SwiperSlide>
                <SwiperSlide className="movieslider--miniposter">
                    <div className='movieslider--topcontainer'>
                        <div className='movieslider--top'>#2</div>
                    </div>
                    <img src={images[1]}></img>
                </SwiperSlide>
                <SwiperSlide className="movieslider--miniposter">
                    <div className='movieslider--topcontainer'>
                        <div className='movieslider--top'>#3</div>
                    </div>
                    <img src={images[2]}></img>
                </SwiperSlide>
                <SwiperSlide className="movieslider--miniposter">
                    <div className='movieslider--topcontainer'>
                        <div className='movieslider--top'>#4</div>
                    </div>
                    <img src={images[3]}></img>
                </SwiperSlide>
                <SwiperSlide className="movieslider--miniposter">
                    <div className='movieslider--topcontainer'>
                        <div className='movieslider--top'>#5</div>
                    </div>
                    <img src={images[4]}></img>
                </SwiperSlide>
                <SwiperSlide className="movieslider--miniposter">
                    <div className='movieslider--topcontainer'>
                        <div className='movieslider--top'>#6</div>
                    </div>
                    <img src={images[5]}></img>
                </SwiperSlide>
            </Swiper>
            <div className='movieslider--buttoncontainer'>
                <button className='movieslider--button'>
                    <p>
                        Sprawdź najpopularniejsze filmy
                    </p>
                </button>
            </div>
        </div>
    )
}

/*/
<div className="movieslider--posters">
                <div className="movieslider--miniposter">
                    <p className="movieslider--title">Title</p>
                </div>
                <div className="movieslider--miniposter">
                    <p className="movieslider--title">Title</p>
                </div>
                <div className="movieslider--miniposter">
                    <p className="movieslider--title">Title</p>
                </div>
                <div className="movieslider--miniposter">
                    <p className="movieslider--title">Title</p>
                </div>
                <div className="movieslider--miniposter">
                    <p className="movieslider--title">Title</p>
                </div>
            </div>
/*/
