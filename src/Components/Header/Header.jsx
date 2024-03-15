import { IoSearchSharp } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
const Header = () => {
    return (
        <header>
            <nav className="container mx-auto">
                <div className="px-24  py-12">
                    <div className="navbar bg-base-100">
                        <div className="navbar-start">
                            <div className="dropdown">
                                <div tabIndex="0" role="button" className="btn btn-ghost lg:hidden">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                            d="M4 6h16M4 12h8m-8 6h16" />
                                    </svg>
                                </div>
                                    <ul tabIndex="0"
                                        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow text-[#424247] text-lg bg-base-100 space-y-4 rounded-box w-52 text-center">
                                        <li><a>Home</a></li>
                                        <li><a>Recipes</a></li>
                                        <li><a>About</a></li>
                                        <li><a>Search </a></li>
                                

                                    </ul>
                                </div>
                                <h2 className="text-black text-xl md:text-4xl font-extrabold">Recipe Calories</h2>
                        </div>
                        <div className="navbar-center hidden lg:flex">
                                <ul className="menu menu-horizontal px-1 text-[#424247] text-lg">
                                    <li><a>Home</a></li>
                                    <li><a>Recipes</a></li>
                                    <li><a>About</a></li>
                                    <li><a>Search </a></li>
                                </ul>
                        </div>


                        
                        <div className="navbar-end">
                            <div className=" hidden md:flex flex-row justify-between items-center gap-2">
                                <div className="form-control flex flex-row justify-between items-center outline-none bg-white border-2 rounded-xl px-6 py-4">
                                    <IoSearchSharp />
                                    <input type="text" placeholder="Search" className="outline-none"  />
                                
                                </div>
                                        
                                <div className="dropdown dropdown-end">
                                  
                                    <div className="w-12 text-3xl flex flex-row justify-center items-center">
                                            <CgProfile />
                                     </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;