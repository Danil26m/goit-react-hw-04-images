import PropTypes from 'prop-types'
import React, { Component } from 'react'

export class Modal extends Component {
    close=(e)=>{
        if(e.key === 'Escape'){
            this.props.togle();
        }
    }
    clickClose=(e)=>{
       const r = document.querySelector('.Overlay')
       if(r === e.srcElement){
        this.props.togle();
       }
    }
    componentDidMount(){
   
        window.addEventListener('keydown',this.close);
        document.querySelector('.Overlay').addEventListener('click',this.clickClose)
    }
    componentWillUnmount(){
        window.removeEventListener('keydown',this.close);
    }
  render() {
    return (
        <div className="Overlay">
        <div className="Modal">
          <img src={this.props.bigImage} alt="" />
        </div>
      </div>
    )
  }
}
Modal.propTepes={
    bigImage: PropTypes.string.isRequired,
    togle: PropTypes.func
}
export default Modal