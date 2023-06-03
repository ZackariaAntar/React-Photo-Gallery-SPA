import Axios from "axios"
import { useState } from "react"

function GalleryForm(props){
    let getGalleryData = props.data

    const [pathInput, setPathInput]=useState('')
    const [descInput, setDescInput]=useState('')

    const addToGallery = () => {
        Axios.post('/gallery/new', {path:pathInput, description:descInput})
        .then((result)=>{
            console.log(result);
            setPathInput('')
            setDescInput('')
            getGalleryData()
        }).catch((err)=>{
            console.log(err);
        })
    }


    return (
		<>
			<form onSubmit={addToGallery}>
				<label>PICTURE URL:</label>
				<input
					value={pathInput}
					type="text"
					placeholder="Add the url to your picture here"
					id=""
					onChange={(e) => setPathInput(e.target.value)}
				/>
				<label>DESCRIPTION:</label>
				<input
					value={descInput}
					type="text"
					placeholder="Brief description of your picture"
					id=""
					onChange={(e) => setDescInput(e.target.value)}
				/>
				<button type="submit">Submit</button>
			</form>
		</>
	);
}

export default GalleryForm