import GalleryItem from "../GalleryItem/GalleryItem"

function GalleryList(props){
    let galleryList = props.galleryList
    let getGalleryData = props.data
    console.log(galleryList);
    console.log(getGalleryData);

    return (
		<>
			<h1>My Gallery</h1>


			<div>
				{galleryList.map((item) => (
					<GalleryItem
						key={item.id}
						item={item}
						data={getGalleryData}
					/>
				))}
			</div>
		</>
	);
}

export default GalleryList