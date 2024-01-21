import React from 'react';
import { Link } from 'react-router-dom';
import { LuInstagram } from "react-icons/lu";
import { SlSocialFacebook } from "react-icons/sl";
import { TfiTwitter } from "react-icons/tfi";
import '../Footer/Footer.css'
import img from '../../../resources/footerImg/banking.png'
const Footer = () => {

    return (
        <div className='footer-container'>
            <section className='bg-[#292929] w-full section1'>
                <footer className="footer  lg:grid lg:grid-cols-4 lg:gap-0   grid grid-cols-2 py-14 lg:px-24 bg-[#292929] text-[#A1A1A1]">
                    <nav>
                        <header className="font-bold text-[#FFFFFF] lg:text-xl">Customer Service</header>
                        <Link to='#' className="footer-link">Store Locator</Link>
                        <Link to='#' className="footer-link">Contact Us</Link>
                        <Link to='#' className="footer-link">Returns and Refunds</Link>
                        <br />
                        <header className='font-bold text-[#FFFFFF] lg:text-xl'>Opening Times</header>
                        <p className="">Monday - Friday: 9 am - 5 pm (UK time)</p>
                        <br />
                        <header className='font-bold text-[#FFFFFF] lg:text-xl'>Hotline</header>
                        <p className="">0800 02 48 55 8, 0770 86 86 86 1</p>
                    </nav>
                    <nav>
                        <header className="font-bold text-[#FFFFFF] lg:text-xl">Who We Are</header>
                        <Link to='#' className="footer-link">About us</Link>
                        <Link to='#' className="footer-link">Terms and Condition</Link>
                        <Link to='#' className="footer-link">Privacy and Policy</Link>
                        <br />
                        <header className='font-bold text-[#FFFFFF] lg:text-xl'>Our Address</header>
                        <Link to='#'><span>London, UK</span>
                        <br />
                            <span>Email: reconspeedy@gmail.com</span> <br />
                            Phone No: 08000248558, 07708686861</Link>
                    </nav>
                    <nav>
                        <header className="font-bold text-[#FFFFFF] text-xl">Product and Services</header>
                        <Link to='#' className="footer-link">MERCEDES Injector</Link>
                        <Link to='#' className="footer-link">BMW Injector</Link>
                        <Link to='#' className="footer-link">AUDI Injector</Link>
                        <Link to='#' className="footer-link">PEUGEOT Injector</Link>
                        <Link to='#' className="footer-link">FORD Injector</Link>
                        <Link to='#' className="footer-link">FIAT Injector</Link>
                    </nav>
                    <form>
                        <header className="font-bold text-[#FFFFFF] text-xl">Contact Us</header>
                        <p>Sign up for the latest
                            news and offers</p>
                        <fieldset className="  ">
                            <label className="">
                                <span className="label-text">Enter your email address</span>
                            </label>
                            <div className="">
                                <input type="text" placeholder="" className="input  " />
                                <br />
                                <button className="btn bg-[#C94A00] lg:my-3 text-base leading-5">Subscribe</button>
                            </div>
                        </fieldset>
                        <br />
                        
                        <header className='font-bold text-[#FFFFFF] text-xl'>Get Social</header>
                        <div className='flex justify-between gap-10'>
                            <Link to='#' ><LuInstagram /></Link>
                            <Link to='#' ><SlSocialFacebook /></Link>
                            <Link to='#' ><TfiTwitter /></Link>
                        </div>
                    </form>
                </footer>
       
            </section>
            <section className='bg-black section-2'>
            <footer className="footer px-24 py-7                                                                                                                                                                                                                                                                                                                                                                                                  bg-[#000000] text-[#3b3d3f] border-base-300">
  <aside className="items-center grid-flow-col">
    
    <p>© 2024 SpeedyRecon all over the world</p>
  </aside> 
  <nav className="md:place-self-center md:justify-self-end">
    <div className="grid grid-flow-col ">
      <img src={img} alt="" />
    </div>
  </nav>
</footer>
            </section>
        </div>
    );
};

export default Footer;