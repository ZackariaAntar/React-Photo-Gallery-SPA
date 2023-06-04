import Axios from "axios";
import { useState } from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import DeleteIcon from "@mui/icons-material/Delete";
import { pink } from "@mui/material/colors";


function GalleryItem(props) {
	let item = props.item;
	let getGalleryData = props.data;

	const [selected, setSelected] = useState(false);

	const increaseLikes = () => {
		Axios.put("/gallery/like/" + item.id)
			.then((response) => {
				console.log(response);
				getGalleryData();
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const deleteItem = () => {
		Axios.delete('/gallery/delete/'+item.id)
		.then((response)=>{
			console.log(response);
			getGalleryData();
		}).catch((err)=>{
			console.log(err);
		})
	}

	return (
		<Card
			key={item.id}
			className="content-card"
			sx={{ maxWidth: 345, bgcolor: "#FBF9FB", boxShadow: 10 }}
		>
			{selected ? (
				<CardContent
					className="content"
					sx={{ minHeight: 269.6 }}
					onClick={() => setSelected(!selected)}
				>
					<Typography
						className="text"
						sx={{ fontSize: "1rem" }}
						variant="body2"
						color="text.primary"
					>
						{item.description}
					</Typography>
				</CardContent>
			) : (
				<CardMedia
					className="content"
					component="img"
					height="300"
					image={item.path}
					alt={item.description}
					onClick={() => setSelected(!selected)}
				/>
			)}
			<CardContent>
				<Typography
					sx={{ fontSize: "1.5rem" }}
					variant="body2"
					color="text.primary"
				>
					{item.likes} people love this!
				</Typography>
			</CardContent>
			<CardActions disableSpacing>
				<IconButton
					aria-label="like this photo"
					onClick={increaseLikes}
					sx={{ color: pink[300] }}
				>
					<FavoriteIcon />
				</IconButton>
				<IconButton
					aria-label="Delete this photo"
					onClick={deleteItem}
					color="error"
				>
					<DeleteIcon />
				</IconButton>
			</CardActions>
		</Card>
	);
}

export default GalleryItem;
