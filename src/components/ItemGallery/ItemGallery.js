import React from "react";
import { Modal } from "../Modal/Modal";
import PropTypes from 'prop-types';


export class ItemGallery extends React.Component  {
     static propTypes= {
        webformatURL: PropTypes.string.isRequired,
        largeImageURL: PropTypes.string.isRequired,
        tags: PropTypes.string
    }


    state = {
        largeImageURL:'',
        showModal:false,
    }

    toggleModal = () => {
        this.setState (prevState => ({showModal: !prevState.showModal}))
    }

    handleClick = () => {
        this.setState({largeImageURL: this.props.largeImageURL}) 
        this.toggleModal();
        return;
    }

    render () {
        const {webformatURL, tags} = this.props;
        const { showModal, largeImageURL } = this.state;

        return <>
        <img className="ImageGalleryItem-image" alt={tags} src={webformatURL} onClick={this.handleClick}/>
        {showModal && <Modal largeImageURL={largeImageURL} tags={tags} onClose={this.toggleModal}/>}
        </>
    }
}