import { NavLink } from "react-router-dom";
import '../../assets/font.css'
import { IoMenu } from "react-icons/io5";
import { useState } from "react";
import { IoClose } from "react-icons/io5";

const NavBar = () => {
    const [showmenu,setShowmenu] = useState(false)

    const handleShowMenu = () => {
        setShowmenu(!showmenu)
    }
    return (
        <header>
            <nav className="flex md:flex-row font-work justify-between py-8 md:px-0 px-5 items-center lg:py-12">
                <h1 className="text-[#131313] text-3xl font-bold">Open Library</h1>
                <div className="md:hidden flex text-3xl">
                    <button onClick={handleShowMenu}>{!showmenu ? <IoMenu></IoMenu> : <IoClose></IoClose>}</button>
                </div>
                <ul className={`${showmenu ? 'right-0 ' : '-right-96'} top-16 transition-all lg:bg-transparent bg-white rounded-l-lg p-4 md:text-black text-black z-50 duration-500 text-right fixed text-lg lg:static flex md:flex-row flex-col md:gap-x-4 gap-y-2 font-semibold`}>
                    <NavLink className={({isActive}) => isActive ? 'text-[#23BE0A] font-semibold px-3 py-2 rounded-lg border border-[#23BE0A] hover:bg-[#23BE0A] hover:text-white transition-all' : 'px-3 py-2 transition-all duration-500 hover:bg-[#23BE0A] hover:text-white border border-transparent rounded-lg'} to='/'>Home</NavLink>
                    <NavLink className={({isActive}) => isActive ? 'text-[#23BE0A] font-semibold px-3 py-2 rounded-lg border border-[#23BE0A] hover:bg-[#23BE0A] hover:text-white transition-all' : 'px-3 py-2 transition-all duration-500 hover:bg-[#23BE0A] hover:text-white border border-transparent rounded-lg'} to='/listedbooks'>Listed Books</NavLink>
                    <NavLink className={({isActive}) => isActive ? 'text-[#23BE0A] font-semibold px-3 py-2 rounded-lg border border-[#23BE0A] hover:bg-[#23BE0A] hover:text-white transition-all' : 'px-3 py-2 transition-all duration-500 hover:bg-[#23BE0A] hover:text-white border border-transparent rounded-lg'} to='/pagestoread'>Pages to Read</NavLink>
                    <NavLink className={({isActive}) => isActive ? 'text-[#23BE0A] font-semibold px-3 py-2 rounded-lg border border-[#23BE0A] hover:bg-[#23BE0A] hover:text-white transition-all' : 'px-3 py-2 transition-all duration-500 hover:bg-[#23BE0A] hover:text-white border border-transparent rounded-lg'} to='/priceing'>Pricing</NavLink>
                    <NavLink className={({isActive}) => isActive ? 'text-[#23BE0A] font-semibold px-3 py-2 rounded-lg border border-[#23BE0A] hover:bg-[#23BE0A] hover:text-white transition-all' : 'px-3 py-2 transition-all duration-500 hover:bg-[#23BE0A] hover:text-white border border-transparent rounded-lg'} to='/contract'>Contract Us</NavLink>
                </ul>
                <div className="md:flex hidden gap-x-4">
                    <button className="text-white bg-[#23BE0A] py-4 px-7 text-lg font-semibold rounded-lg">Sign In</button>
                    <button className="text-white bg-[#59C6D2] py-4 px-7 text-lg font-semibold rounded-lg">Sign Up</button>
                </div>
            </nav>
        </header>
    );
};

export default NavBar;