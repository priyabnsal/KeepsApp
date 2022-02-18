
import './App.css';
import React, { useEffect, useState } from 'react';

function App() {

  const [isExpanded, setExpanded] = React.useState(false);
  function expand() {
    setExpanded(true);
  }
  const [ data, setData] = useState([]);
  
  useEffect( () => {
    // get api
    // const url= 'https://jsonplaceholder.typicode.com/todos/';
    // const url= 'https://api.sampleapis.com/coffee/hot';
    // const url= 'https://jsonplaceholder.typicode.com/posts';
    // const url= 'https://objectsreturn20220216090415.azurewebsites.net/api/EmployeeData?code=MzbKkFBobncqGx5agRdIq71xitejo54EfotvyTuuB5yQbFsXUF0rAw==';
    const url= 'https://getpostoperations202202170931054.azurewebsites.net/api/EmployeeData?code=xggZxJsEzckXTm6RsZKCa/Uubs8LK5q966RgR3rp129ZF6NLVmqeAQ==';

    fetch(url).then(response => response.json())
    .then(json => {
      setData(json);
      // console.log(setData);
    }).catch(e => {
      console.log(e);
    })
  },[]);

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


    const url= 'https://jsonplaceholder.typicode.com/todos/';
    fetch(url, requestOptions).then(response => {
      console.log("response",response);
    })
    .catch(e => {
      console.log(e);
    });
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
            <textarea 
            className='txtarea' 
            onClick={expand}
            name="content" 
            placeholder="Take a note..." 
            value={txt} 
            rows={isExpanded ? 3 : 1}
            onChange={txtchange}
            />
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
              <h3>{item.firstName +" " +item.lastName} </h3>
              <p>
              <ol>
                <li>{item.employeeCode}</li>
                <li>{item.jobTitleName}</li>
                <li>{item.phoneNumber}</li>
                <li>{item.emailAddress}</li>
              </ol>
              </p>
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
