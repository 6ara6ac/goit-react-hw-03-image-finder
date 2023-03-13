import React from "react";
import { Searchbar } from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { fetchImages } from "../service/API";
import { Spinner } from "./Other/spinner";
import { Container } from "./Other/Container.styled";






export class App extends React.Component {
  state = {
    images: [],
    page: 1,
    status: 'idle',
    error: null,
  }


  

  async componentDidUpdate (prevProps, prevState) {
    const { page, searchQuery } = this.state
    const images = await fetchImages (searchQuery, page)
    const prevQuaery = prevState.searchQuery;
    const previousPage = prevState.page;



    try{
    if (prevQuaery !== searchQuery) {

    if(!images.totalHits) {
      throw new Error('We have nothing for this query');
    }
    
    this.setState({ 
      images: [...images.hits.map(({ id, webformatURL, largeImageURL, tags }) => {
        return { id, webformatURL, largeImageURL, tags };
      }),
    ],
    status: 'resolved'})
    }

    if (previousPage !== page && page !== 1) {

      this.setState({ 
        images: [
          ...prevState.images,
          ...images.hits.map(({ id, webformatURL, largeImageURL, tags }) => {
          return { id, webformatURL, largeImageURL, tags };
        }),
      ],
      status: 'resolved'})

      // const { height: cardHeight } = document
      // .querySelector(".ItemGallery")
      // .firstElementChild.getBoundingClientRect();
  
      // window.scrollBy({
      // top: cardHeight * 4,
      // behavior: "smooth",
      // });

      if (images.totalHits === this.state.images.length || images.hits.length < 12) {
        throw new Error('You loaded all images');
      }
      return;
      }
    }
    catch (error){
      console.log(error)
      this.setState ({status: 'rejected', error: error.message})
    }
    }
  

  onLoadMore = () => {
    this.setState (prevState => ({page: prevState.page+1, status: 'pending'}))
  }


  onHandleSubmit = async searchQuery => {
    
    this.setState(prevState => {
      if(prevState.searchQuery === searchQuery){
        return;
      }

      return {page: 1, images: [], searchQuery, status: 'pending'
      }
    }) 
  }


  render(){
    const {images, status, error} = this.state
    

    return <div>
    <Searchbar fetch={this.onHandleSubmit}/>
    <ImageGallery images={images}/>
    <Container>
    {status === 'pending' && <Spinner/>}
    {status === 'rejected' && <p>{error}</p>}
    {status === 'resolved' && <button className="Button" onClick={this.onLoadMore} type="button">Load more</button>}
    </Container>
    </div>
  }
};



