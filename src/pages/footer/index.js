import React from 'react';
import './style.scss';
import { InstagramIcon, TelegramIcon, FacebookIcon, YoutubeIcon, BehanceIcon } from '@icons/material';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Footer = () => {
    AOS.init();
    return (
        <div className='footer_section'>


            <div className='row w-100'>
                <div className='col'>
                    <div className='footer_header'>
                        <div class="main-container">
                            <img data-aos="fade-right" data-aos-duration="2000" className='footer_logo' src='./assets/img/logo.png' alt='logo' />
                            <h1 data-aos="fade-right" data-aos-duration="2000">Halollik biznesdan ustun</h1>
                            <ul className='footer_social_list'>
                                <li className='footer_title social_item'>
                                    <a href='#' data-aos="fade-right" data-aos-duration="2000">
                                        <InstagramIcon />
                                    </a>
                                </li>
                                <li className='social_item'>
                                    <a href='#' data-aos="fade-right" data-aos-duration="2000">
                                        <TelegramIcon />
                                    </a>
                                </li>
                                <li className='social_item'>
                                    <a href='#' data-aos="fade-right" data-aos-duration="2000">
                                        <FacebookIcon />
                                    </a>
                                </li>
                                <li className='social_item'>
                                    <a href='#' data-aos="fade-right" data-aos-duration="2000">
                                        <YoutubeIcon />
                                    </a>
                                </li>
                                <li className='social_item'>
                                    <a href='#' data-aos="fade-right" data-aos-duration="2000">
                                        <BehanceIcon />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className='footer_content'>
                <div class="main-container">
                    <div className='row w-100'>
                        <div className='col-6 col-md-4 col-lg-3'>
                            <ul className='footer_content_list'>
                                <li data-aos="fade-right" data-aos-duration="2000" className='footer_title footer_content_item'>
                                    Bosh sahifa
                                </li>
                                <li data-aos="fade-right" data-aos-duration="2000" className='footer_content_item content_link'>
                                    <a href='#'>Fakt sonlar</a>
                                </li>
                                <li data-aos="fade-right" data-aos-duration="2000" className='footer_content_item content_link'>
                                    <a href='#'>Portfolio</a>
                                </li>
                                <li data-aos="fade-right" data-aos-duration="2000" className='footer_content_item content_link'>
                                    <a href='#'>Xizmat turlari</a>
                                </li>
                                <li data-aos="fade-right" data-aos-duration="2000" className='footer_content_item content_link'>
                                    <a href='#'>Mijozlarimiz</a>
                                </li>
                            </ul>
                        </div>
                        <div className='col-6 col-md-4 col-lg-2'>
                            <ul className='footer_content_list'>
                                <li data-aos="fade-right" data-aos-duration="2000" className='footer_title footer_content_item'>
                                    Portfolio
                                </li>
                                <li data-aos="fade-right" data-aos-duration="2000" className='footer_content_item content_link'>
                                    <a href='#'>Brending</a>
                                </li>
                                <li data-aos="fade-right" data-aos-duration="2000" className='footer_content_item content_link'>
                                    <a href='#'>Qadoq dizayni</a>
                                </li>
                                <li data-aos="fade-right" data-aos-duration="2000" className='footer_content_item content_link'>
                                    <a href='#'>Vebsayt</a>
                                </li>
                                <li data-aos="fade-right" data-aos-duration="2000" className='footer_content_item content_link'>
                                    <a href='#'>UX/UI dizayn</a>
                                </li>
                                <li data-aos="fade-right" data-aos-duration="2000" className='footer_content_item content_link'>
                                    <a href='#'>CRM vs ERP tizimlar</a>
                                </li>
                            </ul>
                        </div>
                        <div className='col-6 col-md-4 col-lg-2'>
                            <ul className='footer_content_list'>
                                <li data-aos="fade-right" data-aos-duration="2000" className='footer_title footer_content_item'>
                                    Xizmatlar
                                </li>
                                <li data-aos="fade-right" data-aos-duration="2000" className='footer_content_item content_link'>
                                    <a href='#'>Logotip</a>
                                </li>
                                <li data-aos="fade-right" data-aos-duration="2000" className='footer_content_item content_link'>
                                    <a href='#'>UX/UI dizayn</a>
                                </li>
                                <li data-aos="fade-right" data-aos-duration="2000" className='footer_content_item content_link'>
                                    <a href='#'>Brending</a>
                                </li>
                                <li data-aos="fade-right" data-aos-duration="2000" className='footer_content_item content_link'>
                                    <a href='#'>Sayt yaratish</a>
                                </li>
                                <li data-aos="fade-right" data-aos-duration="2000" className='footer_content_item content_link'>
                                    <a href='#'>CRM vs ERP tizimlar</a>
                                </li>
                                <li data-aos="fade-right" data-aos-duration="2000" className='footer_content_item content_link'>
                                    <a href='#'>Qadoq dizayni</a>
                                </li>
                            </ul>
                        </div>
                        <div className='col-6 col-md-4 col-lg-2'>
                            <ul className='footer_content_list'>
                                <li data-aos="fade-right" data-aos-duration="2000" className='footer_title footer_content_item'>
                                    Blog
                                </li>
                                <li data-aos="fade-right" data-aos-duration="2000" className='footer_content_item content_link'>
                                    <a href='#'>Videolar</a>
                                </li>
                                <li data-aos="fade-right" data-aos-duration="2000" className='footer_content_item content_link'>
                                    <a href='#'>Maqolalar</a>
                                </li>
                            </ul>
                        </div>
                        <div className='col-6 col-md-4 col-lg-3'>
                            <ul className='footer_content_list'>
                                <li data-aos="fade-right" data-aos-duration="2000" className='footer_title footer_content_item'>
                                    Aloqa
                                </li>
                                <li data-aos="fade-right" data-aos-duration="2000" className='footer_content_item content_link'>
                                    <a href='#'>Telefon raqam</a>
                                </li>
                                <li data-aos="fade-right" data-aos-duration="2000" className='footer_content_item content_link'>
                                    <a href='#'>Elektron pochta</a>
                                </li>
                                <li data-aos="fade-right" data-aos-duration="2000" className='footer_content_item content_link'>
                                    <a href='#'>Manzil</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='footer_contact w-100'>
                    <div class="main-container">
                        <div className='row d-flex justify-content-between w-100' data-aos="fade-right" data-aos-duration="2000">
                            <div className='col-12 col-md-6 col-lg-3 mb-4 mb-lg-0'>
                                <h1>Kontaktlar</h1>
                            </div>
                            <div className='col-12 col-md-6 col-lg-3 mb-4 mb-lg-0'>
                                <h5>TELEFON RAQAM</h5>
                                <a href='tel: +998999943111'>+998 (99) 994-31-11</a>
                            </div>
                            <div className='col-12 col-md-6 col-lg-3 mb-4 mb-lg-0'>
                                <h5 >EMAIL</h5>
                                <a href="mailto:mountainitdesign@gmail.com">info@mount.uz</a>
                            </div>
                            <div className='col-12 col-md-6 col-lg-3 mb-4 mb-lg-0'>
                                <h5>MANZIL</h5>
                                <a href='#'>Mirobod tumani, Said Baraka ko'chasi 18/1</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='footer_footer'>
                    <div class="main-container">
                        <div className='row d-flex justify-content-center align-item-center w-100'>
                            <div className='col-12 col-sm-6'>
                                <p>© <span>Mountain</span> Barcha huquqlar himoyalangan</p>
                            </div>
                            <div className='col-12 col-sm-6'>
                                <div className='footer_footer_logo h-100'>
                                    <p className='p-0 m-0'>Powered by</p>
                                    <a href="https://mount.uz/uz">
                                        <img src="./assets/img/logo.png" alt="Logo Mountain" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
