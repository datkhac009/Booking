/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import './indexPage.scss';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './swiper.css'

import { Pagination, Navigation, FreeMode } from 'swiper/modules';

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
    const listBrand = useRef([
        { img: 'https://www.vietnambooking.com/wp-content/uploads/2019/08/top-20-famous-brand-2019.png', title: 'Giải thưởng', description: 'Top 20 thương hiệu nổi tiếng hàng đầu 2019' },
        { img: '	https://www.vietnambooking.com/wp-content/uploads/2019/05/01.png', title: 'Giải thưởng', description: 'Top 20 thương hiệu nổi tiếng hàng đầu 2019' },
        { img: '	https://www.vietnambooking.com/wp-content/uploads/2019/05/02.png', title: 'Giải thưởng', description: 'Top 20 thương hiệu nổi tiếng hàng đầu 2019' },
        { img: 'https://www.vietnambooking.com/wp-content/uploads/2019/05/03.png', title: 'Giải thưởng', description: 'Top 20 thương hiệu nổi tiếng hàng đầu 2019' },
        { img: '	https://www.vietnambooking.com/wp-content/uploads/2019/05/04.png', title: 'Giải thưởng', description: 'Top 20 thương hiệu nổi tiếng hàng đầu 2019' },
        { img: 'https://www.vietnambooking.com/wp-content/uploads/2019/05/05.png', title: 'Giải thưởng', description: 'Top 20 thương hiệu nổi tiếng hàng đầu 2019' },
        { img: 'https://www.vietnambooking.com/wp-content/uploads/2019/05/06.png', title: 'Giải thưởng', description: 'Top 20 thương hiệu nổi tiếng hàng đầu 2019' }

    ])

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
                        <h2>Tour giờ chốt</h2>
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
                    <div className='main_tourcombo'>
                        <h2>Combo Khách sạn + Vé máy bay ưu dãi</h2>
                        <div className='main__items__combo'>
                            <div className='item__combo'>
                                <div className='item__img'>
                                    <img src='https://source.unsplash.com/random/300x194/?Spain' alt='Null'></img>

                                </div>
                                <div className='item__title__combo'>
                                    <p>Combo vé máy bay và khách sạn Phú quốc</p>
                                    <div className='item__price__combo'>
                                        <p>Từ 299.000 VNĐ</p>
                                        <div className='item__btn'>
                                            <a href='#'>Chi tiết</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='item__combo'>
                                <div className='item__img'>
                                    <img src='https://source.unsplash.com/random/300x194/?Dubai' alt='Null'></img>

                                </div>
                                <div className='item__title__combo'>
                                    <p>Combo vé máy bay và khách sạn Phú quốc</p>
                                    <div className='item__price__combo'>
                                        <p>Từ 299.000 VNĐ</p>
                                        <div className='item__btn'>
                                            <a href='#'>Chi tiết</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='main__banner'>
                        <div className='content__app'>
                            <h3>Tải ngay ứng dụng</h3>
                            <h2>Vietnam Booking</h2>
                            <h4>Dịch vụ vé bay - khách sạn - du lịch hàng đầu Việt Nam. <br /> Mang cả thế giới nằm trọn trong tay!</h4>
                            <div className='link__app flex gap-3 my-4'>
                                <a href='#'>
                                    <img src='https://data.vietnambooking.com/common/icon/apps/icon_playstore.png' alt='Null' />
                                </a>
                                <a href='#'>
                                    <img src='https://data.vietnambooking.com/common/icon/apps/icon_appstore.png' alt='Null' />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='main__achievement'>
                        <div className='main__achievement__box'>
                            <h3 className='title'>Thành tựu & giải thưởng</h3>
                            <div className='type__channel'>
                                <Swiper slidesPerView={6}
                                    spaceBetween={30}
                                    freeMode={true}
                                    pagination={{
                                        clickable: true,
                                    }}
                                    modules={[FreeMode, Pagination]} className="mySwiper">
                                    {listBrand.current.map((item, index) => {
                                        return <div key={index}>
                                            <SwiperSlide>
                                                <div className='box flex flex-col items-center'>
                                                    <img src={item.img} />
                                                    <h3 className='my-2 font-bold' >{item.title}</h3>
                                                    <p className='text-[12px] text-[#797b7c] pb-10'>{item.description}</p>
                                                </div>
                                            </SwiperSlide>
                                        </div>
                                    })}
                                </Swiper>

                            </div>
                        </div>
                        <div className='main__achievement__box'>
                            <h3 className='title'>Vietnam Booking đã được nhắc đến trên</h3>
                            <div className='type__channel'>
                                <Swiper slidesPerView={6}
                                    spaceBetween={30}
                                    freeMode={true}
                                    pagination={{
                                        clickable: true,
                                    }}
                                    modules={[FreeMode, Pagination]} className="mySwiper">
                                    {listBrand.current.map((item, index) => {
                                        return <div key={index}>
                                            <SwiperSlide>
                                                <div className='box flex flex-col items-center'>
                                                    <img src={item.img} />
                                                </div>
                                            </SwiperSlide>
                                        </div>
                                    })}
                                </Swiper>

                            </div>
                        </div>
                        <div className='main__achievement__box'>
                            <h3 className='title'>Đối tác thanh toán</h3>
                            <div className='type__channel'>
                                <Swiper slidesPerView={6}
                                    spaceBetween={30}
                                    freeMode={true}
                                    pagination={{
                                        clickable: true,
                                    }}
                                    modules={[FreeMode, Pagination]} className="mySwiper">
                                    {listBrand.current.map((item, index) => {
                                        return <div key={index}>
                                            <SwiperSlide>
                                                <div className='box flex flex-col items-center'>
                                                    <img src={item.img} />
                                                </div>
                                            </SwiperSlide>
                                        </div>
                                    })}
                                </Swiper>

                            </div>
                        </div>
                        <div className='main__achievement__box'>
                            <h3 className='title'>Đối tác hàng không</h3>
                            <p>Quan hệ hợp tác với nhiều hãng hàng không trong khu vực và trên thế giới. <br />
                                                        Chúng tôi nỗ lực đáp ứng nhu cầu đa dạng của hành khách đi tới các địa điểm trên toàn cầu.</p>
                            <div className='type__channel'>
                                <Swiper slidesPerView={6}
                                    spaceBetween={30}
                                    freeMode={true}
                                    pagination={{
                                        clickable: true,
                                    }}
                                    modules={[FreeMode, Pagination]} className="mySwiper">
                                    {listBrand.current.map((item, index) => {
                                        return <div key={index}>
                                            <SwiperSlide>
                                                <div className='box flex flex-col items-center'>
                                                    <img src={item.img} />
                                                
                                                </div>
                                            </SwiperSlide>
                                        </div>
                                    })}
                                </Swiper>

                            </div>
                        </div>
                        <div className='main__achievement__box'>
                            <h3 className='title'>Đối tác khách sạn</h3>
                            <p>Quan hệ hợp tác với nhiều hãng hàng không trong khu vực và trên thế giới. <br />
                                                        Chúng tôi nỗ lực đáp ứng nhu cầu đa dạng của hành khách đi tới các địa điểm trên toàn cầu.</p>
                            <div className='type__channel'>
                                <Swiper slidesPerView={6}
                                    spaceBetween={30}
                                    freeMode={true}
                                    pagination={{
                                        clickable: true,
                                    }}
                                    modules={[FreeMode, Pagination]} className="mySwiper">
                                    {listBrand.current.map((item, index) => {
                                        return <div key={index}>
                                            <SwiperSlide>
                                                <div className='box flex flex-col items-center'>
                                                    <img src={item.img} />
                                                </div>
                                            </SwiperSlide>
                                        </div>
                                    })}
                                </Swiper>

                            </div>
                        </div>
                    </div>
                    <div className='main__promotion mt-6'>
                        <h2>KHUYỄN MÃI HOT THÁNG 9/2023</h2>
                    </div>
                </div>
            </div>
        </>
    );
}

export default indexPage;
