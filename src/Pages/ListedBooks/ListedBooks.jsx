import { NavLink, Outlet } from "react-router-dom";

const ListedBooks = () => {

    return (
        <div className="font-work">
            <h1 className="py-8 text-[#131313] text-3xl font-bold text-center bg-[rgba(19,19,19,0.05)] rounded-xl mb-8">Books</h1>
            
            <div className="flex my-11  overflow-x-auto overflow-y-hidden sm:justify-center left-0 dark:bg-gray-100 dark:text-gray-800">
                <NavLink to='readlist'   className={({isActive})=> isActive ? 'flex items-center flex-shrink-0 px-5 py-3 space-x-2 border-2 border-b-0 rounded-t-lg dark:border-gray-600 dark:text-gray-900 ' : 'flex items-center flex-shrink-0 px-5 py-3 space-x-2 border-b dark:border-gray-600 dark:text-gray-600'}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                    </svg>
                    <span>Read Books</span>
                </NavLink>
                <NavLink to='wishlist'   className={({isActive})=> isActive ? 'flex items-center flex-shrink-0 px-5 py-3 space-x-2 border-2 border-b-0 rounded-t-lg dark:border-gray-600 dark:text-gray-900 ' : 'flex items-center flex-shrink-0 px-5 py-3 space-x-2 border-b dark:border-gray-600 dark:text-gray-600'}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                    </svg>
                    <span>Wishlist Books</span>
                </NavLink>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default ListedBooks;