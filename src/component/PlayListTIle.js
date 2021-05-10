import {Songs} from "./db";
import MusicCard from "./MusicCard";

const PlayListTile = () => {
    return ( 
        <div>
        {    
            Songs.map((tile)=>(
                <div key={tile.title}>
                
                <h1 style={{fontSize:"24px"}}>{tile.title}</h1>
                <MusicCard gerneTile= {tile.list} />
                </div>

            ))

        }
        
        
        </div>
     );
}
 
export default PlayListTile;