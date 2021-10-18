import React, { useEffect } from 'react';
import SpecificationBox from './SpecificationBox';
import SummarySection from './SummarySection';

function DetailCard({ carData }) {

    useEffect(() => {
        window.scrollTo(0, 0);
        carData === undefined && alert('Data Not Found With This Id');
    },[]);

    return (
        <>
            <div className="car-detail-card">
                <div className="car-detail-header">
                    <div className="car-detail-image">
                        <img src={ carData !== undefined && carData.images[0] } alt="" />
                    </div>
                    <div className="car-detail-area">
                        <div className="car-name-detail">
                            <h1> { carData !== undefined && carData.car_name } </h1>  <span> { carData !== undefined && carData.rating } </span>
                        </div>
                        <div className="car-price">
                            <h2> { carData !== undefined && carData.price } </h2> 
                        </div>
                        <div className="car-list-text">
                            Avg. Ex-Showroom price
                        </div>
                        <div className="car-sub-images-holder">
                            {carData !== undefined && carData.images.map((value , index) => {
                                if(index > 0 && index < 4) 
                                return (<>
                                    <div className="car-sub-images">
                                        <img src={value} alt="" />
                                    </div>
                                </>)
                            })}
                        </div>
                    </div>
                </div>
            </div>
            <div className="car-information-area">
                <h2> Key Specifications </h2>
                <div className="specification-holder">
                    { carData !== undefined && carData.specification.map((value , index) => {
                        return  <SpecificationBox boxData = { value } />
                    })}
                </div>
            </div>
            <div className="car-information-area">
                <h2> Car Summary </h2>
                { carData !== undefined && carData.summary.map(( value , index ) => {
                    return <SummarySection summaryData = { value } />
                })}
            </div>
        </>
    )
}

export default DetailCard;