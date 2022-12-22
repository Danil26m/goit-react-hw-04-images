import PropTypes from 'prop-types'
import { useEffect } from 'react'
export default function Modal({bigImage,togle}) {
const  close=(e)=>{
  if(e.key === 'Escape'){
      togle();
  }
}
 const  clickClose=(e)=>{
             const r = document.querySelector('.Overlay')
             if(r === e.srcElement){
              togle();
             }
          }
    useEffect(()=>{
        window.addEventListener('keydown',close);
        document.querySelector('.Overlay').addEventListener('click',clickClose);
        return ()=>{
          window.removeEventListener('keydown',close);
        }
    })
    return <div className="Overlay">
              <div className="Modal">
                <img src={bigImage} alt="" />
              </div>
            </div>
              
     
}
Modal.propTepes={
    bigImage: PropTypes.string.isRequired,
    togle: PropTypes.func
}
