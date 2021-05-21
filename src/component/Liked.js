import "./Liked.css"
import DetailHead from "./detailsPageComponent/HeadBox"
import SongListing from "./detailsPageComponent/SongListing"
import {fav} from "../db/Library.js"
const LikedSongs = () => {
    return (
        <div className="content" style={{backgroundImage:"linear-gradient(#FA5077,#0F0F0F 30vh)", backgroundAttachment:"fixed"}}>
            <DetailHead imgsrc={fav[0].image} heading="Playlist" desc={`by ${fav[0].singer}`} /> 
            <SongListing props={fav[0].songsLst}/>
               
            
            

        </div>
    );
}
 
export default LikedSongs;