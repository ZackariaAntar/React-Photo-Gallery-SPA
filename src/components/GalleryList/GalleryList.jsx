
function GalleryList(props){
    let galleryList = props.galleryList

    return (
        <>
            <div>
                <h1>My Gallery</h1>
            </div>
            <div>
                {galleryList.map((item)=>(
                    <GalleryItem key={item.id} item={item} />
                ))}
            </div>

        </>
    )
}

export default GalleryList