import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchQuote } from '../feature/quote/quoteSlice';

const Quote = () => {
  const dispatch = useDispatch();

  const handleFetch = () => {
    dispatch(fetchQuote());
  };

  useEffect(() => {
    handleFetch();
  }, []);

  const { quoteData, isLoading, isError } = useSelector(
    (state) => state.quotes
  );

  if (isLoading) {
    return (
      <div class='card'>
        <div class='card-body'>
          <h5 class='card-title placeholder-glow'>
            <span class='placeholder col-12 placeholder-lg'></span>
          </h5>
          <p class='card-text placeholder-glow d-flex flex-column align-items-end mt-4'>
            <span class='placeholder col-2 float-end'></span>
            <span class='placeholder col-1 float-end mt-3'></span>
          </p>
          <button
            class='btn btn-success disabled placeholder col-12 mt-3'
            aria-disabled='true'
          ></button>
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className='py-2'>
        <h1 className='display-4 text-center text-danger'>
          Somthing Went Wrong!
        </h1>
      </div>
    );
  }

  if (!quoteData) {
    return (
      <div class='card'>
        <div class='card-body'>
          <h5 class='card-title placeholder-glow'>
            <span class='placeholder col-12 placeholder-lg'></span>
          </h5>
          <p class='card-text placeholder-glow d-flex flex-column align-items-end mt-4'>
            <span class='placeholder col-2 float-end'></span>
            <span class='placeholder col-1 float-end mt-3'></span>
          </p>
          <button
            class='btn btn-success disabled placeholder col-12 mt-3'
            aria-disabled='true'
          ></button>
        </div>
      </div>
    );
  }

  return (
    <div className='card p-4 shadow'>
      <h1 className='card-title display-4'>{quoteData.content}</h1>
      <span>
        <p className='card-text text-secondary float-end'>
          - {quoteData.author}
        </p>
      </span>
      <span>
        <span>
          <p className='badge text-bg-warning float-end mt-2'>
            {quoteData.tags}
          </p>
        </span>
      </span>
      <button className='btn btn-success w-100 mt-4' onClick={handleFetch}>
        Get More Quotes
      </button>
    </div>
  );
};

export default Quote;
