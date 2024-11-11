import React, { useEffect, useState } from 'react'

export const NewApi = () => {

    let[newApiData,setData]=useState([]);

    
useEffect(()=>{

    fetch("https://dummyjson.com/products")
    .then((res)=>res.json())
    .then((data)=>{
        setData(data.products);
        
    })
},[])

    console.log(newApiData);
    
  return (
    

<section>
  <h1>Data From Api</h1>
  <div style={{ display:"flex",flexWrap:"wrap",gap:"15px",color:"white",justifyContent:"center" }}>
  {newApiData.map((item)=>(
      <div style={{ background:"#121050",padding:"10px",borderRadius:"15px",fontWeight:800 }}>
          <img src={item.thumbnail} alt="" />
          <p>{item.title}</p>
          <p>{item.price}</p>
      </div>
    ))}
  </div>
</section>
        
    
    
   
   
  )
}
