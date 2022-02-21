import React, { useEffect, useState }  from 'react';
import './API.css'
import FormItems from './FormItems';

let arra= [];
const API = (props) => {

  const [d, setD] = useState(arra);
    const[user, setUser]= useState([]);

  const getData = async () => {
    const response= await fetch('https://api.github.com/users');
    const ddd = await response.json()
    setD( ddd);
    console.log(ddd);
  };
  useEffect( () => {
    getData();
  },[]);


  const datalistHandler = (datalist) => {  
    // const updData=[datalist, ...d];
    // setD(updData);

    // console.log(datalist);
    fetch('https://api.github.com/users',{
      method:'POST',
      body:JSON.stringify(datalist),
      headers:{
        'content-Type': 'application/json'
      }
    });
  };
  
  return (
      <>
      <FormItems onSave={datalistHandler}/>
      <div className='NotInput'>
      <h3>Title</h3>
      <br/>
      <p>This the cotent</p>
      </div>
      {
        d.map( (curEle) => {
          return(
            <>
               <div className='NotInput'>
               
              <h3>{curEle.login}</h3>
              <br/>
              <p>{curEle.avatar_url}</p>
              </div>
               </>
            
          )
        })
      }
      
      </>
  );
};

export default API;
