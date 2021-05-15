import { IconContext  } from 'react-icons'
import { AiOutlineHeart  } from 'react-icons/ai'
import { CgMaximize  } from 'react-icons/cg'

const SongDetails = () => {
    return ( 
        <IconContext.Provider value={{ className:"song-detail-icon"}}>
            <div className="song-details " >
                <img src="https://raw.githubusercontent.com/mimansha-swarup/spotify-ui-clone/main/img_db/MadeForYou/HighPower.jpg" alt="music cover" />
                <div className="column" style={{justifyContent:"center"}}>
                    <p>SOng Name</p>
                    <small>singer</small>
                </div>
                <AiOutlineHeart  />
                <CgMaximize  />
            </div>
        </IconContext.Provider>
     );
}
 
export default SongDetails;