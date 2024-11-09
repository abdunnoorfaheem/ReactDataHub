import React, { useEffect, useState } from 'react'

export const DataView = () => {


    let  [apiData,setData]=useState([]);

    useEffect(()=>{
        fetch('https://dummyjson.com/products')
        .then((res)=>res.json())
        .then(data=>{
            setData(data.products);
            
        })
    })

    // console.log(apiData);




    return(
       

       <div style={{ display:"flex",flexWrap:"wrap",gap:"15px",padding:"5px",justifyContent:"center" }}>
          {
        apiData.map((item)=>(
        <div style={{ background:"lightblue",padding:"10px",borderRadius:"20px" }}>
            <img src={item.thumbnail} alt="" />
            <p  style={{ textAlign:"center" }}>{item.title}</p>
            <p style={{ textAlign:"right" }}>{item.price}</p>
        </div>
        
        

       ))
    }

    </div>
)
    
 }

