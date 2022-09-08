import React, { useState } from 'react'
import axios from 'axios';

function Axios() {
    const [state, setSate] = useState([]);
  return (
    <div>
      <h1>Data From Axios</h1>
      <button onClick={()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts').then((response)=>{
            setSate(response.data);
        })
      }}>Click</button>
      {state.map((obj,index)=> {
        return (
            <div style={{color:'white'}}>
                <h1>{index}</h1>
                <h1>{obj.title}</h1>
                <h5>{obj.body}</h5>
            </div>
        )
      })}
    </div>
  )
}

export default Axios
