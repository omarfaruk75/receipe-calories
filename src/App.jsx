
import './App.css'
import Header from './Components/Header/Header'
import Hero from './Components/Hero/Hero'
import Cards from './Components/Cards/Cards'
import Cooks from './Components/Cooks/Cooks'
import { useState } from 'react'

function App() {
const [cooks, setCooks]=useState([]);




const handleCookAdd = (card)=>{
const newCard = [...cooks,card];
setCooks(newCard);
}
const handleDelete=(id)=>{
  const newCook = cooks.filter((item)=> item.Recipe_id!==id);
  setCooks(newCook);
 
}


  return (
    <>
      <Header></Header>
      <Hero></Hero>
       <section className='container mx-auto'>
        <div className='px-24 py-6'>
           <h1 className="text-xl lg:text-[40px] font-bold  text-center ">Our Recipes</h1>
            <p className="text-center lg:w-2/3 mx-auto text-base font-medium text-[#13131899] my-4">Our Recipes: Explore our diverse collection of delicious recipes, carefully crafted to satisfy your culinary cravings and inspire your next cooking adventure. Taste the joy of homemade goodness today! </p>
         <div className='flex flex-col md:flex-row gap-4'>
          
           <Cards handleCookAdd={handleCookAdd}></Cards>
            <Cooks cooks={cooks}  handleDelete={handleDelete} > </Cooks>
         </div>
           
        
        </div>
       </section>

     
    </>
  )
}

export default App
