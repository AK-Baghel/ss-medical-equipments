import React from 'react'
import "./style.css"

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

function Carousel() {

    const data = [
        "https://e0.pxfuel.com/wallpapers/181/282/desktop-wallpaper-medical-and-background-doctor-medicine.jpg",
        "https://c1.wallpaperflare.com/preview/767/442/400/stethoscope-medical-health-doctor.jpg",
        "https://c1.wallpaperflare.com/preview/532/1002/497/doctor-surgeon-operation-instruments.jpg"
    ];

    return (
        <Swiper
            spaceBetween={0}
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
            className="mySwiper"
        >

            {
                data.map((item, id) => {
                    return (
                        <SwiperSlide key={id}><img className='new' src={item} alt="" /></SwiperSlide>
                    )
                })
            }

        </Swiper>
    )
}

export default Carousel
