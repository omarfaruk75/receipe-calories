/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';
const Cook = ({cook,handleRemove}) => {
    
    const {Recipe_name,Preparing_time,Calories} = cook;
    return (
        <div>
            <div className="flex flex-row justify-between my-4 items-center ">
                
                <p>{Recipe_name.slice(0,15)}</p>
                <p>{Preparing_time}</p>
                <p>{Calories}</p>
                <button className='bg-red-400 px-3 py-2 rounded-full text-white' onClick={()=>handleRemove(Recipe_id)}>Preparing</button>
            

            </div>
            
        </div>
    );
};
Cook.PropTypes = {
    cook: PropTypes.object,
    handleRemove:PropTypes.func
}
export default Cook;