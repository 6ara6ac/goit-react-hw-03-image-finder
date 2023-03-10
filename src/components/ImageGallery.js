import { ItemGallery } from "./ItemGallery"

export const ImageGallery = ({ images }) => {

    return <>
        <ul className="ImageGallery">
        {images.map(( {id, webformatURL, largeImageURL, tags }) =>{
            return <ItemGallery className='ImageGalleryItem' 
            key ={id}
            id={id}
            webformatURL={webformatURL}
            largeImageURL={largeImageURL}
            tags={tags}>
            </ItemGallery>} )}
  </ul>
  </>
}