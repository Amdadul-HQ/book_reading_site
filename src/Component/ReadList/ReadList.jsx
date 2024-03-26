import { Link, useLoaderData } from "react-router-dom";
import { getLocalStorage } from "../../utility/SetToLocalStorage";
import ReadBook from "../ReadBook/ReadBook";
import { useEffect, useState } from "react";


const ReadList = () => {
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
        const readBook = getLocalStorage()

        if(books.length){
            const showReadBook = books.filter( book => readBook.includes(book.bookId))
            setShowBooks(showReadBook)
            setDisplay(showReadBook)
        }
    },[])


    return (
        <div className="space-y-6">
            <div className="flex justify-center my-5">
			<details className="dropdown">
			<summary className="m-1 btn bg-[#23BE0A] text-lg font-semibold text-white hover:text-[#131313] mx-auto">Sort By</summary>
			<ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
				<Link to='' onClick={() => handlefilter('sortby')}><a>Sort By</a></Link>
				<Link to='' onClick={() => handlefilter('rating')}><a>Rating</a></Link>
				<Link to='' onClick={() => handlefilter('pages')}><a>Number Of Pages</a></Link>
				<Link to='' onClick={() => handlefilter('publish')}><a>Published Year</a></Link>
			</ul>
			</details>
			</div>
            {
                display.map( book => <ReadBook key={book.bookId} book={book}></ReadBook> )
            }
        </div>
    );
};

export default ReadList;