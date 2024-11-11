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
    {newApiData.map((item)=>(
      <div>
          <img src={item.thumbnail} alt="" />
          <p>{item.title}</p>
          <p>{item.price}</p>
      </div>
    ))}
</section>
        
    
    
   
   
  )
}
