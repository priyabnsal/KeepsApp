import React, { useState } from 'react';
import './FormItems.css'


const FormItems = (props) => {
    const [isExpanded, setExpanded] = React.useState(false);
  function expand() {
    setExpanded(true);
  }
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


    const sumbithandler= (event) => {
      event.preventDefault();
      
      const value = {
        title:titles,
        txt:txt
      };
      props.OnSave(value);
      console.log(value);
      setTitle('');
      setTxt('');
      
    }
// Post API
  // const requestOptions = ;
  const sumbithander = (event) => {
    // const url= 'https://getpostapidemo.azurewebsites.net/api/PostFunction?code=NNbJmiaYzZP3WIqEQx8VUqcAqKa4jPLtb5UXJhaS8tzC9lpXHmGLgg==';
    // fetch(url, {
    //   method: 'POST',
    //   headers: { 
    //     'Content-Type': 'application/json',
    //     'Access-Control-Allow-Origin': '*'
    //   },
    //   body: JSON.stringify(value)
    // })
    // .then(response => {
    //   // console.log("response",response);
      
    // })
    // .catch(e => {
    //   console.log(e);
    // });
  };
  return (
      <>
      
      <form onSubmit={sumbithandler}>
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
          <button type='submit' onClick={sumbithander} className='btn'> + </button>
      </div>
    </form>
      
      </>
      );
};

export default FormItems;
