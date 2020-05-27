import React, { useEffect, useState } from "react";
import axios from "axios";
import PhotoCard from "./PhotoCard";

const PhotoList = () => {
  /*
  Convention: API requests should be captured in useEffect effect funtion and response
  should be stored in state. This state variable will be set to a default value - often
  times that's [] or "" or false, depending on the data being returned from the API. 
  
  Since JSX is rendered BEFORE the effect fn is called, the default state value will 
  render in the UI before the call to the API. If the call to the API takes awhile,
  then we have a default view already shown and painted to the browser as our data
  takes its time returning to our .then(). Once we update state with the values from
  the API, (A STATE CHANGE) our component rerenders with that value, updating the JSX.
  */
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=nBc60CjQCp0NmTe5dbp3rcreCA2T0kHStRg2sJGP")
      .then(response => {
        // reference setState fn
        console.log(response);
        setPhotos(response.data);
      })
      .catch(error => console.log("Error!", error));
  }, []);
  /*
  Dependency Arrays in useEffect:
  [] --> Means that we will only call the effect fn ONCE, directly after the initial render
  [stateVariable, propVariable] --> Include any number of state variables or prop variables in the dependency array. 
                    The effect fn will call after initial render and when one of these variable changes in value.
  empty --> run the effect fn after every rerender of the JSX. 
  */

  return (
    <div className="photo">
      
        <PhotoCard/>
      ))}
    </div>
  );
};

export default PhotoList;