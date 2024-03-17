import PropTypes from 'prop-types';
import './Card.css';
import { IoMdTime} from "react-icons/io";
import { FaFireAlt } from "react-icons/fa";


const Card = ({ card, handleCookAdd }) => {
    const {Recipe_id, Recipe_name, Recipe_image, Short_description, Ingredients, Preparing_time, Calories } = card;

    return (
        <div className="w-full">
            <div className="card shadow-xl">
                <div className="px-5 pt-10">
                    <img src={Recipe_image} alt="Shoes" className="rounded-xl" />
                </div>
                <div className="card-body px-5">
                    <h2 className="card-title text-xl font-bold">{Recipe_name.slice(0,30)}</h2>
                    <p style={{ height: '4rem' }}>{Short_description.slice(0,100)}</p>
                    <hr/>
                    <h3 className='text-lg font-semibold text-start'>Ingredient: {Ingredients.length} </h3>
                   
                   
                        <ul style={{ height: '14rem' }} > 
                            {Ingredients.map((item) => <li key={Recipe_id}>{item}</li>)}
                         </ul>
                  
                    <hr />
                    <div className="card-actions flex flex-row justify-between items-center">
                       <p className='flex flex-row justify-center items-center gap-2'><IoMdTime /> {Preparing_time}</p>
                       <p className='flex flex-row justify-center items-center gap-2'><FaFireAlt /> {Calories}</p>
                    </div>
                    <button className='bg-[#0BE58A] w-3/4 px-4 py-3 rounded-full text-lg font-medium' onClick={()=>handleCookAdd(card)}>Want to cook</button>

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
