import React, { useEffect } from 'react';
import Footer from '../component/global/Footer';
import Header from '../component/global/Header';
import DetailCard from '../component/dashboard/DetailCard';
import myData from './../local.json';
import { useLocation } from 'react-router';

function CarDetail() {
    const location = useLocation();

    const getCarId = () => {
        return parseInt(location.pathname.split('/')[2]);
    }

    return (
        <>
            <Header />
            <div className="dashboard-body">
                <DetailCard carData = {myData.cars_cateloug[getCarId()]} />
            </div>
            <Footer />
        </>
    )
}

export default CarDetail;