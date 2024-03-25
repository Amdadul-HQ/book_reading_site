import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root/Root";
import Home from "../Pages/Home/Home";
import ListedBooks from "../Pages/ListedBooks/ListedBooks";
import PagesToRead from "../Pages/PagesToRead/PagesToRead";
import BookDetails from "../Pages/BookDetails/BookDetails";

export const router = createBrowserRouter([
    {
      path:'/',
      element:<Root></Root>,
      children:[
        {
            path:'/',
            element:<Home></Home>,
        },
        {
            path:'/listedbooks',
            element:<ListedBooks></ListedBooks>
        },
        {
            path:'/pagestoread',
            element:<PagesToRead></PagesToRead>
        },
        {
            path:'/booksdetails/:id',
            element:<BookDetails></BookDetails>,
            loader: async () => await fetch('/books.json')
        }
    ]
    }
])