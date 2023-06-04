import GalleryItem from "../GalleryItem/GalleryItem";
import { Grid } from "@mui/material";

function GalleryList(props) {
	let galleryList = props.galleryList;
	let getGalleryData = props.data;

	return (
		<>
			{galleryList.map((item) => (
					<Grid item xs={6} sm={6} md={4} lg={4} xl={3} m={5}>
						<GalleryItem
							key={item.id}
							item={item}
							data={getGalleryData}
						/>
					</Grid>

			))}
		</>
	);
}

export default GalleryList;
