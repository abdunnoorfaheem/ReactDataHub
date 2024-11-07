import React, { useEffect } from 'react'

import { useState } from "react"

export const Api = () => {

    // let  api=()=>{
    //     console.log("Hi I am From Function");
        
    // }

    let [apiData,setApiData]=useState([]);

    useEffect(()=>{
fetch("https://dummyjson.com/products")
.then((res)=>res.json())
.then((data)=>{
    setApiData(data.products);
    
})
    },[]);
    console.log(apiData);
  return (
    <section>
        <h1 style={{ textAlign:"center",fontSize:"50px" }}>Data Show</h1>
        <p>{}</p>

        {/* <button >Click</button> */}


       <div className='' style={{ display:"flex",justifyContent:"center",flexWrap:"wrap",gap:"20px", }}> {apiData.map((item)=>(
          
          <div style={{ border:"none",background:"#fffee0",padding:"15px",borderRadius:"15px",boxShadow:"4px 4px 3px 2px", }}>
              <img src={item.thumbnail} alt="" />
              <h3 style={{ textAlign:"center" }}>{item.title}</h3>
              <p style={{ textAlign:"right",fontWeight:"800" }}>${item.price}</p>
              </div>
          
      ))}</div>
    </section>
  )
  
  
}
