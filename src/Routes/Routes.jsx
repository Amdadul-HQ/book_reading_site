import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root/Root";
import Home from "../Pages/Home/Home";
import ListedBooks from "../Pages/ListedBooks/ListedBooks";
import PagesToRead from "../Pages/PagesToRead/PagesToRead";
import BookDetails from "../Pages/BookDetails/BookDetails";
import ReadList from "../Component/ReadList/ReadList";
import Wishlist from "../Component/Wishlist/Wishlist";
import Error from "../Pages/Error/Error";

export const router = createBrowserRouter([
    {
      path:'/',
      element:<Root></Root>,
      errorElement:<Error></Error>,
      children:[
        {
            path:'/',
            element:<Home></Home>,
        },
        {
            path:'/listedbooks',
            element:<ListedBooks></ListedBooks>,
            children:[
                {
                    index:true,
                    element:<ReadList></ReadList>,
                    loader: async() => await fetch('/books.json'),
                },
                {
                    path:'wishlist',
                    element:<Wishlist></Wishlist>,
                    loader: async() => await fetch('/books.json'),
                }
            ]
        },
        {
            path:'/pagestoread',
            element:<PagesToRead></PagesToRead>,
            loader: async () => await fetch('/books.json')
        },
        {
            path:'/booksdetails/:id',
            element:<BookDetails></BookDetails>,
            loader: async () => await fetch('/books.json')
        }
    ]
    }
])