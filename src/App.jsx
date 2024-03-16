
import './App.css'
import Header from './Components/Header/Header'
import Hero from './Components/Hero/Hero'
import Cards from './Components/Cards/Cards'
import Cooks from './Components/Cooks/Cooks'
import { useState } from 'react'

function App() {
  const [cooks, setCooks]=useState([]);
const handleCookAdd = (card)=>{
// console.log(card);
const newCard = [...cooks,card];
setCooks(newCard);
}
  return (
    <>
      <Header></Header>
      <Hero></Hero>
       <section className='container mx-auto'>
        <div className='px-24 py-6'>
         <div className='flex flex-row gap-4'>
           <Cards handleCookAdd={handleCookAdd}></Cards>
            <Cooks cooks={cooks}></Cooks>
         </div>
           
        
        </div>
       </section>

     
    </>
  )
}

export default App
