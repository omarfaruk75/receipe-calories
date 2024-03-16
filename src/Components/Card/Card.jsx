import PropTypes from 'prop-types';
import './Card.css';
import { IoMdTime} from "react-icons/io";
import { FaFireAlt } from "react-icons/fa";

const Card = ({ card, handleCookAdd }) => {
    const { Recipe_id, Recipe_name, Recipe_image, Short_description, Ingredients, Preparing_time, Calories } = card;

    return (
        <div className="w-full">
            <div className="card shadow-xl">
                <div className="px-10 pt-10">
                    <img src={Recipe_image} alt="Shoes" className="rounded-xl" />
                </div>
                <div className="card-body">
                    <h2 className="card-title text-xl font-bold">{Recipe_name}</h2>
                    <p>{Short_description.slice(0,60)}</p>
                    <hr/>
                    <h3 className='text-lg font-semibold text-start'>Ingredient: {Ingredients.length} </h3>
                   
                    <ul> 
                        {Ingredients.map((item, index) => <li key={index}>{item}</li>)}
                    </ul>
                    <hr />
                    <div className="card-actions flex flex-row justify-between items-center">
                       <p className='flex flex-row justify-center items-center gap-2'><IoMdTime /> {Preparing_time}</p>
                       <p className='flex flex-row justify-center items-center gap-2'><FaFireAlt /> {Calories}</p>
                    </div>
                    <button className='bg-green-600 w-3/4 px-4 py-3 rounded-full text-lg font-medium' onClick={()=>handleCookAdd(card)}>Want to cook</button>

                </div>
            </div>
        </div>
    );
};

Card.propTypes = {
    card: PropTypes.object.isRequired,
    handleCookAdd:PropTypes.func
};

export default Card;
