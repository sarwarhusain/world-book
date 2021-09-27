import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons';


const CountriesTable = (props) => {
    
    const{name, flags, population,region, capital, area, continent}= props.country
     ||{};
    return (
        <div className="col-md-4">
        <div className="card mb-3 bg-light p-2" style={{"maxWidth": "540px"}}>
    <div className="row g-0">
      <div className="col-md-5">
        <img src={flags} className="img-fluid rounded border border-dark border-4 rounded-circle mt-3 " alt="..."/>
      </div>
      <div className="col-md-7">
        <div className="card-body">
          <h5 className="card-title">Name: {name}</h5>
          <h6 className="card-text"> Capital: {capital}</h6>
          <div className="card-text">
          <p>Continent: {continent} </p>
          <p>Region:{region}</p>
          <p> Population: {population} </p>
          </div>
          <h5 className="card-text"> Area: {area} </h5>
          <button 
          onClick={()=> props.handleAddLand(props.country)}
          className="btn btn-outline-info">  
          Add Land Survey <FontAwesomeIcon icon={faPlus} />  </button>
            
        </div>
      </div>
    </div>
  </div>
 </div>
    );
};

export default CountriesTable;