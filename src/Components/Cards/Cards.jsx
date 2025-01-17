import { useEffect, useState } from "react";
import Card from "../Card/Card";
import PropTypes from 'prop-types';

const Cards = ({handleCookAdd}) => {
const[cards,setCards] = useState([])

useEffect(()=>{
     fetch('recipe.json')
    .then(res=>res.json())
    .then(data=>setCards(data))
},[])
    return (

        <div className="md:w-8/12 grid grid-cols-1 md:grid-cols-2 gap-4">
           {
             cards.map(card=> <Card 
                key={card.Recipe_id} 
                handleCookAdd={handleCookAdd} 
                card={card}></Card>)    
           }
        </div>
    );
};
Cards.propTypes={
    handleCookAdd:PropTypes.func
}
export default Cards;