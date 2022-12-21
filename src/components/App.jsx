import './styles.css'
import { Component } from "react";

import ImageGallery from './ImageGallery/ImageGallery';


class App extends Component{
render(){
  return(
    <div className='App'>
     <ImageGallery  />
    </div>
  );
}
}
export default App;