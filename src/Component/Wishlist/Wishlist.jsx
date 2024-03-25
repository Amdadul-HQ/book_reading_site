import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { getWishListedId } from '../../utility/SetToLocalStorage';
import Whitels from '../Whitels/Whitels';

const Wishlist = () => {
    const books = useLoaderData()
    const wishlist = getWishListedId()
    const showWishlist = books.filter( book => wishlist.includes(book.bookId) )
    
    return (
        <div className="space-y-6">
            {
                showWishlist.map( book => <Whitels key={book.bookId} book={book}></Whitels> )
            }
        </div>
    );
};

export default Wishlist;