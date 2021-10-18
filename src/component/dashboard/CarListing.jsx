import React from 'react';

function CarListing({ carsData }) {
    return (
        <>
            <div className="car-listing-card">
                <div className="car-list-image">
                    <img src={carsData.images[0]} alt="" />
                </div>
                <div className="car-list-discription">
                    <div className="car-name">
                        <h2> {carsData.car_name} </h2>  <span> { carsData.rating } </span>
                    </div>
                    <div className="car-price">
                        <h2> ₹ 10.05 Lack onwards </h2> 
                    </div>
                    <div className="car-list-text">
                        Avg. Ex-Showroom price
                    </div>
                </div>
            </div>
        </>
    )
}

export default CarListing;