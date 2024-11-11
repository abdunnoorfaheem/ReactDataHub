import axios from 'axios'
import React, { useState } from 'react'

export const NewData = () => {

    let [apiData,setData]=useState([]);

    let dataShow=axios.get('https://dummyjson.com/products')
    .then((res)=>{

       
        setData(res.data.products);
        
    })
  return (
    <section>
          <h1 style={{ textAlign:"center" }}>Data From Api [Using axios]</h1>
 
<div style={{ display:"flex",flexWrap:"wrap",gap:"15px",justifyContent:"center" }}> {
   apiData.map((item)=>(
  <div style={{ background:"lightblue",borderRadius:"15px",padding:"10px" }}>
    <img src={item.thumbnail} alt="" />
     <p style={{ textAlign:"center" }}>{item.title}</p>
     <p style={{ textAlign:"right" }}>{item.price}</p>
  </div>
 ))}</div>
 
    </section>
  )
}
    

