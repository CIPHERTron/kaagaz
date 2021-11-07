import React from 'react';
import { BookComponent } from '../styles/bookanimation.styles';

const BookAnimation = ({ src, btnText, color, source, author }) => {
  return (
    <BookComponent>
      <ul className='align'>
        <li>
          <figure className='book'>
            <ul className='hardcover_front'>
              <li>
                <div className={`coverDesign ${color}`}>
                  <h1>Kaagaz</h1>
                  <p>By D361</p>
                </div>
              </li>
              <li></li>
            </ul>

            <ul className='page'>
              <li></li>
              <li>
                <a className='btn' href={src}>
                  {btnText}
                </a>
              </li>
              <li></li>
              <li></li>
              <li></li>
            </ul>

            <ul className='hardcover_back'>
              <li></li>
              <li></li>
            </ul>
            <ul className='book_spine'>
              <li></li>
              <li></li>
            </ul>
            <figcaption>
              <h2>{source}</h2>
              <span>By {author}</span>
            </figcaption>
          </figure>
        </li>
      </ul>
    </BookComponent>
  );
};

export default BookAnimation;
