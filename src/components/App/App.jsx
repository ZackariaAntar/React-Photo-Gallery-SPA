import { useState, useEffect } from "react";
import React from "react";
import "./App.css";
import Axios from "axios";
import GalleryList from "../GalleryList/GalleryList";

// TODO STRECH GOALS:
//------------------- Feature DB -------------------------------//
//  Migrate data to DB called "react_gallery"
//    Connect DB to project through pg etc..
//    Create and update DB.sql file in project

//-------------------- Feature FORM ---------------------------------//
//  Add a form (new component) that allows a user to POST a new gallery item
//    Client side form (use absolute URL for images)
//    Server side route for posting an image

//--------------------- Feature DELETE -------------------------------//
//  Add ability to delete a gallery item

//------------------- Feature STYLES ----------------------------//
//  Add styling with Material-UI https://material-ui.com/

//--------------------- Feature MULTER -------------------------------//
//  USE --> https://github.com/expressjs/multer

//--------------------BRANCHING INFO-------------------------------//
//  https://github.com/PrimeAcademy/diamond-syllabus/blob/main/cheat-sheets/git-branching-cheatsheet.md


function App() {
	const [galleryList, setGalleryList] = useState([]);

	const getGalleryData = () => {
		Axios.get("/gallery")
			.then((response) => {
				console.log(response.data);
				setGalleryList(response.data);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	useEffect(() => {
		getGalleryData();
	}, []);

	return (
		<div className="App">
			<header className="App-header">
				<h1 className="App-title">Gallery of My Life</h1>
			</header>
			<main>
				<GalleryList galleryList={galleryList} data={getGalleryData} />
			</main>
		</div>
	);
}

export default App;
