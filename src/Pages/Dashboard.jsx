import React, { useEffect , useState } from 'react';
import Footer from '../component/global/Footer';
import Header from '../component/global/Header';
import CarListing from '../component/dashboard/CarListing';
import myData from './../local.json';
import { Link } from 'react-router-dom';

function Dashboard() {
  const [ inputValue , setInputValue ] = useState('');
  const [ filterData , setFilterData ] = useState({
    cars_cateloug: []
  });

  return (
    <>
        <Header setFilterData = {setFilterData} setInputValue = {setInputValue} inputValue = {inputValue} />
        <div className="dashboard-body">
          <h2 className="dashboard-heading"> List Of Cars </h2>
          {(filterData.cars_cateloug.length === 0 && inputValue === '' ? myData : filterData).cars_cateloug.map((value , index)=>{
            return (
              <Link to={`/details/${index}`} >
                <CarListing car-index = {index} key={'car-list-'+index} carsData = {value} />
              </Link>
            ) 
          })}
          {filterData.cars_cateloug.length === 0 && inputValue !== '' && <h1 className="center"> No Data Available </h1>}
        </div>
        <Footer />
    </>
  );
}

export default Dashboard;
