import React from 'react';
import { CgPhone } from "react-icons/cg";
import { SlEarphonesAlt } from "react-icons/sl";
const Banner = () => {
    return (
        <div>
            <div className='lg:flex  justify-center lg:mb-10'>
                <div className='lg:w-[645px]'><img src="https://speedyrecon.com/customer_frontend/images/carelg22.WebP" className='lg:w-[445px] lg:h-[430px] lg:m-0 sm:w-[370px] sm:h-[400px] w-[267px] h-[300px] mx-auto'   alt="" /></div>
                <div className='lg:whitespace-normal whitespace-nowrap sm:ml-44 lg:ml-0 '>
                    <h2 className=' font-bold text-2xl text-center leading-10 sm:mr-36'>We Care About Your Car</h2>
                    <p className='lg:text-base text-sm text-[#5e5e5e] font-normal lg:leading-7 mb-7 '>We have been distributing an outstanding quality of products in the <br />out-motive market-spealizing in the remanufacture, supply and <br />survicing of diesel fuel injections and automotive vehicle parts and <br />accessories</p>
                    <div style={{width:'420px'}} className=' flex justify-around items-center p-3 rounded-lg border-2 shadow-xl mb-7'>
                      <div className='w-10 h-10 flex items-center bg-orange-600'><CgPhone className='m-auto text-white'/></div>
                      <div>
                      <h3 className='text-base font-sans font-semibold leading-7'>Call Us Now</h3>
                        <p className=' text-xs text-[#5e5e5e] font-normal leading-5'>If you have any issues with our <br /> products please contact us so we can <br /> fix it.</p>
                      </div>
                    </div>
                    <div style={{width:'420px'}} className=' flex justify-around items-center p-3 rounded-lg border-2 shadow-xl'>
                      <div className='w-10 h-10 flex items-center bg-orange-600'><SlEarphonesAlt className='m-auto text-white'/></div>
                      <div>
                      <h3 className='text-base font-sans font-semibold leading-7'>Emergency Call 24/7</h3>
                        <p className='text-xs text-[#5e5e5e] font-normal leading-5'>For any emergency call on <br /> 07708686861</p>
                        <div className='w-20 h-10 flex items-center'><CgPhone className='m-auto text-black'/> <span>Call now</span></div>
                      </div>
                    </div>
                </div>
            </div>
            <div style={{height:'52px'}}></div>
        </div>
    );
};

export default Banner;