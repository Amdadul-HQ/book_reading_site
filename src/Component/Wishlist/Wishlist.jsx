import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { getWishListedId } from '../../utility/SetToLocalStorage';
import Whitels from '../Whitels/Whitels';

const Wishlist = () => {
    const books = useLoaderData()
    const [showBooks,setShowBooks] = useState([])
    const [display,setDisplay] = useState([])

    const handlefilter = text => {
        if(text == 'sortby'){
            setDisplay(showBooks)
        }
        else if( text == 'rating' ) {
            setDisplay( showBooks.sort((a,b)=> b.rating - a.rating))
          }
        else if( text == 'pages' ){
            setDisplay(showBooks.sort( (a,b) => b.totalPages - a.totalPages ))
        }
        else if( text == 'publish' ){
            setDisplay(showBooks.sort( (a,b) => b.yearOfPublishing - a.yearOfPublishing ))
        }
    }
    
  


    useEffect(() => {
        const wishBook = getWishListedId()

        if(books.length){
            const showWishBook = books.filter( book => wishBook.includes(book.bookId))
            setShowBooks(showWishBook)
            setDisplay(showWishBook)
        }
    },[])
    
    return (
        <div className="space-y-6 max-w-screen-xl mx-auto">
              <div className="flex justify-center my-5">
			<details className="dropdown">
			<summary className="m-1 btn bg-[#23BE0A] text-lg font-semibold text-white hover:text-[#131313] mx-auto">Sort By</summary>
			<ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
				<Link to='' className="text-base font-medium py-2 rounded-md hover:bg-[#23BE0A] text-center" onClick={() => handlefilter('sortby')}><a>Sort By</a></Link>
				<Link to='' className="text-base font-medium py-2 rounded-md hover:bg-[#23BE0A] text-center" onClick={() => handlefilter('rating')}><a>Rating</a></Link>
				<Link to='' className="text-base font-medium py-2 rounded-md hover:bg-[#23BE0A] text-center" onClick={() => handlefilter('pages')}><a>Number Of Pages</a></Link>
				<Link to='' className="text-base font-medium py-2 rounded-md hover:bg-[#23BE0A] text-center" onClick={() => handlefilter('publish')}><a>Published Year</a></Link>
			</ul>
			</details>
			</div>
            {
                display.map( book => <Whitels key={book.bookId} book={book}></Whitels> )
            }
        </div>
    );
};

export default Wishlist;