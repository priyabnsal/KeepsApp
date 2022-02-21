import React  from 'react';
import './Note.css'
const Note = (props) => {
  
  const deleteNote = (id) => {
    const url= 'https://getpostapidemo.azurewebsites.net/api/GetFunction?code=kEsdLM8a0BnMQiK86p0bo8NliFZ5Wn6cFRaJYu2GGw6ajhnx29psUA==';
      fetch(url+id,{
        method:'DELETE'
      })
      .then(response => response.json())
      .catch(e => {
        console.log(e);
      });
    };

  return (
      <>
      
      <div className='NotInput'>
            <h3>{props.title}</h3>
            <p>{props.txt}</p>
            
          <button type='submit' onClick={() => deleteNote(props.id)} className=''> Delete </button>
      
        </div>
    
      
      </>
  );
};

export default Note;
