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
			<form className="GalleryForm" onSubmit={addToGallery}>
				<div className="pictureInput">
					<label>PICTURE URL:</label>
					<input
						value={pathInput}
						type="text"
						placeholder="Add the url to your picture here"
						id=""
						onChange={(e) => setPathInput(e.target.value)}
					/>
				</div>
				<div className="descriptionInput">
					<label>DESCRIPTION:</label>
					<input
						value={descInput}
						type="text"
						placeholder="Brief description of your picture"
						id=""
						onChange={(e) => setDescInput(e.target.value)}
					/>
				</div>
				<div>
					<button type="submit">Submit</button>
				</div>
			</form>
		</>
	);
}

export default GalleryForm