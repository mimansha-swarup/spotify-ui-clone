
import { FaPlayCircle  } from 'react-icons/fa'
import { AiFillStepForward,AiFillStepBackward  } from 'react-icons/ai'
import { IoRepeat,IoShuffle  } from 'react-icons/io5'

const SongController = () => {
    return (  
        <div className="song-controller">
            <div className="song-controller-icons row" style={{justifyContent:"space-between"}}>
                <IoShuffle style={{color:"#ffrgba(255, 255, 255, 0.55)",}} />
                <AiFillStepBackward/>
                <FaPlayCircle style={{color:"#fff",fontSize:"1.7vw"}} />
                <AiFillStepForward/>
                <IoRepeat style={{color:"#ffrgba(255, 255, 255, 0.55)",}} />
                
            </div>
            <div className="song-time row">
                <p>0:00</p>
                <hr style={{width:"100%"}} />
                
                <p>3:00</p>
            </div>
        </div>
    );
}
 
export default SongController;