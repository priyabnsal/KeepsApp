import React from 'react';
import Note from './Note';
function Notes(props) {
  
  return (
    <>
    {
      props.item.map(
        data => (
          <Note 
            key= {data.id}
            id={data.id}
              title={data.title} 
              text={data.text}
              />
              
        )
      )
    }
    
    </>
  );
}

export default Notes;
