//importing React and MUI components
import { useState, useEffect } from "react";
import React from "react";
import "./App.css";
import Axios from "axios";
import GalleryList from "../GalleryList/GalleryList";
import GalleryForm from "../GalleryForm/GalleryForm";
import DialogForm from "../DialogForm/DialogForm";
import { Grid } from "@mui/material";

function App() {
	// creating local state to store data from DB
	const [galleryList, setGalleryList] = useState([]);

	// get request for data from the DB.
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
	// preventing an infinite loop of rerendering upon receiving data from the DB.
	useEffect(() => {
		getGalleryData();
	}, []);

	// rendering App and its components to the DOM.
	// passing props to children components
	return (
		<div className="App">
			<header className="App-header">
				<h1 className="App-title">Gallery of My Life</h1>
			</header>
			<DialogForm>
				<GalleryForm data={getGalleryData} />
			</DialogForm>

			<h1 className="myGallery">My Gallery</h1>
			<Grid
				container
				display="flex"
				flexDirection="row"
				justifyContent="space-evenly"
				ml={7}
			>
				<GalleryList galleryList={galleryList} data={getGalleryData} />
			</Grid>
		</div>
	);
}

export default App;
