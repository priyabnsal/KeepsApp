import React from 'react';
import Note from './Note';
import App from './App';

function Notes(props) {
  // <Note 
  //   key= {data.id}
  //   id={data.id}
  //     title={data.title} 
  //     text={data.text}
  //     />
  
  return (
    <>
    <App
              key= {props.id}
              id={props.id}
                title={props.title} 
                text={props.text}
                />
     {/*           
    {
      props.item.map(
        data => (
              <App
              key= {data.id}
              id={data.id}
                title={data.title} 
                text={data.text}
                />
              
        )
      )
    }
    */}
    </>
  );
}

export default Notes;
