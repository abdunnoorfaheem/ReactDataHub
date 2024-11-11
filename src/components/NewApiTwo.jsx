import React, { useEffect, useState } from 'react'
import axios from 'axios';

export const NewApiTwo = () => {

    let [apiData,setData]=useState([]);

    useEffect(()=>{

let  data=axios.get("https://dummyjson.com/products")
.then((res)=>{
    setData(res.data.products);
    console.log(res.data.products);
    
    
})
        
    },[])

    console.log(apiData);
    
  return (
    <section>
        <h1>Hello From Axios</h1>
        {apiData.map((item)=>(
            <div>
                <img src={item.thumbnail} alt="" />
                <p>{item.title}</p>
                <p>{item.description}</p>
                <p>{item.price}</p>
            </div>
        ))}
    </section>
  )
}
