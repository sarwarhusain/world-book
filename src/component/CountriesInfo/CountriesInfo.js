// here is countries information
import React, { useEffect, useState } from 'react';
import CountriesTable from '../CountriesTable/CountriesTable';
import ShowPopulaiton from '../ShowLand/ShowLand';

const CountriesInfo = () => {

    const[countricInfo, setCountricInfo] = useState([])

    const[AddLand , setAddLand ] = useState([])

    const handleAddLand  =(population)=>{

       const newAddLand =[...AddLand ,population]
       setAddLand (newAddLand )
    } 

    useEffect(()=>{
        fetch('countryLand.json')
        .then(res => res.json())
        .then(data => setCountricInfo(data))
    },[]);


    return (
        <div>
            <div className="row">
            <div className="col-md-9">

                <div className="row">
                {
                    countricInfo.map(country=> <CountriesTable
                    country={country}
                    key={country.name}
                    handleAddLand ={handleAddLand}
                    >

                    </CountriesTable>)
                }
                </div>

                </div>
                <div className="col-md-3">
                <ShowPopulaiton
                AddLand ={AddLand}
                >
                
                </ShowPopulaiton>
                </div>
             </div>
                            
             </div>
                    );
                };

export default CountriesInfo;