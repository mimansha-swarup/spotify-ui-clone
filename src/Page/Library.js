import "./Library.css"
import {fav} from "../db/Librarydb"
import { BsPlayFill  } from 'react-icons/bs'
import MusicCard from "../component/MusicCard";
import { NavLink } from 'react-router-dom'




const Library = () => {
    return ( 
        <div className="content"  >
    <h1>PlayList</h1>
    <div id="like-grid">
    
    <div className="col-rev" id="likedbox">
    <NavLink to="/collection/tracks">
        <div>
        <p>Liggi, Unstoppable, Jab We Met, Om Shanti Om, One Direction</p>            
        <h1 className="heading">Liked Songs</h1>    
        <h3 className="no-of-songs">4 Liked Songs</h3>
        <BsPlayFill className="hover-playbtnl"  />
        </div>
    </NavLink>
    </div>
    
    {  
        fav.map((parser) => (
            
            <MusicCard  parser={parser} styleCheck="" key={parser.song} />    
        ) )
      }  
      
      </div>
</div>
        
    );
}

export default Library;