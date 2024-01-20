import React from 'react';
import Slide from '../../Component/Slide/Slide';
import BlockFeat from '../../Component/BlockFeat/BlockFeat';
import Injectors from '../../Component/Injectors/Injectors';
import FuelPump from '../../Component/FuelPump/FuelPump';
import Paralax from '../../Component/Paralax/Paralax';
import Review from '../../Component/Review/Review';
import Banner from '../../Component/Banner/Banner';
import GoogleApp from '../../Component/GoogleApp/GoogleApp';
import { FaWhatsapp } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <div className=" w-11 h-11" style={{position:'fixed',bottom:'0',right:'0'}}><Link to='https://api.whatsapp.com/send?phone=+447529910607&text=Hello%20Anyone%20Available%20On%20Chat?'><button><FaWhatsapp className='w-6 h-9 text-green-600'></FaWhatsapp></button></Link></div>
            <Slide ></Slide>
            <BlockFeat></BlockFeat>
            <Injectors></Injectors>
            <FuelPump></FuelPump>
            <Paralax></Paralax>
            <Banner></Banner>
            <Review></Review>
   
            <GoogleApp></GoogleApp>
        </div>
    );
};

export default Home;