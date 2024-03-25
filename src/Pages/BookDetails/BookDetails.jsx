import { useLoaderData } from "react-router-dom";

const BookDetails = () => {
    const books = useLoaderData()
    console.log(books);

    return (
        <section>
            <div>

            </div>
            <div></div>
        </section>
    );
};

export default BookDetails;