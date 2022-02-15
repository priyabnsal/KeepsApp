
import './App.css';
import React, { useEffect, useState } from 'react';

function App() {

  const [ data, setData] = useState([]);
  
  useEffect( () => {
    // get api
    // const url= 'https://jsonplaceholder.typicode.com/todos/';
    const url= 'https://jsonplaceholder.typicode.com/posts';
    fetch(url).then(response => response.json())
    .then(json => {
      setData(json)
    }).catch(e => {
      console.log(e);
    })
  },[])

  // -----------------------------------------

  const [titles,setTitle] = useState('');
    const [txt,setTxt] = useState('');

    const titlechange = (event) => {
        setTitle(event.target.value);
    };
    const txtchange = (event) => {
        setTxt(event.target.value);
    };
// ------------------------------------------
  // Post API
  const value = {
    title:'First',
    txt:"hello my name is"
  };
  const requestOptions = {
    method: 'POST',
    headers: { 
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify(value)
};
  const postputEvent = (event) => {
    event.preventDefault();
    // const updData=[value, ...d];
    // setD(updData);

    console.log(value);


    // const url= 'https://jsonplaceholder.typicode.com/todos/';
    // fetch(url, requestOptions).then(response => {
    //   console.log("response",response);
    // })
    // .catch(e => {
    //   console.log(e);
    // });
    setTitle('');
        setTxt('');
  };
  
    
    return (
      <>
      <div className='App'>
      <div className='nav'>Keep App</div>
    <form onSubmit={postputEvent}>
        <div className='NoteInput'>
            <input className='title' type='text' 
            value={titles} 
            name='title'
            onChange={titlechange} 
            placeholder='Title'/>
 
            <textarea className='txtarea' 
            name="content" id="" cols="30" rows="1" 
            placeholder="Take a note..." 
            value={txt} 
            onChange={txtchange}></textarea>
            </div>
        
        <div>
            <button type='submit' onClick={postputEvent} className='btn'> + </button>
        </div>
      </form>
         
        {
          data.map( (item) => {
            return(
              <>
              <div className='NotInput'>
              <h3>{item.id}</h3>
              <p>{item.title}</p>
              </div>
              </>
              )
          })
        }
      </div>
    </>
  );
}

export default App;
