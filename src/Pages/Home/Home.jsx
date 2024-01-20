import React from 'react';
import Slide from '../../Component/Slide/Slide';
import BlockFeat from '../../Component/BlockFeat/BlockFeat';
import Injectors from '../../Component/Injectors/Injectors';
import FuelPump from '../../Component/FuelPump/FuelPump';
import Paralax from '../../Component/Paralax/Paralax';
import Review from '../../Component/Review/Review';
import Banner from '../../Component/Banner/Banner';
import GoogleApp from '../../Component/GoogleApp/GoogleApp';

const Home = () => {
    return (
        <div>
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