/* eslint-disable no-unused-vars */
import React, { Component } from 'react';

import './indexPage.scss';
class indexPage extends Component {
    render() {
        return (
            <>
                <div className='wrapper'>
                    <div className='top__menu'>
                        <ul className='top__menu__list'>
                            <li>
                                <a href='#'>Khuyến mại</a>
                            </li>
                            <li>
                                <a href='#'>Đặt chỗ của tôi</a>

                            </li>
                            <li>
                                <a href='#'>Trung tâm hỗ trợ</a>
                            </li>
                            <li>
                                <a href='#'>Hợp tác với chúng tôi</a>
                            </li>
                            <li>
                                <a href='#'> App Vietnam Booking</a>
                            </li>
                            <li>
                                <a href='#'>Tìm kiếm</a>
                            </li>
                        </ul>
                        <div className='top__menu__login'>
                            <a href='#'>Đăng nhập</a>
                            <a href='#' className='text-[12px] text-[#0064d2] leading-[50px]'>Đăng ký</a>
                        </div>
                    </div>
                    <div className='header'>
                        <div className='header__menu'>
                            <div className='header__bar'>
                                Bar
                            </div>
                            <div className='header__logo'>
                                Logo
                            </div>
                            <div className='header__menu__list'>
                                <ul className='menu__list__product'>
                                    <li>
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
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default indexPage;