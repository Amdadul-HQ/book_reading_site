import { NavLink } from "react-router-dom";
import '../../assets/font.css'

const NavBar = () => {
    return (
        <header>
            <nav className="flex font-work justify-between items-center py-12">
                <h1 className="text-[#131313] text-3xl font-bold">Open Library</h1>
                <ul className={`text-[rgba(19,19,19,0.80)] text-lg font-normal flex gap-x-4`}>
                    <NavLink className={({isActive}) => isActive ? 'text-[#23BE0A] font-semibold px-5 py-3 rounded-lg border border-[#23BE0A] hover:bg-[#23BE0A] hover:text-white transition-all' : 'px-5 py-3 transition-all duration-500 hover:bg-[#23BE0A] hover:text-white border border-transparent rounded-lg'} to='/'>Home</NavLink>
                    <NavLink className={({isActive}) => isActive ? 'text-[#23BE0A] font-semibold px-5 py-3 rounded-lg border border-[#23BE0A] hover:bg-[#23BE0A] hover:text-white transition-all' : 'px-5 py-3 transition-all duration-500 hover:bg-[#23BE0A] hover:text-white border border-transparent rounded-lg'} to='/listedbooks'>Listed Books</NavLink>
                    <NavLink className={({isActive}) => isActive ? 'text-[#23BE0A] font-semibold px-5 py-3 rounded-lg border border-[#23BE0A] hover:bg-[#23BE0A] hover:text-white transition-all' : 'px-5 py-3 transition-all duration-500 hover:bg-[#23BE0A] hover:text-white border border-transparent rounded-lg'} to='/pagestoread'>Pages to Read</NavLink>
                </ul>
                <div className="flex gap-x-4">
                    <button className="text-white bg-[#23BE0A] py-4 px-7 text-lg font-semibold rounded-lg">Sign In</button>
                    <button className="text-white bg-[#59C6D2] py-4 px-7 text-lg font-semibold rounded-lg">Sign Up</button>
                </div>
            </nav>
        </header>
    );
};

export default NavBar;