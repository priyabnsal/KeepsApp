import React from 'react';
import './FormItems.css';
import FormItems from './FormItems';


const Formmain = (props) => {
    
    const savedataHandler = (main) => {
        const valueData={
            ...main,
            id:Math.random().toString()
        }
        props.OnAddHandler(valueData);
        console.log(valueData);
    };
  return (
      <>
      <div className='App'>
        <FormItems OnSave={savedataHandler}/>
      </div>
      </>
      );
};

export default Formmain;
