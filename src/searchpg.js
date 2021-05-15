import './searchPg.css';
import {category} from './searchPgDb';
const SearchPg = () => {
    const cat=["pop",'rock','solid','metal','anime','hollywood','bollywood','punjabi'];
    
    return ( 
        <div id="searchLayout">
            <h2>Browse All</h2>
            <div id="genreCategory">
                {
                    category.list.map((element)=>(
                        
                        <div className="genreCard" style={{backgroundColor:`${element.color}`,}}  key={element.id}>
                            <h4>{element.name}</h4>
                            <img src="https://raw.githubusercontent.com/mimansha-swarup/spotify-ui-clone/main/img_db/default.jpg" alt="cover" />
                        </div>
                       
                        
                    ))
                }
            </div>
        </div>
     );
}
 
export default SearchPg;