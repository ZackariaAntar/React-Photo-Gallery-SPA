import { useState, useEffect } from 'react';
import React from 'react';
import './App.css';
import Axios from 'axios';


function App() {
  const [galleryList, setGalleryList] = useState([])

  const getGalleryItems = () => {
    Axios.get('/gallery')
    .then((response)=>{
      console.log(response.data);
      setGalleryList(response.data)
    }).catch((err)=>{
      console.log(err);
    })
  }

  useEffect(()=>{
    getGalleryItems()
  }, [])



    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
        <img src="images/goat_small.jpg"/>
      </div>
    );
}

export default App;
