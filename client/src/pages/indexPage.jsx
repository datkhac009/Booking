/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import './indexPage.scss';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './swiper.css'
// import 
// import required modules
import { Pagination, Navigation } from 'swiper/modules';

import { useRef } from 'react';

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
    ])

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
                            <div className='header__bar'>
                                Bar
                            </div>
                            <div className='header__logo'>
                                Logo
                            </div>
                            <div className='header__menu__list'>
                                <ul className='menu__list__product'>
                                    {listProducts.current.map((item, index) => {
                                        return (
                                            <li key={index}>
                                                <a href={item.href}>{item.name}</a>
                                            </li>
                                        )
                                    })}
                                    {/* <li>
                                        <a href='#'>Vé máy bay</a>
                                    </li>
                                    <li>
                                        <a href='#'>Du lịch</a>
                                    </li>
                                    <li>
                                        <a href='#'>Khách sạn</a>
                                    </li>
                                    <li>
                                        <a href='#'>Visa</a>
                                    </li>
                                    <li>
                                        <a href='#'>Combo</a>
                                    </li>
                                    <li>
                                        <a href='#'>Flash Sale</a>
                                    </li> */}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='header__banner'>
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={30}
                            loop={true}
                            pagination={{
                                clickable: true,
                            }}
                            navigation={true}
                            modules={[Pagination, Navigation]}
                            className="mySwiper"
                        >
                            
                            <SwiperSlide><img src='https://bizweb.dktcdn.net/100/438/408/files/anh-co-4-la-yody-vn.jpg?v=1683597022341' alt='Null'></img></SwiperSlide>
                            
                            {/* /src/assets/img/banner */}
                            <SwiperSlide><img src='/src/assets/img/banner1.png' alt='Null'></img></SwiperSlide>
                            <SwiperSlide><img src='/src/assets/img/banner2.png' alt='Null'></img></SwiperSlide>
                            <SwiperSlide><img src='/src/assets/img/banner3.png' alt='Null'></img></SwiperSlide>
                            <SwiperSlide><img src='/src/assets/img/banner4.png' alt='Null'></img></SwiperSlide>

                        </Swiper>
                    </div>
                </div>
                <div className='main'>
                    <div className='main__tour'>
                        <div className='main__items'>
                            <div className='item'>
                                <div className='item__img'>
                                    <img src='../img/items.jpg' alt='Null'></img>
                                    <p>00 ngày 00:00:00 - 9 chỗ</p>
                                </div>
                                <div className='item__country'>
                                    <p>Miền Bắc,Sapa</p>
                                </div>
                                <div className='item__content'>
                                    <p>Tour Sapa 3 ngày 2 đêm | Moana – Fansipan – Bản Cát Cát</p>
                                    <p>3 ngày 2 đêm</p>
                                    <p>Hà nội</p>
                                    <p>KH: Hằng ngày</p>
                                    <div className='item__price'>
                                        <p>2,760,000</p>
                                    </div>
                                </div>
                            </div>
                            <div className='item'>
                                <div className='item__img'>
                                    <img src='../img/items.jpg' alt='Null'></img>
                                    <p>00 ngày 00:00:00 - 9 chỗ</p>
                                </div>
                                <div className='item__country'>
                                    <p>Miền Bắc,Sapa</p>
                                </div>
                                <div className='item__content'>
                                    <p>Tour Sapa 3 ngày 2 đêm | Moana – Fansipan – Bản Cát Cát</p>
                                    <p>3 ngày 2 đêm</p>
                                    <p>Hà nội</p>
                                    <p>KH: Hằng ngày</p>
                                    <div className='item__price'>
                                        <p>2,760,000</p>
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
