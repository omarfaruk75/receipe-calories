/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';
const Cook = ({cook,index,handleDelete}) => {
    
    const {Recipe_id,Recipe_name,Preparing_time,Calories} = cook;
    return (
      
            <tbody>
             <tr>
                <td>{index+1}</td>
                <td>{Recipe_name.slice(0,15)}</td>
                <td>{Preparing_time}</td>
                <td>{Calories}</td>
                <td><button className='bg-red-400 px-3 py-2 rounded-full text-white' onClick={()=>handleDelete(Recipe_id)}>Preparing</button></td>
            
             </tr>
            </tbody>
    
    );
};
Cook.PropTypes = {
    cook: PropTypes.object,
    handleRemove:PropTypes.func
}
export default Cook;