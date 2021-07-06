import "./Liked.css"
// import DetailHead from "./detailsPageComponent/HeadBox"
import DetailHead from "../component/HeadBox"
import SongListing from "../Layout/SongListing"
// import {heartSOngs} from "../db/Librarydb.js"
import {heartSOngs} from "../db/Librarydb"
const LikedSongs = () => {
    return (
        <div className="content " >
            <DetailHead imgsrc="https://raw.githubusercontent.com/mimansha-swarup/spotify-ui-clone/0a17b4c50de9d543841e3742aa318abc774e10b2/img_db/like.jpg" color="#422F81" heading="Playlist" desc={`Liked Songs`} /> 
            <SongListing props={heartSOngs} color="#422F81" />
        </div>
    );
}
 
export default LikedSongs;