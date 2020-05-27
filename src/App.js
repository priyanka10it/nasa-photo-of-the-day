import React, {useState, useEffect} from "react"
import "./App.css"
import axios from "axios"

import Header from "./components/header/Header.js"
import PostContainer from "./components/PostContainer/PostContainer.js"





function App() {
  const [info, setInfo] = useState({});



  useEffect(() => {
    axios.get("https://api.nasa.gov/planetary/apod?api_key=nBc60CjQCp0NmTe5dbp3rcreCA2T0kHStRg2sJGP")
          .then(response => {
            console.log(response)
            setInfo(response.data)
           
          })
          .catch(error => {
            console.log("Error!", error)
          })
        }, []);
  
        
  return (
    <div className="App">
      <Header/>
      <PostContainer title={info.title} url={info.url} date={info.date} explanation={info.explanation} copyright={info.copyright}/>
    </div>
  );

}
export default App;