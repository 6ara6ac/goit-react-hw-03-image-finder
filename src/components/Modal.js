import React from "react";
import { createPortal } from "react-dom"; 


const modalRoot = document.querySelector('#modal-root')

export class Modal extends React.Component  {
    
    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown)
    }

    componentWillUnmount(){
        window.removeEventListener('keydown', this.handleKeyDown)
    }



    handleKeyDown = e => {
        if(e.code === 'Escape'){
            this.props.onClose();
            console.log(e.code)
        }
    }

    handleBackdropClick = e => {
        if (e.target === e.currentTarget){
            this.props.onClose();
        }
    }


    render() {
        const {largeImageURL, tags} = this.props;
        
        return createPortal(
        <div className="Overlay" onClick={this.handleBackdropClick}>
        <div className="Modal">
        <img src={largeImageURL} alt={tags}/>
        </div>
        </div>, modalRoot
        )
        
        
    }
}





