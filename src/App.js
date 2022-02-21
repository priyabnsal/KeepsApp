import React, { useEffect, useState } from 'react';
import './App.css';
import Notes from './Notes';
import Formmain from './Formmain';
import Header from './Header';
function App() {
  let dummy =[];
  
  const [expenses, setExpenses] =useState(dummy);
  function fetchData(){
      const url= 'https://getpostapidemo.azurewebsites.net/api/GetFunction?code=kEsdLM8a0BnMQiK86p0bo8NliFZ5Wn6cFRaJYu2GGw6ajhnx29psUA==';
      fetch(url)
      .then(response => response.json())
      .then(json => {
        setExpenses(json);
        // console.log(setData);
      }).catch(e => {
        console.log(e);
      });
    };
    useEffect( () => {
      // get api
      fetchData();
    },[]);


  const addHandler = (task) => {
    const url= 'https://getpostapidemo.azurewebsites.net/api/PostFunction?code=NNbJmiaYzZP3WIqEQx8VUqcAqKa4jPLtb5UXJhaS8tzC9lpXHmGLgg==';
    fetch(url, {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify(task)
    })
    .then(response => {
      console.log("response",response);
      fetchData();
    })
    .catch(e => {
      console.log(e);
    });
  };
  return (
    <>
    <Header/>
    <Formmain OnAddHandler = {addHandler}/>
    <Notes item ={expenses}/>
    
    </>
  );
}

export default App;
