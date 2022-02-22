import React, { useEffect, useState } from 'react';
import './App.css';
import Notes from './Notes';
import Formmain from './Formmain';
import Header from './Header';
import { Route, Switch } from "react-router-dom";

function App() {
  let dummy =[];
  
  const [expenses, setExpenses] = useState(dummy);
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
      console.log("data->",task);
      fetchData();
    })
    .catch(e => {
      console.log(e);
    });
  };

  function updateUser(tasks)
  {
    const url= 'https://6213733cf43692c9c605221f.mockapi.io/api/keep';
    fetch(url, {
      method: 'PUT',
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
      },
      body:JSON.stringify(tasks)
    }).then((result) => {
      result.json().then((resp) => {
        console.warn(resp)
        fetchData();
      })
    })
  }
  return (
    <>
    <Header/>
    
    <div className="container mt-3">
      <Switch>
        <Route exact path="/" />
        <Route exact path="/update" />
        <Route path="/delete"  />
      </Switch>
    </div>
  
    <Formmain OnAddHandler = {addHandler} />
    <Notes item ={expenses}/>
    
    </>
  );
}

export default App;
