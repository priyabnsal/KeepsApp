import React  from 'react';
import './Note.css'
const Note = (props) => {
  
  const deleteNote = (id) => {
    const url= `https://getpostapidemo.azurewebsites.net/api/DeleteFunction?code=z4CMEFr7bzcA3ayaakndj7MDZXrrSTmAnF48oLCr8lS1TGUT7DEYcA==&id=${id}`;
      fetch(url,{
        method:'DELETE'
      })
      // .then(response => response.json())
      .then(response => {
        console.log("response",response);
        // props.onfetch();
      })
      .catch(e => {
        console.log(e);
      });
    };
    
    const updateNote = (id) => {
      const url= `https://getpostapidemo.azurewebsites.net/api/UpdatedFunction?code=NrYDSjYL4Hdzu4pH6653/BJpPQueT5jquamEqATE/qQ3nsEtx0uxbw==?id=${id}`;
      fetch(url,{
        method:'PUT'
      })
      .then(response => response.json())
      .then(response => {
        console.log("response",response);
        
      })
      .catch(e => {
        console.log(e);
      });
    }
  return (
      <>
      
      <div className='NotInput'>
            <h3>{props.title}</h3>
            <p>{props.text}</p>
            
          <button onClick={() => deleteNote(props.id)} > Delete </button>
          <button onClick={() => updateNote(props.id)} > Update </button>
        </div>
        
      
      </>
  );
};

export default Note;
