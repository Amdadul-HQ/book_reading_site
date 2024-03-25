import { IoIosStarOutline } from "react-icons/io";
import '../../assets/font.css'
import { Link } from "react-router-dom";

const Book = ({book}) => {
    const {image,tags,bookId,bookName,author,category,rating} = book;
    return (
        <Link to={`/booksdetails/${bookId}`} className="p-6 border rounded-2xl font-work">
           <div className="bg-[#F3F3F3] h-[230px] flex justify-center items-center rounded-2xl mb-6">
                <img src={image} alt="" />
           </div> 
           <div className="space-y-4">
                <div className="flex gap-x-3">
                {
                    tags.map( tag => <p className="text-[#23BE0A] text-base font-medium px-4 py-2 rounded-[30px] bg-[rgba(35,190,10,0.05)]" key={bookId}>{tag}</p> )
                }
                </div>
                <h1 className="font-playfair text-[#131313] text-2xl font-bold">{bookName}</h1>
                <p className="text-[rgba(19,19,19,0.80)] text-base font-medium">By : {author}</p>
                <hr className="border-dashed border-2" />
                <div className="text-[rgba(19,19,19,0.80)] text-base font-medium flex items-center justify-between">
                    <p>{category}</p>
                    <p className="flex gap-x-2 items-center">{rating}<IoIosStarOutline className="text-2xl"></IoIosStarOutline></p>
                </div>
           </div>
        </Link>
    );
};

export default Book;