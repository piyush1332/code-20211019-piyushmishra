import React, { useEffect, useState } from 'react';
import './../../Pages/Dashboard.css';
import myData from './../../local.json';

function Header({ setFilterData , setInputValue , inputValue }) {
  
  useEffect(()=>{
    if(checkDisplayStatus()) {
      const filteredCars = myData.cars_cateloug.filter((value) => value.car_name.toLowerCase().includes(inputValue));  
      setFilterData({
        cars_cateloug: filteredCars
      });
    }
  },[inputValue]);

  const checkDisplayStatus = () => {
    return window.location.href.includes('details') ? false : true;
  }

  return (
    <>
        <div className="dashboard-header">
            <div className="header-logo">
                Cars
            </div>
            {checkDisplayStatus() && 
            <div className="header-search">
                <input type="text" onChange={ (e) => setInputValue(e.target.value) } value={ inputValue } />   
            </div>}
        </div>
    </>
  );
}

export default Header;
