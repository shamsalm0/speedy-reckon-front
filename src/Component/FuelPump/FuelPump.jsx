import React, { useEffect, useState } from 'react';
import PumpCard from './PumpCard';
import { MdArrowForwardIos, MdArrowBackIos } from 'react-icons/md';
import '../../css/pump.css';

const FuelPump = () => {
  const [pumps, setPumps] = useState([]);
  const [currentPosition, setCurrentPosition] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 600);

  useEffect(() => {
    // Fetch data when the component mounts
    const fetchData = async () => {
      try {
        // Import the JSON file
        const response = await import('./pump.json');
        setPumps(response.default);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();

    // Update isSmallScreen on window resize
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 600);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
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
      <div className='flex   lg:justify-between items-center mx-auto lg:flex-row-auto mb-8 btn-container' style={{ width: '1200px' }}>
        <h2 className='text-[#262626] text-xl lg:text-2xl font-serif font-bold'>Fuel Pump</h2>
        <div className='mr-0'>
          <button className='h-5 w-5 bg-[#FF7F3C] mr-1' onClick={handleForward}>
            <MdArrowForwardIos className='' />
          </button>
          <button className='h-5 w-5 bg-[#FF7F3C]' onClick={handleBackward}>
            <MdArrowBackIos className='ml-1' />
          </button>
        </div>
      </div>
      <div className={`lg:flex justify-center card-container gap-2`}>
        {pumps.map((pump, index) => (
          <div key={pump.id} className={`card ${isSmallScreen && index !== currentPosition ? 'hidden' : ''}`}>
            <PumpCard pump={pumps[(index + currentPosition) % pumps.length]} />
          </div>
        ))}
      </div>
      <div style={{height:'52px'}}></div>
    </div>
  );
};

export default FuelPump;
