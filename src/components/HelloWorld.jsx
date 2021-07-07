import React from 'react';

const HelloWorld = () => {
  const HELLO = '¡Hello World!';
  const isTrue = false;
  return (
    <div className="HelloWorld">
      <h1>{HELLO}</h1>
      <h2>Basic React Course</h2>
      <img src="https://arepa.s3.amazonaws.com/react.png" alt="React" />
      {isTrue ? <h4>Is True!</h4> : <h5>Is False!</h5>}
      {isTrue && <h5>True</h5>}
    </div>
  );
};

export default HelloWorld;
