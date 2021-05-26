import '../component/searchPg.css';
import {category,topPicks} from '../db/searchPgDb';
// import { FaPlayCircle  } from 'react-icons/fa'
// import { useEffect } from 'react';

const SearchPg = () => {
    const baseurl = 'https://raw.githubusercontent.com/mimansha-swarup/spotify-ui-clone/main/img_db/searchPGImg/';
    
    return ( 
        <div className="content">
            <div>
            <h2>{topPicks.title}</h2>
            <div id="top-Category">
            {
                topPicks.list.map((el)=>(
                    <div className="genreCard" style={{backgroundColor:el.color,minHeight:'11rem',minWidth:'21rem' }}  key={el.id}>
                    <h4>{el.name}</h4>
                    <img loading="lazy" src={baseurl+el.id+".jpg"} alt="cover" style={{width:'7.5rem', height:'7.5rem'}} />
                </div>
                ))
                
            }
                
                
            </div>

            </div>

            <h2>{category.title}</h2>
            <div id="genreCategory">
                {
                    category.list.map((element)=>(
                        
                        <div className="genreCard" style={{backgroundColor:`${element.color}`,}}  key={element.id}>
                            <h4>{element.name}</h4>
                            <img src={baseurl+element.id+".jpg"} alt="cover" />
                        </div>
                       
                        
                    ))
                }
            </div>
        </div>
     );
}
 
export default SearchPg;