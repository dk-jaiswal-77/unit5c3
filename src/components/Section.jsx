import { useParams } from "react-router-dom";
import {useState, useEffect} from "react";
import { Link } from "react-router-dom";

import "./Section.css";

export default function Section(){
    const {cat} = useParams();

    const [books, setBooks] = useState([]);

    async function getBooksAgain(){
        try{
            let res = await fetch("http://localhost:8080/books");
            let res_data = await res.json();
            let new_data = res_data.filter((book)=>{
                return(book.section === cat);
            });
            console.log(new_data);
            setBooks(new_data);
        }catch(error){
            console.log(error);
        }
    }

    useEffect(()=>{
        getBooksAgain();
    },[]);

    return (
        <div>
            <h2>{cat}</h2>
            <div id="section_container">
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