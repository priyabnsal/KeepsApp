import React, { useEffect, useState } from 'react';
import './App.css';
// import Notes from './Notes';
import Formmain from './Formmain';
import Header from './Header';
// import {Helmet} from "react-helmet";
function App() {
  let dummy =[];
  
  const [expenses, setExpenses] = useState(dummy);
  
  // -------- GET api-------------
  const fetchData = async() => {
    const url = 'https://getpostapidemo.azurewebsites.net/api/GetFunction?code=kEsdLM8a0BnMQiK86p0bo8NliFZ5Wn6cFRaJYu2GGw6ajhnx29psUA==';
    
      // const url= 'https://6213733cf43692c9c605221f.mockapi.io/api/keep';
      const response = await fetch(url);
      const data = await response.json();
      setExpenses(data);
        // console.log(setData);
    };
    useEffect( () => {
      fetchData();
    },[]);
    // <meta http-equiv="Content-Security-Policy" content="script-src 'self'; style-src 'self'; ..." >
    // ------- POST api ------------
    const addHandler = (task) => {
    const {id, title, text} = task;
    const url= `https://getpostapidemo.azurewebsites.net/api/PostFunction?code=NNbJmiaYzZP3WIqEQx8VUqcAqKa4jPLtb5UXJhaS8tzC9lpXHmGLgg==&id=${id}&title=${title}&text=${text}`;
    // const url= 'https://6213733cf43692c9c605221f.mockapi.io/api/keep';
    fetch(url, {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        // "Content-Security-Policy": 'default-src "self" script-src "none" font-src "none"'
      },
      body: JSON.stringify({
        id, title, text
      })
    })
    .then(response => {
      console.log("data->",task);
      fetchData();
    })
    .catch(e => {
      console.log(e);
    });
  };

  // ------------ DELETE api -----------
  const deleteNote = (id) => {
    const url= `https://getpostapidemo.azurewebsites.net/api/DeleteFunction?code=z4CMEFr7bzcA3ayaakndj7MDZXrrSTmAnF48oLCr8lS1TGUT7DEYcA==&id=${id}`;
    // const url= `https://6213733cf43692c9c605221f.mockapi.io/api/keep/${id}`;
      fetch(url,{
        method:'DELETE'
      })
      .then(response => {
        console.log("response",response);
        fetchData();
      })
      .catch(e => {
        console.log(e);
      });
    };

  const [id, setid] = useState([])
  const [title, settitle] = useState("");
  const [text, settext] = useState("");
  
  function selectUser(item)
  {
    console.log(item);
    // let item=id;
      setid(item.id)
      settitle(item.title)
      settext(item.text);
    }
  function updateUser()
  {
    // console.log(title, text);
    let item={id, title, text}
    console.log("id->",id)
    fetch(`https://getpostapidemo.azurewebsites.net/api/UpdatedFunction?code=NrYDSjYL4Hdzu4pH6653/BJpPQueT5jquamEqATE/qQ3nsEtx0uxbw==&id=${id}&title=${title}&text=${text}`, {
    // fetch(`https://6213733cf43692c9c605221f.mockapi.io/api/keep/${id}`, {
    method: 'PUT',
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
      },
      body:JSON.stringify(item)
    }).then((result) => { result.json()
    })
    .then((resp) => {
      fetchData();
    })
  }
  return (
    <>
      <Header/>
      {/* <div className='nav'>Keep App</div> */}
    <Formmain OnAddHandler = {addHandler} />
    
    {
      expenses.map((curEle) => {
        return (
          <div key={curEle.id} className='NotInput'>
            <h3>{curEle.title}</h3>
            <p>{curEle.text}</p>
                  
            <button className="m-3 btn-sm btn-danger" onClick={() => deleteNote(curEle.id)} > Delete </button>
            <button className="m-3 btn-sm btn-warning" onClick={() => selectUser(curEle)} > Edit </button>
          </div>
        )
      })
    }

    
    <h4>Please click on a Note to edit...</h4>
      <input type="text" className='' value={title} placeholder="Title" onChange={(e)=>{settitle(e.target.value)}} /> <br /><br />
        <input type="text" value={text} placeholder="Take a Note ..." onChange={(e)=>{settext(e.target.value)}} /> <br /><br />
         
        <button className="badge badge-warning" onClick={updateUser} >Update</button>  
      

    </>
  );
}

export default App;