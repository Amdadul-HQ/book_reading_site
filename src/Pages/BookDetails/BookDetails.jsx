import '../../assets/font.css'
import { Link, useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addToLocalStorage, addToLocalStorageWishListed, getLocalStorage } from '../../utility/SetToLocalStorage';

const BookDetails = () => {
    
    const books = useLoaderData()
    const {id} = useParams()

    const showBook = books.find( book => book.bookId == id)
    const {bookId,image,bookName,author,category,review,tags,totalPages,rating,publisher,yearOfPublishing} = showBook

    const handleReadBtn = id => {
        addToLocalStorage(id)
    }
    const handleWishListedBtn = id => {
            const saveId = getLocalStorage()
            if(saveId){
                const allReadyExist = saveId.find( Id => Id == id)
                if(allReadyExist){
                    return toast.error('You All Ready Read This Book')
                }
            }
            addToLocalStorageWishListed(id)
    }

    return (
        <section className='flex md:flex-row flex-col justify-between md:px-0 md:my-0 my-11 px-5 gap-x-12 font-work'>
            <div className='md:w-[50%]  bg-[rgba(19,19,19,0.05)] rounded-2xl p-[72px] flex justify-center items-center'>
                <img className='h-[560px] object-contain' src={image} alt="" />
            </div>
            <div className='md:w-[48%] space-y-4 md:mt-0 mt-5'>
                <h1 className='text-[#131313] text-4xl font-bold font-playfair'>{bookName}</h1>
                <hr />
                <p className='text-[rgba(19,19,19,0.80)] text-xl font-medium'>By : {author}</p>
                <hr />
                <p className='text-[rgba(19,19,19,0.80)] text-xl font-medium'>{category}</p>
                <p className='text-base text-[rgba(19,19,19,0.70)] font-normal'><span className='text-base font-bold text-[#131313]'>Review :</span> {review}</p>
                <div className="flex gap-x-3">
                    {
                        tags.map( (tag,index) => <p className="text-[#23BE0A] text-base font-medium px-4 py-2 rounded-[30px] bg-[rgba(35,190,10,0.05)]" key={index}>#{tag}</p> )
                    }
                </div>
                <hr />
                <div className='text-left md:w-[60%] space-y-4'>
                <p className='flex justify-between text-base text-[rgba(19,19,19,0.70)] font-normal'>Number of  Pages : <span className='text-base font-semibold text-[#131313]'>{totalPages}</span></p>
                <p className='flex justify-between text-base text-[rgba(19,19,19,0.70)] font-normal'>Publisher : <span className='text-base font-semibold text-[#131313]'>{publisher}</span></p>
                <p className='flex justify-between text-base text-[rgba(19,19,19,0.70)] font-normal'>Year Of Publishing : <span className='text-base font-semibold text-[#131313]'>{yearOfPublishing}</span></p>
                <p className='flex justify-between text-base text-[rgba(19,19,19,0.70)] font-normal'>Rating: <span className='text-base font-semibold text-[#131313]'>{rating}</span></p>
                </div>
                <div className='flex gap-x-4 mt-2'>
                    <Link ><button onClick={() => handleReadBtn(bookId)} className='text-[#131313] border border-[rgba(19,19,19,0.30)] bg-white hover:bg-[#23BE0A] hover:border-[#23BE0A] hover:text-white py-4 px-7 text-lg font-semibold rounded-lg'>Read</button></Link>
                    <Link ><button onClick={() => handleWishListedBtn(bookId)} className='text-white bg-[#59C6D2] py-4 px-7 text-lg font-semibold transition-all rounded-lg hover:bg-[#48a3ad]'>Wishlist</button></Link>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </section>
    )
};

export default BookDetails;

