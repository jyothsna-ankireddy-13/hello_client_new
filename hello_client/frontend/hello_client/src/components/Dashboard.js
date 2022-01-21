import React from 'react'
import Navbar from './Dashboard/Navbar/Navbar';
import Footer from './Dashboard/Footer/Footer';
import Buttonup from './Dashboard/Button/Buttonup';
import CardIn from './Dashboard/CardIn/CardIn';
import Dashproject from './Dashboard/Project/Project';
import ButtonCarousel from './Dashboard/ButtonCarousel/ButtonCarousel';
import Graph from './Dashboard/Graph/Graph';

const Dashboard = ()=> {
    return (
        <div>
            <Navbar/>
            <Buttonup/>
            <ButtonCarousel/>
            <Graph/>
            <Dashproject/>
            <CardIn/>
            <Footer />
        </div>
    )
}

export default Dashboard
