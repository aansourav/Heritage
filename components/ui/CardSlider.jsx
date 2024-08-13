"use client";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Card from "./Card";

export default function CardSlider({ data }) {
    const swiperParams = {
        slidesPerView: 3,
        spaceBetween: 20,
        breakpoints: {
            1024: {
                slidesPerView: 3,
            },
            464: {
                slidesPerView: 2,
            },
            0: {
                slidesPerView: 1,
            },
        },
        navigation: {
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        loop: true,
        modules: [Navigation, Autoplay],
    };

    return (
        <div className="relative pb-20">
            <Swiper {...swiperParams}>
                {data.map((item, index) => (
                    <SwiperSlide key={index}>
                        <Card />
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="swiper-button-prev flex rounded-full w-16 h-10 absolute !top-36 after:hidden bg-[#5490CB] left-4 z-50 transform -translate-y-1/2 cursor-pointer">
                <div>
                    <MdKeyboardArrowLeft className="text-2xl text-white " />
                </div>
            </div>
            <div className="swiper-button-next absolute !top-36 rounded-full right-4 after:hidden z-50 bg-[#5490CB]  transform -translate-y-1/2 cursor-pointer">
                <div>
                    <MdKeyboardArrowRight className="text-2xl text-white" />
                </div>
            </div>
        </div>
    );
}
