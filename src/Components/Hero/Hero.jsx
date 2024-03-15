import bg from '../../assets/images/Rectangle1.png'
const Hero = () => {
    const style = {
        backgroundImage : `url(${bg})`,
        backgroundCover: 'cover',
        backgroundRepeat : 'no-reapet',
        backgroundPosition:'center'
        
        

    }
    return (
       <section className='container mx-auto'>
        <div className='px-24 py-6'>
            <div className='w-full h-screen text-center flex flex-col justify-center items-center space-y-8 rounded-2xl' style={style}>
                <h1 className='text-[52px] w-10/12 font-bold text-white'>Discover an exceptional cooking class tailored for you!</h1>
                <p className='w-10/12 text-lg text-white'>Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.</p>
                <div className=' flex flex-row justify-center items-center gap-8'>
                    <button className='w-40 btn bg-[#0be58a] text-black font-bold py-2 rounded-3xl'>Explore Now</button>
                    <button className='w-40 btn bg-transparent text-white font-bold py-2 rounded-3xl'>Our Feedback</button>

                    
                </div>
            </div>

        </div>

       </section>
    );
};

export default Hero;