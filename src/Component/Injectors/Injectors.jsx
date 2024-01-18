import React, { useEffect, useState } from 'react';
import data from './injectors.json';
import { MdArrowForwardIos,MdArrowBackIos } from "react-icons/md";
import '../../css/injectors.css'
import InjectorCard from './InjectorCard';

const Injectors = () => {
  const [injectors, setInjectors] = useState([]);
  const [currentPosition, setCurrentPosition] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 600);
  console.log(window.innerWidth)
  const cardContainerStyle = {
    
    transform: 'translate3d(-1792px, 0px, 0px)', 
    transition: 'all 0.5s ease 0s; width: 3840px'
  };

 

  useEffect(() => {
    // Fetch data when the component mounts
    const fetchData = async () => {
      try {
        // Import the JSON file
        const response = await import('./injectors.json');
        setInjectors(response.default);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();

    const handleResize = () =>{
      setIsSmallScreen(window.innerWidth <= 600);
    }

    window.addEventListener('resize',handleResize);

    return ()=>{
      window.removeEventListener('resize',handleResize)
    }
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
      <div className='flex lg:justify-between  mx-auto mb-8' style={{width:'1200px'}}>
  <h2 className='text-[#262626] text-2xl font-serif font-bold'>Injectors</h2>
  <div className=' mr-0'>
          <button className='h-5 w-5 bg-[#FF7F3C] mr-1' onClick={handleForward}><MdArrowForwardIos className=''/></button>
        <button className='h-5 w-5 bg-[#FF7F3C]' onClick={handleBackward}><MdArrowBackIos className='ml-1'/></button>
  </div>
      </div>
      <div className='flex justify-center gap-2'style={{}} >
        {injectors.map((injector, index) => (
          <div key={injector.id} className={`card ${isSmallScreen && index !== currentPosition ? 'hidden' : ''}`}>
            <InjectorCard injector={injectors[(index + currentPosition) % injectors.length]} />
          </div>
        ))}
      </div>
      <div style={{height:'52px'}}></div>
      <div style={{backgroundColor:'#c94a0014'}} className="container p-3 mx-auto w-4/5">
                <h3  style={{textAlign:"center",fontSize:'28px',fontWeight:'500'}}>The most common types of fuel injector failure</h3>
<p className='block'>When fuel injectors fail, many are left wondering what happened. The truth is, fuel injector failure can be caused by a number of things that can be difficult to diagnose. However, arming yourself with an understanding of how and why fuel injectors can fail, appropriate diagnostic procedures, and important... <a className='text-[#c94a00]' href="/purchase-policy">Read More</a>
            </p></div>
            <div style={{height:'52px'}}></div>
    </div>
  );
};

export default Injectors;
