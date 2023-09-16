import React from 'react';
import Quote from './components/Quote';

const App = () => {
  return (
    <div className='container my-5'>
      <h1 className='display-3 text-center my-5'>Daily Quotes</h1>
      <Quote />
    </div>
  );
};

export default App;
