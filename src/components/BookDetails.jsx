import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function BookDetails(){

    const {id} = useParams();

    const [book, setBook] = useState(
        {
            "id" : "",
            "title":"",
            "imageUrl":"",
            "description":"",
            "reviews":[],
            "author":"",
            "price": "",
            "section": "",
            "isbnNumber": ""
        }
    );

    async function getBook(){
        try{
            const res = await fetch(`http://localhost:8080/books/${id}`);
            const res_data = await res.json();
            setBook(res_data);
        }catch(error){
            console.log(error);
        }
    }

    useEffect(()=>{
        getBook();
    },[]);

    return(
        <div>
            <img src={book.imageUrl} alt="" />
            <h2>{book.title}</h2>
            <h2>Price : Rs{book.price}</h2>
            <h2>Section: {book.section}</h2>
            <h3>Author: {book.author}</h3>
            <p>{book.description}</p>
            <h3>ISBN: {book.isbnNumber}</h3>
            {book.reviews.map((review)=>{
                return(
                    <p>{review}</p>
                );
            })}
        </div>
    );
}