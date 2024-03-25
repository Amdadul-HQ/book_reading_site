import { SlLocationPin } from "react-icons/sl";
import { HiOutlineUsers } from "react-icons/hi";
import { HiOutlineNewspaper } from "react-icons/hi2";
import { Link } from "react-router-dom";
const ReadBook = ({book}) => {
    const {bookId,image,bookName,author,tags,yearOfPublishing,publisher,totalPages,category,rating} = book
    return (
        <div className="flex gap-x-6 p-6 rounded-2xl border">
            <div className="bg-[rgba(19,19,19,0.05)] flex justify-center items-center w-[230px] h-[230px] rounded-xl">
                <img src={image} alt="" />
            </div>
            <div className="flex-grow flex flex-col justify-around">
                <h1 className="font-playfair text-2xl text-[#131313] font-bold">{bookName}</h1>
                <p className="text-[rgba(19,19,19,0.80)] text-base font-medium">By :{author}</p>
                <div className="flex gap-x-3">
                    {
                        tags.map( (tag,index) => <p className="text-[#23BE0A] text-base font-medium px-4 py-2 rounded-[30px] bg-[rgba(35,190,10,0.05)]" key={index}>#{tag}</p> )
                    }
                    <p className="flex items-center gap-x-2 text-[rgba(19,19,19,0.80)]"><SlLocationPin></SlLocationPin> Year of Publishing : {yearOfPublishing}</p>
                </div>
                    <div className="flex items-center gap-x-5">
                        <p className="flex gap-x-2 text-[rgba(19,19,19,0.60)] text-base font-normal"><HiOutlineUsers></HiOutlineUsers>Publisher: {publisher}</p>
                        <p className="flex gap-x-2 text-[rgba(19,19,19,0.60)] text-base font-normal"><HiOutlineNewspaper></HiOutlineNewspaper> Page: {totalPages}</p>
                    </div>
                    <hr className="my-5"/>
                    <div className="flex gap-x-3">
                        <p className="bg-[rgba(50,142,255,0.15)] py-3 px-5 rounded-[30px] text-[#328EFF] text-base font-normal">Category: {category}</p>
                        <p className="bg-[rgba(255,172,51,0.15)] py-3 px-5 rounded-[30px] text-[#FFAC33] text-base font-normal">Rating: {rating}</p>
                        <Link to={`/booksdetails/${bookId}`}><button className="bg-[#23BE0A] py-3 px-5 rounded-[30px] text-white text-base font-normal">View Details</button></Link>
                    </div>
            </div>
        </div>
    );
};

export default ReadBook;