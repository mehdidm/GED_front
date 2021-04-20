
 
 

import './File_list.css';
import axios from 'axios';
import {useDropzone} from 'react-dropzone';
import * as ReactBootstrap from "react-bootstrap" ;
import React ,{useState , useEffect , useCallback } from 'react';
import DataFetching from './DataFetching';
import Versions from './DataFetching';



 function File_list() {


 function Files(){
 
  const [files , setfiles] = useState ([]);
 async function FetchFiles () {
    await axios.get('files') . then(res =>{
      console.log(res.data)
      setfiles(res.data)
    });
  }
  useEffect(()=>{FetchFiles();},[]);
 return (
      <ReactBootstrap.Table striped bordered hover>
      <thead>
        <tr>
          <th>Name</th>
          <th>id</th>
              <th>size</th>
              <th>ADD</th>
              <th>CONFIG</th>
              <th>CONFIG</th>
              
        </tr>
      </thead>
      <tbody>
        {files.map(RenderFiles)}
      
      </tbody>
    </ReactBootstrap.Table>

      
    )
};

function RenderFiles(file , index){
 
  return(
    <tr key={index}>
    <td> {file[1]}</td>
    <td>{file[0]}</td>
    <td>{file[3]}</td>
    <td><Versions id ={file[0]}></Versions></td>
    
    
    <MyDropzone id ={file[0]} />
    <td>
     
    <ReactBootstrap.Button variant="primary" >
      <a href={ 'http://localhost:8080/files/' + file[0] }>Download main file</a>
    </ReactBootstrap.Button>
    <br/>
    <br/>
  
      </td>
       
     
      
  </tr>
     
  )
}




function MyDropzone({id}) {
  const onDrop = useCallback(acceptedFiles => {
   const file = acceptedFiles[0];
   
   
   
   const formData = new FormData();
   formData.append("file",file);
   
   
   axios.post(`http://localhost:8080/files/${id}`,
   formData,
     { 
        Headers : {
          "Content-Type": "multipart/form-data"
          }
     }
     ).then(()=>{
     console.log("file uploaded successfully")
     alert("file uploaded successfully")
   }

     ).catch(er=>{console.log(er);
    });

  }, [])
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {
        isDragActive ?
          (<p>Drop the files here ...</p> ):(
            <i className="fa fa-cloud-download" aria-hidden="true"></i>
          )
        
      }
    </div>
  )
};


function MyDropzone_file() {
  const onDrop = useCallback(acceptedFiles => {
   const file = acceptedFiles[0];
   console.log(file);
   
   
   const formData = new FormData();
   formData.append("file",file);
   
   
   axios.post(`http://localhost:8080/files`,
   formData,
     { 
        Headers : {
          "Content-Type": "multipart/form-data"
          }
     }
     ).then(()=>{
     console.log("file uploaded successfully")
   }

     ).catch(er=>{console.log(er);
    });

  }, [])
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {
        isDragActive ?
          (<p>Drop the files here ...</p> ):(
            <ReactBootstrap.Button variant="info">ADD NEW FILE</ReactBootstrap.Button>
          )
        
      }
    </div>
  )
};








  return (
    <div className="App">

 <MyDropzone_file></MyDropzone_file>
     <Files></Files>
     
     
     
  </div>
    
  );
}

export default File_list;
