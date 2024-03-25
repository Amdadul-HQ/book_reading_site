import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const BookDetails = () => {
    const [showBook ,setShowBook] = useState([])
    console.log(showBook);
    const {bookId,image,bookName,author,review,totalPages,rating,category,tags,publisher,yerOfPublishing} = showBook
    const books = useLoaderData()
    const {id} = useParams()
    useEffect(() =>{
        const book = books.find( bk => bk.bookId == id)
        setShowBook(book)
    },[])
    return (
        <section>
            <div>
                <img src={image} alt="" />
            </div>
            <div>
                <h1>{bookName}</h1>
                <p>By : {author}</p>
                <p>{category}</p>
                <p><strong>Review :</strong>{review}</p>
                <div className="flex gap-x-3">
                {
                    tags.map( tag => <p className="text-[#23BE0A] text-base font-medium px-4 py-2 rounded-[30px] bg-[rgba(35,190,10,0.05)]" key={bookId}>{tag}</p> )
                }
                </div>

            </div>
        </section>
    );
};

export default BookDetails;