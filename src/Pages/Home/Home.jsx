import React from 'react';
import Slide from '../../Component/Slide/Slide';
import BlockFeat from '../../Component/BlockFeat/BlockFeat';
import Injectors from '../../Component/Injectors/Injectors';
import FuelPump from '../../Component/FuelPump/FuelPump';

const Home = () => {
    return (
        <div>
            <Slide ></Slide>
            <BlockFeat></BlockFeat>
            <Injectors></Injectors>
            <FuelPump></FuelPump>
        </div>
    );
};

export default Home;