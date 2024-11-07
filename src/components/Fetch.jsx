// import React from 'react'

import { useEffect, useState } from "react"

export const Fetch = () => {

let [fetchDataFromApi,setData]=useState([]);




useEffect(()=>{
    fetch('https://dummyjson.com/products')
    .then((res)=>res.json())
    .then((data)=>{

        setData(data.products);
    })
    

},[]);
console.log(fetchDataFromApi);

return(
<section>

    <h1 style={{ textAlign:"center" }}>This is From Api(Application Programming Interface) Data</h1>

   <div style={{ display:"flex",flexWrap:"wrap",justifyContent:"center",gap:"20px" }}> {fetchDataFromApi.map(item=>(



<div style={{border:"none",padding:"10px",background:"lightBlue",borderRadius:"15px",boxShadow:"2px 3px 3px 2px"  }}>
<img src={item.thumbnail} alt="" />
    <p style={{ textAlign:"center",fontWeight:"900",fontSize:"18px", }}>{item.title}</p>
    
   <div style={{ display:"flex",justifyContent:"space-between",margin:"10px" }}> <button style={{ padding:"10px 25px",border:"none",background:"#00d2ff ",borderRadius:"7px",color:"white" }}>Buy</button>
   <p style={{ textAlign:"right",fontWeight:"800" }}>${item.price}</p></div>
</div>


   ))}</div>
</section>


)




}
