import React from 'react';
import './ShowLand.css'

const ShowLand = (props) => {

    const {AddLand}=props ||{}

    const totalReaducer=(prevarea,currentarea)=>prevarea+currentarea.area 

    const totalarea = AddLand.reduce(totalReaducer, 0)


    return (
        <div className="bg-info border border-3 rounded border border-dark text-center">
            <h4>Total land survey</h4>
            <h6>Add Country: {AddLand.length}</h6>
            <h5>Selected Country Land area: {totalarea}</h5>
            <ul>
                {
                    AddLand.map(AddLand => <li key={AddLand.alpha3Code}>{AddLand.name}</li>)
                    
                }
            </ul>
        </div>
        
    );
};

export default ShowLand;