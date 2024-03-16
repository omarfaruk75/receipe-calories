import propType from 'prop-types';
const Cooking = ({handleRemove}) => {
     const {Recipe_name,Preparing_time,Calories} = handleRemove();
    return (
        <div>
            <div className="flex flex-row justify-between my-4 items-center ">
                
                <p>{Recipe_name.slice(0,15)}</p>
                <p>{Preparing_time}</p>
                <p>{Calories}</p>
            </div>
        </div>
    );
};

export default Cooking;