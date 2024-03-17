/* eslint-disable react/prop-types */

import PropTypes from 'prop-types'
import Cook from "../Cook/Cook";
import Cooking from '../Cooking/Cooking';



const Cooks = ({cooks,handleDelete}) => {
 

   
    return (
        <div className="md:w-4/12 border-2">
            <h2 className="font-700 text-2xl text-center my-5">Want To Cook: {cooks.length}</h2>
            <hr />
            <div className="overflow-x-auto">
                <table className="table">
   
                <thead>
                  <tr>
                      <th>Sl</th>
                     <th>Name</th>
                    <th>Time</th>
                    <th>Calories</th>
                    <th>Action</th>
                </tr>
            </thead>
           
            {
                cooks.map((cook,index)=><Cook key={index} index={index} handleDelete={handleDelete}   cook={cook}></Cook>)
            }
           </table>
        </div>  
             <h2 className="font-700 text-2xl text-center my-5">Currently Cooking:</h2>
            <hr />
             <div className="overflow-x-auto">
                <table className="table">
   
                <thead>
                  <tr>
                  
                     <th>Name</th>
                    <th>Time</th>
                    <th>Calories</th>
                    <th>Action</th>
                </tr>
            </thead>
           
            </table>
        </div> 

           <div className='flex flex-row justify-between px-4'>
             <p>Total Time=45 minutes</p>
            <p>Total Calories=1050 Calories</p>
           </div>
            
        </div>
    );
};
Cooks.propTypes = {
    cooks: PropTypes.array
}
export default Cooks;