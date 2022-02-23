import React, { useState } from 'react';
import './FormItems.css'


const FormItems = (props) => {
    const [isExpanded, setExpanded] = React.useState(false);
  function expand() {
    setExpanded(true);
  }
  // -----------------------------------------

  // const [id,setid] = useState('');
  const [text,setText] = useState('');
  const [titles,setTitle] = useState('');

//   const idchange = (event) => {
//     setid(event.target.value);
// };
    const textchange = (event) => {
        setText(event.target.value);
    };
    const titlechange = (event) => {
        setTitle(event.target.value);
    };
// ------------------------------------------


    const sumbithandler= (event) => {
      event.preventDefault();
      
      const value = {
        // id:id,
        text:text,
        title:titles
      };
      props.OnSave(value);
      console.log(value);
      // setid('');
      setText('');
      setTitle('');
      
    }
    // <input className='id' type='text' 
    //     value={id} 
    //     name='id'
    //     onChange={idchange} 
    //     placeholder='id'/>
    
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
          value={text} 
          rows={isExpanded ? 3 : 1}
          onChange={textchange}
          />
          </div>
      
      <div>
          <button type='submit' className='bt1'> + </button>
          
      </div>
    </form>
      
      </>
      );
};

export default FormItems;
