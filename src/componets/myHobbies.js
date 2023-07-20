import React from 'react';
import books from '../data/bookList';

import './../style/table.css';
import './../style/componets/myhobbies.css';

const MyHobbies = () => (
    <div className='myhobbies'>
    <h3>Passions</h3>
    <p>I'm a passionate bookworm who finds solace in the pages of literary wonders, and when I'm not lost in the world of words, you can find me running, chasing after both dreams and miles.</p>
    <table>
        <thead>
            <tr>
                <td>Title</td>
                <td>Author</td>
                <td>Rating</td>
            </tr>
        </thead>
        <tbody>
        {books.map((book) => (
            <tr>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.rating}</td>
            </tr>
        ))}
        </tbody>
    </table>
    </div>
);
export default MyHobbies;