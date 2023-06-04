import GalleryItem from "../GalleryItem/GalleryItem";
import { Grid } from "@mui/material";

function GalleryList(props) {
	// renaming props to match their original naming conventions.
	let galleryList = props.galleryList;
	let getGalleryData = props.data;

	// mapping over the DB data to render each photo and its data stored on the DB as Grid items on the DOM.
	return (
		<>
			{galleryList.map((item) => (
				<Grid
					item
					key={item.id}
					xs={6}
					sm={6}
					md={4}
					lg={3}
					xl={3}
					ml={1}
					mb={13}
				>
					<GalleryItem item={item} data={getGalleryData} />
				</Grid>
			))}
		</>
	);
}

export default GalleryList;
