import React, { useEffect, useState } from 'react';
import Note from './Note';
import Card from './Card';
function Notes(props) {
  
  return (
    <>
    {
      props.item.map(
        data => (
          <Note 
            key= {data.id}
              title={data.title} 
              txt={data.text}/>
        )
      )
    }
    
    
    </>
  );
}

export default Notes;
