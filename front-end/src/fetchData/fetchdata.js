import React, {useState,useEffect} from "react";
import axios from 'axios'
import "./fetchdata.css"

const FetchData =()=>{    
    const [user,setUser]=useState([])
    
       const  getFetch =()=>{      // axios use to fetch random user 
            axios.get('https://randomuser.me/api/').then((response)=>{
            
                 setUser([user,response.data.results])  
                 console.log(user) 
                 console.log(response.data.results) 
              }).catch(err=>console.log(err))   
            }
        
    
    return (
      <div className="randomUser"> 
      <h2>Random User</h2>
      <button onClick={()=>getFetch()}> get New User </button> 
      <p>{user}</p>

      </div>
    )
}

export default FetchData ;