import React from 'react';
import Header from '../../shared/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../../shared/Footer/Footer';
import './Main.css'
const Main = () => {
    return (
        <div className='main-container'>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;