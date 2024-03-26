import { useState } from 'react';
import '../../assets/font.css'
import { useEffect } from 'react';
import Book from '../Book/Book';

const Books = () => {
    const [books,setBooks] = useState([])
    useEffect(() => {
        fetch('books.json')
        .then( res => res.json())
        .then( data => setBooks(data))
    },[])
    return (
        <section>
            <h1 className="text-[#131313] text-4xl font-bold text-center font-playfair mb-9">Books</h1>
            <div className='grid md:grid-cols-3 grid-cols-1 gap-6'>
                {
                    books.map( book => <Book key={book.bookId} book={book}></Book> )
                }
            </div>
        </section>
    );
};

export default Books;