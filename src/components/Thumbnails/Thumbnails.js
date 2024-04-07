import React from 'react';
import { Link } from 'react-router-dom';
import classes from './thumbnails.module.css';
import Price from '../Price/Price';

export default function Thumbnails({ books }) {
  return (
    <ul className={classes.list}>
      {books.map(book => (
        <li key={book.id}>
          <Link to={`/book/${book.id}`} className={classes.link}>
            <div className={classes.thumbnail}>
              <img className={classes.image}
                src={`${book.imageUrl}`}
                alt={book.name}
              />
              <div className={classes['book-info']}>
                <div className={classes['book-name']}>{book.name}</div>
                <div className={classes['author-name']}>Author: {book.publisher}</div>
                <div className={classes['price']}>
                  <Price price={book.price} />
                </div>
              </div>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
