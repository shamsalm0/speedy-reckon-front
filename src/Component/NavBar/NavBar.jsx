import React, { useState } from 'react';
import { FaPhone } from "react-icons/fa";
import { IoIosArrowDown, IoIosSearch } from "react-icons/io";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";
import { IoIosMenu } from "react-icons/io";

import './navbar.css'
const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isCurrencyOpen, setIsCurrencyOpen] = useState(false);
    const [isUserOpen, setIsUserOpen] = useState(false);
    const [isCatOpen, setIsCatOpen] = useState(false);
    const [isItemOpen, setIsItemOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);
    const toggleDropdownLang = () => {
        setIsOpen(!isOpen);
        setIsCurrencyOpen(false)
    };

    const toggleDropdownCur = () => {
        setIsCurrencyOpen(!isCurrencyOpen)
        setIsOpen(false);
    };

    const toggleDropdownUser = () => {
        setIsUserOpen(!isUserOpen);
    }
    const toggleDropdownCat = () => {
        setIsCatOpen(!isCatOpen);
    }

    const toggleDropdownItem = () => {
        setIsItemOpen(!isItemOpen);
    }

    const [isToggled, setToggled] = useState(false);

    const handleToggle = () => {
        setToggled(!isToggled);
    };

    const handleSearch = () =>{
        setSearchOpen(!searchOpen)
    }

    return (
        <div >
            
            <div className='header-container' >
                <section>
                    <div className=" hidden  lg:flex lg:justify-between ">
                        <div className="hidden bg-[#f3f4f5] mx-[2px] lg:flex lg:gap-6 lg:items-center h-9 lg:flex-shrink ">
                            <div className="phone_top">
                                <a href="tel:08000248558">
                                    <div className='flex items-center gap-1 text-sm text-[#C94A00] font-sans' style={{ fontWeight: '700', fontFamily: 'Open Sans,sans-serif' }}>
                                        <FaPhone className='rotating-icon'></FaPhone>
                                        &nbsp;&nbsp;0800 02 48 55 8  <div className='bg-[#ddd] h-4 ml-3 ' style={{ width: '1px' }}></div>
                                    </div>
                                </a>
                            </div>
                            <div>
                                <div className="phone_top">
                                    <a href="tel:07708686861">
                                        <div className='flex items-center text-sm text-[#C94A00] font-sans' style={{ fontWeight: '700', fontFamily: 'Open Sans,sans-serif' }}>
                                            <FaPhone className='rotating-icon'></FaPhone>
                                            &nbsp;&nbsp;0770 86 86 86 1 <div className='bg-[#ddd] h-4 ml-3 ' style={{ width: '1px' }}></div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className='text-[#262626] text-sm' style={{ fontFamily: 'Open Sans,sans-serif' }}>
                                Mon - Thu 08:00 - 17:00, Fri 08:00 - 16:00
                            </div>
                        </div>
                        <div className="topbar--item topbar--right bg-[#f3f4f5] flex justify-end gap-3 items-center h-9 flex-shrink flex-grow" style={{ fontSize: '13.5px', fontFamily: 'Open Sans,sans-serif', color: '#666666' }}>
                            <div className="">
                                <p><a href="/terms-and-conditions">Terms &amp; Condition</a></p>
                            </div><div className='bg-[#ddd] h-4  ' style={{ width: '1px' }}></div>
                            <div className="">
                                <p><a href="/privacy-policy">Privacy Policy</a></p>
                            </div><div className='bg-[#ddd] h-4  ' style={{ width: '1px' }}></div>
                            <div onMouseEnter={toggleDropdownLang} onMouseLeave={toggleDropdownLang} className=" relative topbar-dropdown">
                                <div className="language list-dropdown flex items-center">
                                    <span className="current flex items-center gap-1">
                                        <img src="https://drfurithemes.com/farmart/wp-content/themes/farmart-child/images/flag-en.png" alt="English" />English
                                        <span className="farmart-svg-icon ">
                                            <IoIosArrowDown  ></IoIosArrowDown>
                                        </span>
                                    </span>
                                    {
                                        isOpen && (
                                            <div className='absolute mt-12 lg:mr-8 px-8 border shadow-lg py-1 bg-white'>
                                                <ul className='dropdown-content'>
                                                    <li className="0"><a className='flex items-center' href="http://en"><img src="https://drfurithemes.com/farmart/wp-content/themes/farmart-child/images/flag-en.png" alt="English" />English</a></li>
                                                </ul>
                                            </div>
                                        )
                                    }
                                </div>
                            </div> <div className='bg-[#ddd] h-4  ' style={{ width: '1px' }}></div>
                            <div onMouseEnter={toggleDropdownCur} onMouseLeave={toggleDropdownCur} className="widgets farmart-currency-widgets topbar-dropdown">
                                <div className="farmart-currency ">
                                    <div className="dropdown flex items-center">
                                        <span className="current flex items-center">
                                            <span className="selected">EUR</span>
                                            <span className="farmart-svg-icon ">
                                                <IoIosArrowDown></IoIosArrowDown>
                                            </span>
                                        </span>
                                        {
                                            isCurrencyOpen && (
                                                <div className='absolute mt-12   border shadow-lg  bg-white'>
                                                    <ul className=''>
                                                        <li className="active"><a href="#" className="flex items-center" data-currency="USD">€ EUR</a></li>
                                                    </ul>
                                                </div>
                                            )
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="top_header__row flex justify-around items-center pt-2" style={{

                    }}>
                        <div >

                            <label className='lg:hidden '>

                                <button onClick={handleToggle}><IoIosMenu /></button>
                            </label>
                            <div className={`toggle-content ${isToggled ? 'active' : ''}`}>
                                {/* Content to show/hide based on toggle state */}
                                {isToggled ? <div className="mobile-menu-body">
                                    <div className='flex justify-end mb-3'><button className='text-3xl' onClick={handleToggle}>X</button></div>
                                    <div className="mobile-menu__divider"></div>
                                    <div className="mobile-menu__indicators flex mx-auto ">
                                        <a className="mobile-menu__indicator mx-3" href="https://speedyrecon.com/customer/profile/dashboard">
                                            <span className="mobile-menu__indicator-icon mt-2">

                                                <svg xmlns="http://www.w3.org/2000/svg" width="29" height="27" viewBox="0 0 29 27" fill="none">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M25 12.5C25 19.4036 19.4036 25 12.5 25C5.59644 25 0 19.4036 0 12.5C0 5.59644 5.59644 0 12.5 0C19.4036 0 25 5.59644 25 12.5ZM16.5 8C16.5 10.2091 14.7091 12 12.5 12C10.2909 12 8.5 10.2091 8.5 8C8.5 5.79086 10.2909 4 12.5 4C14.7091 4 16.5 5.79086 16.5 8ZM19 18.5C19 18.669 18.9865 18.8358 18.9603 19H6.03967C6.01346 18.8358 6 18.669 6 18.5C6 16.0147 8.91015 14 12.5 14C16.0899 14 19 16.0147 19 18.5Z" fill="#292929"></path>
                                                </svg>
                                            </span>

                                        </a>
                                        <a className="mobile-menu__indicator mx-3" href="https://speedyrecon.com/cart">
                                            <span className="mobile-menu__indicator-icon mt-2 flex">

                                                <svg xmlns="http://www.w3.org/2000/svg" width="29" height="27" viewBox="0 0 29 27" fill="none">
                                                    <path d="M27.5379 6.32852L24.2336 15.8285C24.0937 16.2306 23.7147 16.5 23.2891 16.5H9.71094C9.28528 16.5 8.90628 16.2306 8.76644 15.8285L5.46209 6.32852C5.23606 5.67868 5.71856 5 6.40659 5H26.5934C27.2814 5 27.7639 5.67868 27.5379 6.32852Z" fill="#292929" stroke="#292929"></path>
                                                    <path d="M9.39844 16L8.70907 18.7575C8.55128 19.3886 9.02864 20 9.67921 20H24.8984" stroke="#292929" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                                    <path d="M1.20312 1.5H3.51012C3.92697 1.5 4.30009 1.75857 4.44645 2.14888L5.70312 5.5L7 9" stroke="#292929" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                                    <circle cx="9.54688" cy="24.75" r="2.25" fill="#292929"></circle>
                                                    <circle cx="23.5469" cy="24.75" r="2.25" fill="#292929"></circle>
                                                </svg>
                                                <span className="mobile-menu__indicator-counter text-white text-center items-center bg-red-600 rounded-xl h-6 w-6" id="mobile-sidebar-count">0</span>
                                            </span>

                                        </a>
                                    </div>
                                    <div className="mobile-menu__divider"></div>
                                    <ul className="mobile-menu__links mb-20">
                                        <li data-mobile-menu-item="">
                                            <a href="https://speedyrecon.com" className="">
                                                Home
                                            </a>
                                        </li>
                                        <li data-mobile-menu-item="">

                                            <a href="https://speedyrecon.com/brand_list/3" className="">
                                                Injector

                                            </a>
                                        </li>
                                        <li data-mobile-menu-item="">

                                            <a href="https://speedyrecon.com/brand_list/4" className="">
                                                Fuel Pump

                                            </a>
                                        </li>


                                        <li data-mobile-menu-item="">
                                            <a href="account-login.html" className="flex justify-between" data-mobile-menu-trigger="">
                                                Category
                                                <svg width="7" height="11">
                                                    <path d="M0.3,10.7L0.3,10.7c0.4,0.4,0.9,0.4,1.3,0L7,5.5L1.6,0.3C1.2-0.1,0.7,0,0.3,0.3l0,0c-0.4,0.4-0.4,1,0,1.3l4,3.9l-4,3.9
                    C-0.1,9.8-0.1,10.4,0.3,10.7z"></path>
                                                </svg>
                                            </a>
                                            <div className="mobile-menu__links-panel hidden" data-mobile-menu-panel="">
                                                <div className="mobile-menu__panel mobile-menu__panel--hidden">
                                                    <div className="mobile-menu__panel-header">
                                                        <button className="mobile-menu__panel-back" type="button">
                                                            <svg width="7" height="11">
                                                                <path d="M6.7,0.3L6.7,0.3c-0.4-0.4-0.9-0.4-1.3,0L0,5.5l5.4,5.2c0.4,0.4,0.9,0.3,1.3,0l0,0c0.4-0.4,0.4-1,0-1.3l-4-3.9l4-3.9C7.1,1.2,7.1,0.6,6.7,0.3z"></path>
                                                            </svg>
                                                        </button>
                                                        <div className="mobile-menu__panel-title">Category List</div>
                                                    </div>
                                                    <div className="mobile-menu__panel-body ">
                                                        <ul className="mobile-menu__links">
                                                            <li data-mobile-menu-item="">
                                                                <a href="https://speedyrecon.com/brand_list/3" className="" data-mobile-menu-trigger="">
                                                                    Injector
                                                                </a>
                                                            </li>
                                                            <li data-mobile-menu-item="">
                                                                <a href="https://speedyrecon.com/brand_list/4" className="" data-mobile-menu-trigger="">
                                                                    Fuel Pump
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>

                                        <li data-mobile-menu-item="">
                                            <a className="dropdown-item" href="https://speedyrecon.com/logout" >
                                                Logout
                                            </a>

                                            <form id="logout-form" action="https://speedyrecon.com/logout" method="POST" className="d-none">
                                                <input type="hidden" name="_token" value="Wv905ZC9mJsET0pTGzggcgZEvJf3D601B3rFZr4l" />                                </form>
                                        </li>

                                    </ul>
                                    <div className="mobile-menu__spring"></div>
                                    <div className="mobile-menu__divider"></div>
                                    <a className="mobile-menu__contacts text-center" href="">
                                        <span className="">
                                            <span style={{ display: "block", fontWeight: "700", fontSize: "15.4885px", lineHeight: "20px", letterSpacing: "0.430236px" }}>
                                                0800 02 48 55 8
                                            </span>
                                            <span style={{ display: "block", fontWeight: "700", fontSize: "15.4885px", lineHeight: "20px", letterSpacing: "0.430236px" }}>
                                                0770 86 86 86 1
                                            </span>
                                            <span style={{ display: "block", fontWeight: "700", fontSize: "15.4885px", lineHeight: "20px", letterSpacing: "0.430236px" }}>
                                                Mon - Thu 08:00 - 17:00
                                            </span>
                                            <span style={{ display: "block", fontWeight: "700", fontSize: "15.4885px", lineHeight: "20px", letterSpacing: "0.430236px" }}>
                                                Fri 08:00 - 16:00
                                            </span>
                                        </span>

                                    </a>
                                </div> : ''}
                            </div>
                        </div>  

                        <div className="top_header__logo">
                        {
                                            searchOpen && (
                                                <div>
                                                    <input type="search" className="p-2 absolute z-10 top-0 left-0  w-full  h-20 text-black " id="mobile_search_product" name="search"  placeholder="  Enter keyword or part number"></input>
                                                    <IoIosSearch className='block absolute z-10 right-20 top-8 lg:hidden md:hidden  sm:hidden text-2xl ml-20'/>
                                                    <p onClick={handleSearch} className='absolute z-10 right-8 top-8'>X</p>
                                                     </div>
                                            )
                                         }
                            <a href="https://speedyrecon.com" className="logo">

                                <div className="logo__image">

                                    <img className='w-28 h-22 lg:w-60 lg:h-22' src="https://speedyrecon.com/customer_frontend/speedyLogo.webp" alt="Logo" />

                                </div>
                            </a>
                        </div>

                        <div className="header__search">
                            <div className="search">
                                <form action="https://speedyrecon.com/get_all_products" className="search__body m-auto flex items-center" >
                                    <div className="relative">
                                        <input type="text" placeholder="&nbsp; &nbsp; Search Products" name='message' id='search_product' className="input  w-full rounded-full hidden lg:block focus:ring-0 focus:border-0 outline-none bg-[#ededed]" />
                                        <IoIosSearch className='search__button-icon hidden md:block sm:block lg:block absolute top-[25px] right-4 text-[#666666] transform -translate-y-1/2  text-xl' />
                                         <IoIosSearch onClick={handleSearch} className='block lg:hidden md:hidden sm:hidden text-2xl ml-20'/>
                                       
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div className="header__indicators flex items-center justify-start">
                            <div className="pr-3 ">
                                
                                <a href="https://speedyrecon.com/cart" className="indicator__button">

                                  
                                    <span className="indicator__counter count bg-red-400 w-2 h-2 p-0.5 mt-1 text-xs skew-x-6 text-white" id="count" style={{ fontSize: '10px' }}>
                                        0
                                    </span>
                                    <FiShoppingCart className='mb-4 h-8 w-8' />

                                </a>
                            </div>
                            <div className="indicator indicator--trigger--click header-element--account">
                                <button onClick={toggleDropdownUser} className="indicator__button" >
                                    <span className="indicator__icon">
                                        <FaRegUser className='w-8 h-8 hidden lg:block'></FaRegUser>
                                    </span>
                                </button>
                                {
                                    isUserOpen && (
                                        <div className="indicator__content" style={{ position: 'absolute', zIndex: '1', right: '20px', top: '60px', backgroundColor: 'white', width: '280px', height: '305px' }}>
                                            <div className="account-menu">


                                                <form className="account-menu__form" method="POST" action="https://speedyrecon.com/login"><input type="hidden" name="_token" value="1zQ7rRgWoVJoHeJzviTQ04tCdlWYQFbxuN4jpSMZ" />                                    <div className="account-menu__form-title">
                                                    Log In to Your Account
                                                </div>
                                                    <div className="form-group">
                                                        <label className="sr-only">Email address</label>
                                                        <input id="header-signin-email" type="email" className="rounded-pill form-control form-control-sm " placeholder="Email address" name="email" value="" required="" />
                                                    </div>
                                                    <div className="form-group">
                                                        <label className="sr-only">Password</label>
                                                        <div className="account-menu__form-forgot">
                                                            <input id="header-signin-password" type="password" className="rounded-pill form-control form-control-sm " placeholder="Password" name="password" required="" />
                                                        </div>
                                                    </div>
                                                    <div className="form-group account-menu__form-button">
                                                        <button type="submit" className="rounded-pill btn btn-primary btn-sm">Login</button>
                                                    </div>
                                                    <div className="account-menu__form-link">
                                                        <a className="nav-link" href=" https://speedyrecon.com/register ">Create An Account</a>
                                                    </div>
                                                </form>


                                            </div>
                                        </div>

                                    )
                                }


                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="header__navbar lg:flex justify-start hidden" style={{ background: "#FF7F3C", color: "#ffff", marginTop: "80px", height: "47px" }}>
                        <div className="header__navbar-departments ">
                            <div className="departments ">
                                <div className="dropdown dropdown-bottom main-menu_item ">
                                    <div tabIndex={0} onClick={toggleDropdownCat} role="button" className="main-menu__link text-[13px]  font-bold  text-white m-1 flex gap-6 px-10 items-center hover:bg-black h-8" style={{fontFamily:'Proxima Nova', fontStyle:'none'}}>
                                    <span className="departments__button-icon ">
                                        <svg className='text-white' width="16px" height="12px" style={{color:'white'}}>
                                            <path style={{fill:'white'}} d="M0,7L0,5L16,5L16,7L0,7ZM0,0L16,0L16,2L0,2L0,0ZM12,12L0,12L0,10L12,10L12,12Z"></path>
                                        </svg>
                                    </span> CATEGORY
                                    <svg width="9px" height="6px">
                                            <path style={{fill:'white'}} d="M0.2,0.4c0.4-0.4,1-0.5,1.4-0.1l2.9,3l2.9-3c0.4-0.4,1.1-0.4,1.4,0.1c0.3,0.4,0.3,0.9-0.1,1.3L4.5,6L0.3,1.6C-0.1,1.3-0.1,0.7,0.2,0.4z"></path>
                                        </svg>
                                    </div>
                                   {
                                    isCatOpen && (
                                        
                                        <ul onMouseEnter={toggleDropdownItem} onMouseLeave={toggleDropdownItem} className='ml-8'>
                                       
                                     <div className='text-black'>
                                     <ul tabIndex={0} className="dropdown-content z-[4] menu p-2 text-[13px] font-medium shadow bg-base-100 rounded-box w-52 flex justify-between border-r-2">
                                     <li>    <a href="https://speedyrecon.com/#" className="departments__item-link  ">
                                                                    <div className='flex justify-between gap-8 items-center w-40'>
                                                                        <div>
                                                                            <p>INJECTOR</p>
                                                                        </div>
                                                                        <div>
                                                                            <span className="departments__item-arrow"><svg width="7" height="11">
                                                                                <path d="M0.3,10.7L0.3,10.7c0.4,0.4,0.9,0.4,1.3,0L7,5.5L1.6,0.3C1.2-0.1,0.7,0,0.3,0.3l0,0c-0.4,0.4-0.4,1,0,1.3l4,3.9l-4,3.9
                    C-0.1,9.8-0.1,10.4,0.3,10.7z"></path>
                                                                            </svg>
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </a></li>
                                        <li>   <a href="https://speedyrecon.com/#" className="departments__item-link  ">
                                                                    <div className='flex justify-between items-center w-40'>
                                                                        <div>
                                                                            <p>FUEL PUMP</p>
                                                                        </div>
                                                                        <div>
                                                                            <span className="departments__item-arrow"><svg width="7" height="11">
                                                                                <path d="M0.3,10.7L0.3,10.7c0.4,0.4,0.9,0.4,1.3,0L7,5.5L1.6,0.3C1.2-0.1,0.7,0,0.3,0.3l0,0c-0.4,0.4-0.4,1,0,1.3l4,3.9l-4,3.9
                    C-0.1,9.8-0.1,10.4,0.3,10.7z"></path>
                                                                            </svg>
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </a></li>
                                     </ul>
                                     </div>
                                                                
                                                                

                                                <ul className="departments__list ml-36" style={{ position: 'absolute', zIndex: '4', backgroundColor: 'white',left:'95px' }}>
                                                
                                                    <li  className="  text-black  flex ">
                                                       

                                                        {
                                                            isItemOpen && (
                                                                <div className=" shadow-md">
                                                                    <div className="">
                                                                        <div className="">

                                                                        </div>
                                                                        <div className="row grid grid-cols-5 font-[500] mt-5 s" style={{ gap: "12px 0", marginLeft: '20px', width: '1000px', }}>
                                                                            <div className="col-1of5">
                                                                                <ul className="">

                                                                                    <li className="">
                                                                                        <a className="" href="https://speedyrecon.com/model_list/by_brand/3/MERCEDES">MERCEDES</a>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                            <div className="col-1of5">
                                                                                <ul className="">

                                                                                    <li className="">
                                                                                        <a className="" href="https://speedyrecon.com/model_list/by_brand/3/BMW">BMW</a>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                            <div className="col-1of5">
                                                                                <ul className="">

                                                                                    <li className="">
                                                                                        <a className="" href="https://speedyrecon.com/model_list/by_brand/3/AUDI">AUDI</a>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                            <div className="col-1of5">
                                                                                <ul className="">

                                                                                    <li className="">
                                                                                        <a className="" href="https://speedyrecon.com/model_list/by_brand/3/PEUGEOT">PEUGEOT</a>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                            <div className="col-1of5">
                                                                                <ul className="">

                                                                                    <li className="">
                                                                                        <a className="" href="https://speedyrecon.com/model_list/by_brand/3/FORD">FORD</a>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                            <div className="col-1of5">
                                                                                <ul className="">

                                                                                    <li className="">
                                                                                        <a className="" href="https://speedyrecon.com/model_list/by_brand/3/FIAT">FIAT</a>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                            <div className="col-1of5">
                                                                                <ul className="">

                                                                                    <li className="">
                                                                                        <a className="" href="https://speedyrecon.com/model_list/by_brand/3/MAZDA">MAZDA</a>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                            <div className="col-1of5">
                                                                                <ul className="">

                                                                                    <li className="">
                                                                                        <a className="" href="https://speedyrecon.com/model_list/by_brand/3/RENAULT">RENAULT</a>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                            <div className="col-1of5">
                                                                                <ul className="">

                                                                                    <li className="">
                                                                                        <a className="" href="https://speedyrecon.com/model_list/by_brand/3/JEEP">JEEP</a>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                            <div className="col-1of5">
                                                                                <ul className="">

                                                                                    <li className="">
                                                                                        <a className="" href="https://speedyrecon.com/model_list/by_brand/3/LAND%20ROVER">LAND ROVER</a>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                            <div className="col-1of5">
                                                                                <ul className="">

                                                                                    <li className="">
                                                                                        <a className="" href="https://speedyrecon.com/model_list/by_brand/3/NISSAN">NISSAN</a>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                            <div className="col-1of5">
                                                                                <ul className="">

                                                                                    <li className="">
                                                                                        <a className="" href="https://speedyrecon.com/model_list/by_brand/3/VOLKSWAGEN">VOLKSWAGEN</a>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                            <div className="col-1of5">
                                                                                <ul className="">

                                                                                    <li className="">
                                                                                        <a className="" href="https://speedyrecon.com/model_list/by_brand/3/VAUXHALL">VAUXHALL</a>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                            <div className="col-1of5">
                                                                                <ul className="">

                                                                                    <li className="">
                                                                                        <a className="" href="https://speedyrecon.com/model_list/by_brand/3/JAGUAR">JAGUAR</a>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                            <div className="col-1of5">
                                                                                <ul className="">

                                                                                    <li className="">
                                                                                        <a className="" href="https://speedyrecon.com/model_list/by_brand/3/DACIA">DACIA</a>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                            <div className="col-1of5">
                                                                                <ul className="">

                                                                                    <li className="">
                                                                                        <a className="" href="https://speedyrecon.com/model_list/by_brand/3/KIA">KIA</a>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                            <div className="col-1of5">
                                                                                <ul className="">

                                                                                    <li className="">
                                                                                        <a className="" href="https://speedyrecon.com/model_list/by_brand/3/HYUNDAI">HYUNDAI</a>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                            <div className="col-1of5">
                                                                                <ul className="">

                                                                                    <li className="">
                                                                                        <a className="" href="https://speedyrecon.com/model_list/by_brand/3/MITSUBISHI">MITSUBISHI</a>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                            <div className="col-1of5">
                                                                                <ul className="">

                                                                                    <li className="">
                                                                                        <a className="" href="https://speedyrecon.com/model_list/by_brand/3/IVECO">IVECO</a>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                            <div className="col-1of5">
                                                                                <ul className="">

                                                                                    <li className="">
                                                                                        <a className="" href="https://speedyrecon.com/model_list/by_brand/3/HONDA">HONDA</a>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                            <div className="col-1of5">
                                                                                <ul className="">

                                                                                    <li className="">
                                                                                        <a className="" href="https://speedyrecon.com/model_list/by_brand/3/VOLVO">VOLVO</a>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                            <div className="col-1of5">
                                                                                <ul className="">

                                                                                    <li className="">
                                                                                        <a className="" href="https://speedyrecon.com/model_list/by_brand/3/SUBARU">SUBARU</a>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                            <div className="col-1of5">
                                                                                <ul className="">

                                                                                    <li className="">
                                                                                        <a className="" href="https://speedyrecon.com/model_list/by_brand/3/TOYOTA">TOYOTA</a>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            )
                                                        }
                                                    </li>

                                                    <li className="departments__list-padding" role="presentation"></li>
                                                </ul>
                                                
                                           
                                    </ul>
                                    
                                    )
                                   }
                                </div>
                                

                                        
                                    
                            </div>
                        </div>

                        
                        <div className="header__navbar-menu ">
                            <div className="main-menu">
                                <ul className="main-menu__list gap-0 mr-80 menu-title">
                                <span className="menu-border-right " style={{ width: '1px', height: '22px', backgroundColor: '#FFAD82', marginTop: '1px' }}></span>
                                    <li className="px-6 hover:bg-black">
                                        <a href="https://speedyrecon.com/" className="main-menu__link     text-white">
                                            Home

                                        </a>

                                    </li>

                                    <span className="menu-border-right " style={{ width: '1px', height: '22px', backgroundColor: '#FFAD82', marginBottom: '4px' }}></span>
                                    <li className=" hover:bg-black px-6">

                                        <a href="https://speedyrecon.com/brand_list/3" className="main-menu__link  text-white">
                                            Injector

                                        </a>
                                    </li>

                                    <span className="menu-border-right " style={{ width: '1px', height: '22px', backgroundColor: '#FFAD82', marginBottom: '4px' }}></span>
                                    <li className="px-6  hover:bg-black">

                                        <a href="https://speedyrecon.com/brand_list/4" className="main-menu__link ">
                                            <p className='w-24 text-white'>Fuel Pump</p>

                                        </a>
                                    </li>

                                    <span className="menu-border-right " style={{ width: '1px', height: '22px', backgroundColor: '#FFAD82', marginBottom: '4px' }}></span>


                                    <li className="px-6  hover:bg-black">
                                        <a href="https://speedyrecon.com/about-us" className="main-menu__link text-white hover:bg-black">
                                            <p className='w-24'>About Us</p>

                                        </a>
                                    </li>
                                    <span className="menu-border-right " style={{ width: '1px', height: '22px', backgroundColor: '#FFAD82', marginBottom: '4px' }}></span>
                                    <li className="px-6  hover:bg-black">
                                        <a href="https://speedyrecon.com/contact-us" className="main-menu__link text-white hover:bg-black">
                                            <p className='w-24'>Contact Us</p>

                                        </a>
                                    </li>


                                </ul>
                            </div>
                        </div>

                    </div>
                </section>
            </div>
            <div className='lg:h-8'></div>

        </div>
    );
};

export default NavBar;