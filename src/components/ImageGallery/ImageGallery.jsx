import Button from 'components/Button/Button'
import { Audio } from 'react-loader-spinner'
import Modal from '../Modal'
import Notiflix from 'notiflix';
import Searchbar from '../Searchbar/Searchbar';
import { useState, useRef, useEffect  } from 'react';
export default function ImageGallery() {
const [img, setImg] = useState([]);
const [page, setPage] = useState(1);
const [loading, setLoading] = useState(false);
const [isModal, setIsModal] = useState('');
const [filter, setFilter] = useState('');
const isFirstRender = useRef(true)
const handelClick=()=>{
  setPage(state=> state + 1)
          
        }
       const handelForm=(event)=>{
                  event.preventDefault();
                  const newFilter = event.target.lastChild.value;
                  if (newFilter === filter) {
                    return
                  }
                  setFilter(newFilter);
                  setImg([]);
                  setPage(1);
                }
                useEffect(()=>{
                  if(isFirstRender.current){
                    isFirstRender.current = false;
                    return
                  }
                  setLoading(true)
                            const baseUrl = `https://pixabay.com/api/?q=${filter}&page=${page}&key=27491785-4ed714c8d697aeb5a6480b366&image_type=photo&orientation=horizontal&per_page=12`;
                              fetch(baseUrl).then(response =>{ 
                                if (!response.ok) {
                                throw new Error(response.status);
                              }
                                  return response.json();
                          }).then(({hits})=>{  
                         
                            if (!hits.length) {
                             return Notiflix.Notify.failure("No result");
                            }
                            return setImg(state => [...state,...hits])
                          
                         
                      }).catch((err)=>console.log(err))
                      .finally(()=> setLoading(false))
                },[filter , page])
             const   togleModal=(src)=>{
                  setIsModal(src?src:'')
                        }
                return <main>
                                <Searchbar submit={handelForm}/>
                              {loading && 
                              <div style={{position: 'absolute',
                               top:'50%',
                               left:'50%',
                                transform: 'translate(-50%,-50%)'
                                }}>
                                <Audio
                                  height="80"
                                  width="80"
                                  radius="9"
                                  color="green"
                                  ariaLabel="loading"
                                  wrapperStyle
                                  wrapperClass
                                  />  
                              </div>
                                  
                              }
                               <ul className="ImageGallery">
                              {img.length?img.map((m)=>(
                                  <li className='ImageGalleryItem' key={m.id}>
                                      <img className='ImageGalleryItem-image' src={m.webformatURL} alt={m.tags} onClick={()=>togleModal(m.largeImageURL)}/>
                                  </li>
                              )):""}
                        </ul>
                        {img.length?<Button click={handelClick} />:''}
                        {isModal && <Modal bigImage={isModal} togle={togleModal}/>}
                          </main>
                          
                         
                      
}

