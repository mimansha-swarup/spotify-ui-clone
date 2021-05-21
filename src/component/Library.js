import "./Library.css"
import {fav} from "../db/Library"
import MusicCard from "./HomeComponent/MusicCard";



const Library = () => {
    return ( 
        <div className="content"  >
    <h1>PlayList</h1>
    <div id="like-grid">
    

    <div className="col-rev" id="likedbox">
    <h3 className="no-of-songs">4 Liked Songs</h3>
    <h1 className="heading">Liked Songs</h1>    
    <p>Liggi, Unstoppable, Jab We Met, Om Shanti Om, One Direction</p>            
    </div>
    
    {
        fav.map((parser) => (

            <MusicCard parser={parser} styleCheck="" />
            
        ) )
      }  
      
      </div>
</div>
        
    );
}

export default Library;