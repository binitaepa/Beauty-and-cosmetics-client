import { Link, NavLink } from "react-router-dom"
import logo from '../Header/Logo/lipstickpng.png'
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider/AuthProvider";



const Header = () => {
    const {user,logOut} =useContext(AuthContext);

    const handleSignOut = () => {
        logOut()
            .then()
            .catch()
    }
    const  navLinks=<>
    <li ><NavLink className='hover:text-red-500' to='/'>Home</NavLink></li>
       {user && <>
        <li><NavLink className='hover:text-red-500' to='/addproduct'>Add Product</NavLink></li>
       <li><NavLink className='hover:text-red-500' to='/news'>My Cart</NavLink></li></>}
       
      

</>
    return (
        <div>
              <div className="navbar ">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-pink-500 text-white italic rounded-box w-52">
{ navLinks}
      </ul>
    </div>
    <img className="w-[100px] h[100px] mb-8" src={logo} alt="" />
    <a className="btn btn-ghost normal-case text-xl"><span className="text-pink-500 font-medium italic border-b-2 border-red-400" >BeautyHub</span></a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal ml-8 font-bold text-lg italic  text-pink-500 gap-5 px-1">
     {navLinks}
    </ul>
  </div>
  <div className="navbar-end">
   
  </div>
 
  {
                    user ?
                        <>
                        <span className="mr-2 ">{user.name}</span>
                        <button onClick={handleSignOut} className="btn bg-pink-400 text-white mr-2">Sign Out</button>
                        <div className="w-15 rounded-full">
          
        </div>
                        </>
                        :
                        <Link to="/login">
                            <button className="btn bg-pink-400 text-white">Login</button>
                        </Link>
                }
                
</div>
        </div>
    );
};

export default Header;