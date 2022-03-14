import React, { useState } from 'react';
import axios from 'axios';
import Books from './Books'
import dotenv from 'dotenv'

dotenv.config()
const KEY = "AIzaSyB_TBKJmU1lS0JXYwi-s_ynASZcMF9unco";

const Recommender = () => {
    const [search, setSearch] = useState('')
    const [books, setBooks] = useState()
    const [noBooks, setNoBooks] = useState('')
    const onClick = async () => {
        await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}&key=${KEY}`)
            .then(response => {
                console.log(response)
                if (response.data.totalItems === 0) {
                    setNoBooks("Can't recommend books for that subject, try a different one")
                } 
                setBooks(response.data.items)
            })
            .catch(error => console.log(error))
    }

    return (<div>
        <div className="ui input">
            <input style={{ width: "300px" }} type="text" placeholder="Search" autoFocus value={search} onChange={(e) => setSearch(e.target.value)} />
            <button onClick={onClick} className="ui icon button"><i aria-hidden="true" className="search icon"></i></button>
        </div>
        {books ? <Books books={books} /> : <div style={{marginTop: "10px"}}>{noBooks}</div>}
    </div>)
}

export default Recommender;