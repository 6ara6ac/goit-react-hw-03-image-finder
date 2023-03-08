import React from "react";
import { Searchbar } from "./Searchbar";
import { ImageGallery } from "./ImageGallery";
import { fetchImages } from "./API";
import { Spinner } from "./spinner";



export class App extends React.Component {
  state = {
    images: [],
    page: 1,
    loading: false,
    status: 'idle',
    searchQuery:''
  }


  async componentDidUpdate (prevProps, prevState) {
    const {page, searchQuery} = this.state

    if (prevState) {
    }
  }

  onLoadMore = () => {
    this.setState (prevState => ({page: prevState.page+1}))
  }


  onHandleSubmit = async searchQuery => {
    this.setState(prevState => {
      if (prevState.searchQuery === searchQuery) {
        return;
      }
      return { images: [], page: 1, searchQuery };
    });  
    
  // const { page } = this.state

  // this.setState({loading:true, images:[]}) 

  //  const images = await fetchImages (searchQuery, page)

  //   this.setState({ 
  //     images: [...images.hits.map(({ id, webformatURL, largeImageURL, tags }) => {
  //       return { id, webformatURL, largeImageURL, tags };
  //     }),
  //   ]})
  }

  //  fetchImages = filter => {
  //   this.setState({loading: true})
  //   axios.get (`https://pixabay.com/api/?q=${ filter }}&page=${this.state.page}&key=32951992-3201e8549a7160da4f5158a88&image_type=photo&orientation=horizontal&per_page=12`)
  //   .return (images => this.setState({ 
  //     images: [...images.hits.map(({ id, webformatURL, largeImageURL, tags }) => {
  //       return { id, webformatURL, largeImageURL, tags };
  //     }),
  //   ]}))
  //   .finally(()=> this.setState({loading:false})) 
  // }

  render(){
    const {loading, images, status} = this.state
    

    return <>
    <Searchbar fetch={this.onHandleSubmit}/>
    {/* {loading && <Spinner/>} */}
    <ImageGallery images={images}/>
    <button type="button" onClick={this.onLoadMore}>Загрузить еще</button>
    </>
  }
};



