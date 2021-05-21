import "./Liked.css"
import DetailHead from "./detailsPageComponent/HeadBox"
import SongListing from "./detailsPageComponent/SongListing"
import {heartSOngs} from "../db/Librarydb.js"
const LikedSongs = () => {
    return (
        <div className="content" style={{backgroundImage:"linear-gradient(#422F81,#0F0F0F 30vh)", backgroundAttachment:"fixed"}}>
            <DetailHead imgsrc="https://raw.githubusercontent.com/mimansha-swarup/spotify-ui-clone/0a17b4c50de9d543841e3742aa318abc774e10b2/img_db/like.jpg" heading="Playlist" desc={`Liked Songs`} /> 
            <SongListing props={heartSOngs}/>
               
            
            

        </div>
    );
}
 
export default LikedSongs;