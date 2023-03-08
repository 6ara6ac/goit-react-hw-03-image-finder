export const ImageGallery = ({ images }) => {
    return <><ul className="ImageGallery">
        {images.map(( {id, webformatURL }) =>{
            return <li className='ImageGalleryItem' key ={id}>
            <img className="ImageGalleryItem-image" src={webformatURL}></img>
            </li>} )}
  </ul>
  </>
}