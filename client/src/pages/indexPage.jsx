/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import './indexPage.scss';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './swiper.css'

import { Pagination, Navigation } from 'swiper/modules';

import { useRef } from 'react';
import { BsCalendar3, BsClockFill, BsFillGeoAltFill, BsList } from "react-icons/bs";
const indexPage = () => {

    const navbarList = useRef([
        { name: 'Khuyến mại', href: '#' },
        { name: 'Đặt chỗ của tôi', href: '#' },
        { name: 'Trung tâm hỗ trợ', href: '#' },
        { name: 'Hợp tác với chúng tôi', href: '#' },
        { name: 'App Vietnam Booking', href: '#' },
        { name: 'Tìm kiếm', href: '#' },
    ]);

    const listProducts = useRef([
        { name: 'Vé máy bay', href: '#' },
        { name: 'Du lịch', href: '#' },
        { name: 'Khách sạn', href: '#' },
        { name: 'Visa', href: '#' },
        { name: 'Combo', href: '#' },
        { name: 'Flash Sale', href: '#' },
    ]);

    // const listBannerImage = () => {
    //     for (let i = 0; i < 4; i++) {
    //         return (
    //             <SwiperSlide><img src={'https://source.unsplash.com/random/1920x540/?japan?' + i} alt='Null'></img></SwiperSlide>
    //         )
    //     }
    // }

    return (
        <>
            <div className='wrapper'>
                <div className='top__menu'>
                    <ul className='top__menu__list'>
                        {navbarList.current.map((item, index) => {
                            return (
                                <li key={index}>
                                    <a href={item.href}>{item.name}</a>
                                </li>
                            )
                        })}
                    </ul>

                    <div className='top__menu__login'>
                        <a href='#'>Đăng nhập</a>
                        <a href='#' className='text-[12px] text-[#0064d2] leading-[50px]'>Đăng ký</a>
                    </div>
                </div>
                <div className='header'>
                    <div className='header__menu__container'>
                        <div className='header__menu'>
                            <div className='header__bar text-white'>
                                <BsList className='w-auto h-8' />
                            </div>
                            <div className='header__logo text-white'>
                                <img src='https://1000logos.net/wp-content/uploads/2021/05/Booking.Com-logo.png' alt='Null' className='w-[110px] h-[50px]' />
                            </div>

                            <div className='header__menu__list ml-auto'>
                                <ul className='menu__list__product'>
                                    {listProducts.current.map((item, index) => {
                                        return (
                                            <li key={index}>
                                                <a href={item.href}>{item.name}</a>
                                            </li>
                                        )
                                    })}

                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className='header__banner mb-3 '>
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={0}
                            loop={true}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            pagination={{
                                dynamicBullets: true,
                                clickable: true,

                            }}
                            navigation={true}
                            modules={[Pagination, Navigation]}
                            className="mySwiper"
                        >
                            {/* /src/assets/img/banner */}

                            {/* loop one to four images with SwiperSlide */}
                            {Array.from(Array(4), (e, index) => {
                                return (
                                    <SwiperSlide key={index}>
                                        <img src={'https://source.unsplash.com/random/1920x340/?japan?' + index} alt='Null' />
                                    </SwiperSlide>
                                )
                            })}

                            {/* <SwiperSlide><img decoding='async' loading='lazy' width={1920} height={540} className='w-full h-auto' src='https://source.unsplash.com/random/1920x540/?japan?1' alt='Null'></img></SwiperSlide>
                            <SwiperSlide><img decoding='async' loading='lazy' width={1920} height={540} className='w-full h-auto' src='https://source.unsplash.com/random/1920x540/?japan?2' alt='Null'></img></SwiperSlide>
                            <SwiperSlide><img decoding='async' loading='lazy' width={1920} height={540} className='w-full h-auto' src='https://source.unsplash.com/random/1920x540/?japan?3' alt='Null'></img></SwiperSlide>
                            <SwiperSlide><img decoding='async' loading='lazy' width={1920} height={540} className='w-full h-auto' src='https://source.unsplash.com/random/1920x540/?japan?4' alt='Null'></img></SwiperSlide> */}

                        </Swiper>
                    </div>
                </div>
                <div className='main'>
                    <div className='main__tour'>
                        <div className='main__items'>
                            <div className='item'>
                                <div className='item__img'>
                                    <img src='https://source.unsplash.com/random/300x194/?Hanoi' alt='Null'></img>
                                    <h3>Tham quan Moana,Fansipan,Bản Cát Cát</h3>
                                    <p>00 ngày 00:00:00 - 9 chỗ</p>
                                </div>
                                <div className='item__country flex items-center gap-x-[5px]'>
                                    <BsFillGeoAltFill className='check' />
                                    <p>Miền Bắc,Sapa</p>
                                </div>
                                <div className='item__content'>
                                    <p>Tour Sapa 3 ngày 2 đêm | Moana – Fansipan – Bản Cát Cát</p>
                                    <div className='item__content__day flex items-center gap-x-[5px] py-1'>
                                        <BsClockFill />
                                        <p>3 ngày 2 đêm</p>
                                    </div>
                                    <div className='item__content__city flex items-center gap-x-[5px]'>
                                        <BsFillGeoAltFill />
                                        <p>Hà nội</p>
                                    </div>
                                    <div className='item__content__starttour flex items-center gap-x-[5px]'>
                                        <BsCalendar3 />
                                        <p>KH: Hằng ngày</p>
                                    </div>
                                    <div className='item__price'>
                                        <p>2,760,000 <sup>đ</sup></p>
                                    </div>
                                </div>
                            </div>
                            <div className='item'>
                                <div className='item__img'>
                                    <img src='https://source.unsplash.com/random/300x194/?Danang' alt='Null'></img>
                                    <h3>Tham quan Moana,Fansipan,Bản Cát Cát</h3>
                                    <p>00 ngày 00:00:00 - 9 chỗ</p>
                                </div>
                                <div className='item__country flex items-center gap-x-[5px]'>
                                    <BsFillGeoAltFill className='check' />
                                    <p>Miền Bắc,Sapa</p>
                                </div>
                                <div className='item__content'>
                                    <p>Tour Sapa 3 ngày 2 đêm | Moana – Fansipan – Bản Cát Cát</p>
                                    <div className='item__content__day flex items-center gap-x-[5px]'>
                                        <BsClockFill />
                                        <p>3 ngày 2 đêm</p>
                                    </div>
                                    <div className='item__content__city flex items-center gap-x-[5px]'>
                                        <BsFillGeoAltFill />
                                        <p>Hà nội</p>
                                    </div>
                                    <div className='item__content__starttour flex items-center gap-x-[5px]'>
                                        <BsCalendar3 />
                                        <p>KH: Hằng ngày</p>
                                    </div>
                                    <div className='item__price'>
                                        <p>2,760,000 <sup>đ</sup></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default indexPage;
