import React, { useEffect, useState } from 'react';
import PumpCard from './PumpCard';
import { MdArrowForwardIos, MdArrowBackIos } from 'react-icons/md';
import '../../css/pump.css';

const FuelPump = () => {
  const [pumps, setPumps] = useState([]);
  const [currentPosition, setCurrentPosition] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 600);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await import('./pump.json');
        setPumps(response.default);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      //setIsSmallScreen(screenWidth <= 600);
      //setIsMediumScreen(screenWidth > 600 && screenWidth <= 1050);
  
      setPumps(prevInjectors => {
        if (screenWidth <= 600) {
          return prevInjectors.slice(0, 1);
        } else if (screenWidth > 600 && screenWidth <= 1050) {
          return prevInjectors.slice(0, 3);
        } else {
          return pumps; // Use the original state for other cases
        }
      });
    };
  
    handleResize();
  
    window.addEventListener('resize', handleResize);
  
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  const handleForward = () => {
    setCurrentPosition((prevPosition) => (prevPosition + 1) % pumps.length);
    console.log(currentPosition);
  };

  const handleBackward = () => {
    setCurrentPosition(
      (prevPosition) => (prevPosition - 1 + pumps.length) % pumps.length
    );
  };

  return (
    <div>
      <div className='flex   lg:justify-between justify-between items-center mx-auto lg:flex-row-auto mb-8 w-full btn-container'>
        <h2 className='text-[#262626] text-xl lg:text-2xl font-serif font-bold lg:ml-36'>Fuel Pump</h2>
        <div className=' mr-0 flex lg:mr-36'>
    <button className='w-[79px] h-[23px] bg-black text-[#FF7F3C] transform skew-x-12 mr-1'>See All</button>
          <button className='h-[23px] w-[34px] text-center bg-[#FF7F3C] transform skew-x-12  mr-1' onClick={handleForward}><MdArrowForwardIos className='ml-3 text-white'/></button>
        <button className='h-[23px] w-[34px] text-center bg-[#FF7F3C] skew-x-12' onClick={handleBackward}><MdArrowBackIos className='ml-3 text-center text-white'/></button>
  </div>
      </div>
      <div className={`flex justify-center card-container gap-2`}>
        {pumps.map((pump, index) => (
          <div key={pump.id} >
            <PumpCard pump={pumps[(index + currentPosition) % pumps.length]} />
          </div>
        ))}
      </div>
      <div style={{height:'52px'}}></div>
    </div>
  );
};

export default FuelPump;
