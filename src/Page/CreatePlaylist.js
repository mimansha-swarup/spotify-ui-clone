import DetailHead from "../component/HeadBox";
import { BiSearch  } from 'react-icons/bi'
import { NavLink } from 'react-router-dom'
import "./CreatePlayList.css"
const CreatePlaylist = () => {
    return ( 
        <div className="content">
            <DetailHead imgsrc="https://raw.githubusercontent.com/mimansha-swarup/spotify-ui-clone/main/img_db/default.jpg" color="#444444" heading="My Playlist" desc={`Name`} /> 
            <div id="cont-playbtn" style={{backgroundImage:`linear-gradient(#444444,#0F0F0F 20vh)`}} > </div>
            <hr />
            <h2 >Add Songs</h2>
            <NavLink to="/search">
            <div id="search-box">Search<BiSearch /></div>
            </NavLink>
        </div>
     );
}
 
export default CreatePlaylist;