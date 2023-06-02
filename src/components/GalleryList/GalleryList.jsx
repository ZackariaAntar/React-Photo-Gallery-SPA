
function GalleryList(props){
    let galleryList = props.galleryList
    let getGalleryData = props.getGalleryData

    return (
        <>
            <div>
                <h1>My Gallery</h1>
            </div>
            <div>
                {galleryList.map((item)=>(
                    <GalleryItem key={item.id} item={item} getGalleryData={getGalleryData}/>
                ))}
            </div>

        </>
    )
}

export default GalleryList