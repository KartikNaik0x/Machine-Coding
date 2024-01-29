import { useEffect, useState } from 'react'

import './App.css'

function App() {
  const [search , setSearch] = useState("")
  const [suggestions, setSuggestions] = useState([])

 
  useEffect(()=>{

    const getdata = () =>{
      if(search.trim === " "){
        return;
      }
     fetch(`https://dummyjson.com/users/search?q=${search}`)
      .then((res)=> res.json())
      .then((data)=> setSuggestions(data))
      .catch((err)=>{
        console.log(err)
      })
  
    }
    getdata();
    console.log(suggestions)
  },[search])

  return (
   
     <div className = "user-search-container">
       
       <div className = "user-input-container">
         <div>
         <input 
            type= "text" 
            value ={search} 
            onChange={(e) => setSearch(e.target.value)} 
            placeholder="search text"
         />
         <ul className="unordered-list">
            {suggestions?.user?.map((user)=>{
              return (<li key={user.email}>
                <img 
                  src={user.image} 
                  alt={`${user.firstName} ${user.lastName}`}
                />
                <span>{user.firstName} {user.lastName}</span>
              </li>
              );
            })}
         </ul>
         </div>  
       </div>
     </div>
   
  )
}

export default App
