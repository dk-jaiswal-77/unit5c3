import "./Home.css"

import { Link } from "react-router-dom";
import { useState, useEffect } from "react";


export default function Home (){

    const [books, setBooks] = useState([]);

    async function getBooks(){
        try{
            const res = await fetch("http://localhost:8080/books");

            const res_data = await res.json();

            setBooks(res_data);

        }catch(error){
            console.log(error);
        }
    }

    useState(()=>{
        getBooks();
    }, []);

    function sortBooks(e){
        let new_books = [...books];
        const id = e.target.id;
        if(id === "title_asc")
        {
            new_books.sort((a, b) => {
                if(a.title < b.title)
                {
                    return -1;
                }
                else{
                    return 1;
                }
            });

            setBooks(new_books);
        }
        else if(id === "title_desc")
        {
            new_books.sort((a, b) => {
                if(a.title < b.title)
                {
                    return 1;
                }
                else{
                    return -1;
                }
            })
            setBooks(new_books);
        }
        else if(id === "price_asc")
        {
            new_books.sort((a, b)=>{
                return (a.price-b.price);
            })
            setBooks(new_books);
        }
        else if(id === "price_desc")
        {
            new_books.sort((a, b)=>{
                return (b.price - a.price);
            })
            setBooks(new_books);
        }
    }

    return(
        <div>
            <h2>Home</h2>
            <div>
                <button id="title_asc" onClick={(e)=>{
                    sortBooks(e);
                }}>Sort By Title Asc</button>
                <button id="title_desc" onClick={(e)=>{
                    sortBooks(e);
                }} >Sort By Title Desc</button>
                <button id="price_asc" onClick={(e)=>{
                    sortBooks(e);
                }} >Sort By Price Asc</button>
                <button id="price_desc" onClick={(e)=>{
                    sortBooks(e);
                }} >Sort By Price Desc</button>
            </div>
            <div id="books_container">
                {books.map((book)=>{
                    return(
                        < Link to={`/books/${book.id}`} key = {book.id} >
                            <img src={book.imageUrl} alt="" />
                            <h2>{book.title}</h2>
                            <h4>{book.price}</h4>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}