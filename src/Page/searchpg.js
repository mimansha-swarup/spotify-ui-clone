import './searchPg.css';
import {category,topPicks} from '../db/searchPgDb';
// import { FaPlayCircle  } from 'react-icons/fa'
// import { useEffect } from 'react';

const SearchPg = () => {
    const baseurl = 'https://raw.githubusercontent.com/mimansha-swarup/spotify-ui-clone/main/img_db/searchPGImg/';
    
    return ( 
        <div className="content pd" >
            <div>
                <h2 className="cat-title">{topPicks.title}</h2>
                <div id="top-Category">
                {
                    topPicks.list.map((el)=>(
                    <div className="genreCard topCard" style={{backgroundColor:el.color, }}  key={el.id}>
                        <h4  >{el.name}</h4>
                        <img  loading="lazy" src={baseurl+el.id+".jpg"} alt="cover" />
                    </div>
                    ))
                    
                }
                </div>

            </div>

            <h2 className="cat-title" >{category.title}</h2>
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