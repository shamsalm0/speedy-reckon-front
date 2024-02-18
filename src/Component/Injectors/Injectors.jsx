import React, { useEffect, useState } from 'react';
import data from './injectors.json';
import { MdArrowForwardIos,MdArrowBackIos } from "react-icons/md";
import '../../css/injectors.css'
import InjectorCard from './InjectorCard';

const Injectors = () => {
  const [injectors, setInjectors] = useState([]);
  const [currentPosition, setCurrentPosition] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isMediumScreen, setIsMediumScreen] = useState(false);
  console.log(window.innerWidth)


 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await import('./injectors.json');
        setInjectors(response.default);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();

    const handleResize = () => {
      const screenWidth = window.innerWidth;
      setIsSmallScreen(screenWidth <= 600);
      setIsMediumScreen(screenWidth > 600 && screenWidth <= 1050);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleForward = () => {
    setCurrentPosition((prevPosition) => (prevPosition + 1) % injectors.length);
    console.log(currentPosition);
  };

  const handleBackward = () => {
    setCurrentPosition(
      (prevPosition) => (prevPosition - 1 + injectors.length) % injectors.length
    );
  };

  return (
    <div className=''>
      <div className='flex lg:justify-between justify-between items-center   w-full mb-8' >
  <h2 className='text-[#262626] text-2xl font-serif font-bold lg:ml-36'>Injectors</h2>
  <div className=' mr-0 flex  lg:mr-36'>
    <button className='w-[79px] h-[23px] bg-black text-[#FF7F3C] transform skew-x-12 mr-1'>See All</button>
          <button className='h-[23px] w-[34px] text-center bg-[#FF7F3C] transform skew-x-12  mr-1' onClick={handleForward}><MdArrowForwardIos className='ml-3 text-white'/></button>
        <button className='h-[23px] w-[34px] text-center bg-[#FF7F3C] skew-x-12' onClick={handleBackward}><MdArrowBackIos className='ml-3 text-center text-white'/></button>
  </div>
      </div>
      <div className={`flex justify-center gap-2 transition-opacity duration-500 ${isSmallScreen ? 'md:opacity-0' : 'opacity-100'}`}style={{}} >
        {injectors.map((injector, index) => (
          <div key={injector.id} className={`card  ${isSmallScreen && index !== currentPosition ? 'hidden' : ''} ${isMediumScreen && index > 2 ? 'hidden' : ''}`}>
          <InjectorCard className='card-container ' injector={injectors[(index + currentPosition) % injectors.length]} />
        </div>
        ))}
      </div>
      <div style={{height:'52px'}}></div>
      <div style={{backgroundColor:'#c94a0014'}} className="container p-3 mx-auto w-5/6">
                <h3  style={{textAlign:"center",fontSize:'28px',fontWeight:'500'}}>The most common types of fuel injector failure</h3>
<p className='block'>When fuel injectors fail, many are left wondering what happened. The truth is, fuel injector failure can be caused by a number of things that can be difficult to diagnose. However, arming yourself with an understanding of how and why fuel injectors can fail, appropriate diagnostic procedures, and important... <a className='text-[#c94a00]' href="/purchase-policy">Read More</a>
            </p>
            
   
            </div>
            <div style={{height:'52px'}}></div>
            <div className='lg:flex lg:justify-center   mx-auto w-full'>
              <div className="bg-[url('https://speedyrecon.com/customer_frontend/images/injector_banner_1.WebP')] bg-cover lg:w-2/5  h-52 lg:ml-32 mx-auto rounded-md">
                <div className='h-52 m-2 py-8 px-9 '>
                <h2 className='text-white text-3xl font-bold font-sans'>INJECTORS</h2>
                <p className='text-white text-base font-semibold font-sans mt-3'>High Quality Remanufactures Fuel Injectors</p>
                <button className=' h-7 px-4 mt-3 text-white font-semibold font-sans bg-[#FF8545]'>Shop Now</button>
                </div>
              </div>
              <div className='lg:w-1 h-10'></div>
              <div className="bg-[url('https://speedyrecon.com/customer_frontend/images/fuel_pump_banner_2.WebP')]  bg-cover lg:w-2/5 lg:h-52 lg:mr-32 mx-auto rounded-md">
              <div className='h-52 m-2 py-8 px-9'>
                <h2 className='text-white text-3xl font-bold font-sans'>FUEL PUMPS</h2>
                <p className='text-white text-base font-semibold font-sans mt-3 bg-[#262626] bg-gradient-to-r from-[rgba(38,38,38,20)] to-[rgba(38,38,38,0)]'>High Quality Remanufactures Fuel Pumps</p>
                <button className=' h-7 px-4 mt-3 text-white font-semibold font-sans bg-[#FF8545]'>Shop Now</button>
                </div>
              </div>
            </div>
            <div style={{height:'52px'}}></div>
    </div>
  );
};

export default Injectors;
