import { Songs } from "../db/db";
import MusicCard from "../component/MusicCard";

const PlayListTile = () => {
    return (
        Songs.map((tile) => ( 
            <div className = "genre-tile" key = { tile.title } >
                <div className = "genre-header" >
                    <h1 style = {{ fontSize: "clamp(20px,2vw ,24px)" , textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap" } } > { tile.title } </h1>  
                    <h5 style = {{ color: "rgba(255,255,255,0.70)", textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap"  } } > See more </h5> 
                </div> 
                <div className="music-list">
                    {
                        tile.list.map((gerneTile) => ( 
                            <MusicCard parser = { gerneTile } styleCheck="true" key={gerneTile.id} />                     
                        ))
                    }  
                </div>
            </div>
        ))
    );
}

export default PlayListTile;