import React, { useEffect, useState } from 'react'
import classes from './bookPage.module.css'
import { useNavigate, useParams } from 'react-router-dom';
import { getById } from '../../services/bookservice';
// import Tags from '../../components/Tags/Tags';
import Price from '../../components/Price/Price';
import { UseCart } from '../../hooks/UseCart';
import NotFound from '../../components/NotFound/NotFound';

export default function BookPage1() {
    const [book,setBook]=useState({});
    const {id}=useParams();
    const {addToCart}=UseCart();
    const navigate=useNavigate();

    useEffect(()=>{
      getById(id).then(setBook)
    },[id]);


      const handleAddToCart=()=>{
          addToCart(book);
          // navigate('/cart')
      }
  return<>
      {!book?(<NotFound message="Book not found" linkText="Back to Home Page" />) :(
      <div className={classes.container}>
        <img className={classes.image}
                src={`${book.imageUrl}`}
                alt={book.name}
        />
      <div className={classes.details}>
          <div className={classes.header}>
            <span className={classes.name}>{book.name}</span>
            {/* <span className={classes.name}>{book.name}</span> */}
          </div>
          <div className={classes.publisher}>
            <span className={classes.publisher}>{book.publisher}</span>
          </div>
          <div className={classes.tags}>
            <span >{book.tags}</span>
          </div>
          <div className={classes.price}>
            <Price price={book.price}/>
          </div>
          <button onClick={handleAddToCart}>Add to Cart</button>
      </div>
      </div>
      )}
     </>
}
