import { Songs } from "./db";
import MusicCard from "./MusicCard";

const PlayListTile = () => {
    return ( 
       
        Songs.map((tile) => (
            <div className = "genre-tile" key = { tile.title } >
                <div className="genre-header">
                    <h1 style = {{ fontSize: "24px" } } > { tile.title } </h1> 
                    <h5 style={{color: "rgba(255,255,255,0.70)"}}>See more</h5>
                </div>
                <MusicCard gerneTile = { tile.list }/> 
            </div>

        ))
      
    );
}

export default PlayListTile;