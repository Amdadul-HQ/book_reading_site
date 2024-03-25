import {  toast } from "react-toastify";

export const getLocalStorage = () => {
    const storeItem = localStorage.getItem('Id');
    if(storeItem){
        return JSON.parse(storeItem);
    }
    else{
        return []
    }
}

export const addToLocalStorage = (id)=> {
    const saveItem = getLocalStorage()
    const exist = saveItem.find( item => item == id )
    if(exist){
      return toast.error('Already Read This Book');
    }
    else{
        toast.success('Congratulations You Read This Book')
        saveItem.push(id)
        localStorage.setItem('Id',JSON.stringify(saveItem))
    }
}

export const getWishListedId = () => {
    const storeItem = localStorage.getItem('wishId');
    if(storeItem){
        return JSON.parse(storeItem)
    }
    else{
        return []
    }
}

export const addToLocalStorageWishListed = (id) => {
            const wishlist = getWishListedId()
            const exist = wishlist.find( item => item == id )
            if(exist){
                return toast.error('Already Added To wish list');
            }
            else{
                toast.success('Successfully Added To Wish List')
                wishlist.push(id)
                localStorage.setItem('wishId',JSON.stringify(wishlist))
            }
}

