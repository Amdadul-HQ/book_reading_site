import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const ListedBooks = () => {
    const [tabsIndex,setTabsIndex] = useState(0)

	

    return (
        <div className="font-work max-w-screen-xl mx-auto md:px-0 px-5">
            <h1 className="py-8 text-[#131313] text-3xl font-bold text-center bg-[rgba(19,19,19,0.05)] rounded-xl mb-8">Books</h1>
			
            <div className="flex items-center max-w-screen-xl -mx-4 overflow-x-auto overflow-y-hidden sm:justify-start mb-4 flex-nowrap dark:bg-gray-100 dark:text-gray-800">
	<Link to='' onClick={() => setTabsIndex(0)} rel="noopener noreferrer" className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabsIndex === 0  ? 'border border-b-0' : 'border-b'} rounded-t-lg dark:border-gray-600 dark:text-gray-900`}>
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
			<path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
		</svg>
		<span>Read Books</span>
	</Link>
	<Link to={`wishlist`} onClick={() => setTabsIndex(1)} rel="noopener noreferrer"  className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabsIndex === 1 ? 'border border-b-0' : 'border-b'} rounded-t-lg dark:border-gray-600 dark:text-gray-900`}>
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
			<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
			<path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
		</svg>
		<span>Wishlist Books</span>
	</Link>
</div>
            <Outlet></Outlet>
        </div>
    );
};

export default ListedBooks;