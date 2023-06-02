import Axios from "axios";
import { useState } from "react/cjs/react.development";

function GalleryItem(props){

    let item = props.item
    let getGalleryData = props.getGalleryData

    const [likeCount, setLikeCount] = useState(item.likes)
    const [selected, setSelected]= useState(false)

    const increaseLikes = (id) => {
        Axios.put(`/gallery/like/${id}`)
        .then((response)=>{
            console.log(response);
            getGalleryData()
        })
        .catch((err)=>{
            console.log(err);
        })
    }


    return (
		<>
			<div>
				<div onClick={() => setSelected(!selected)}>
					{selected ? (<p>{item.path}</p>) : (<p>{item.description}</p>)}
				</div>

				<button onClick={increaseLikes(item.id)}>I love it!</button>
				<p>{item.likes} people love this!</p>
			</div>
		</>
	);
}

export default GalleryItem