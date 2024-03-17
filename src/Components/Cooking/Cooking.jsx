/* eslint-disable react/prop-types */
import propType from 'prop-types';
const Cooking = ({cooks}) => {
     const { Recipe_name,Preparing_time,Calories} = cooks;
    return (
        <tbody>
             <tr >

                <td>{Recipe_name.slice(0,15)}</td>
                <td>{Preparing_time}</td>
                <td>{Calories}</td>
                
            
             </tr>
            </tbody>
    );
};
Cooking.propType = {
    cooks:propType.object
}
export default Cooking;

