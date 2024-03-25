import { useLoaderData } from "react-router-dom";
import { getLocalStorage } from "../../utility/SetToLocalStorage";
import ReadBook from "../ReadBook/ReadBook";


const ReadList = () => {
    const books = useLoaderData()
    const readBook = getLocalStorage()
    const showReadBook = books.filter( book => readBook.includes(book.bookId))
    return (
        <div className="space-y-6">
            {
                showReadBook.map( book => <ReadBook key={book.bookId} book={book}></ReadBook> )
            }
        </div>
    );
};

export default ReadList;