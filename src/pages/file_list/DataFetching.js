import axios from 'axios'
import React,{useState, useEffect, version} from 'react'

 const  Versions=({id})=>{
  const [versions ,setVersions]= useState([])
   useEffect(() => { 
      axios.get(`http://localhost:8080/files/ListVersions/${id}`)
    .then(res=>{
     console.log(res.data)
     setVersions(res.data)
    })
     .catch(err=>{
       console.log(err) 
    })
  },[])
  return(
    <div>
      
       { versions.map(version => <li key={version[0]}>{version[1]}</li>)}
     
    </div>
  )
}

export default Versions
