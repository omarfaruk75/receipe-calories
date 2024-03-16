/* eslint-disable react/prop-types */
import PropTypes from 'prop-types'
import Cook from "../Cook/Cook";
// import { useState } from 'react';
const Cooks = ({cooks,handleRemove}) => {
    // const [cooking,setCooking] = useState([]);
   //const handleRemove = ()={}
        
   
    return (
        <div className="w-4/12">
            <h2 className="font-700 text-2xl text-center my-5">Want To Cook: {cooks.length}</h2>
            <hr />
             <div className="flex flex-row justify-between my-4">
              
                <p>Name</p>
                <p>Time</p>
                <p>Calories</p>
                <p>Action</p>
                

            </div>
            {
                cooks.map(cook=><Cook key={cook.id} cook={cook}></Cook>)
            }
             <h2 className="font-700 text-2xl text-center my-5">Currently Cooking:</h2>
            <hr />
            <div className="flex flex-row justify-between my-4">
              
                <p>Name</p>
                <p>Time</p>
                <p>Calories</p>
                

            </div>
            
        </div>
    );
};
Cooks.PropTypes = {
    cooks: PropTypes.array
}
export default Cooks;