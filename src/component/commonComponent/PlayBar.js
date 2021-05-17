// import { IconContext  } from 'react-icons'

import { AiOutlineMenuUnfold  } from 'react-icons/ai'
import { IoVolumeLow  } from 'react-icons/io5'
import { HiDeviceMobile  } from 'react-icons/hi'

import SongController from './playbar_songController'
import SongDetails from './PlayBar_SongDetails'


const PlayBar = () => {
    return ( 
        // <IconContext.Provider value={{ }}>
        <div className="music-bar">
            
            <SongDetails />
            <SongController />
            
            
            <div className="volume-controller row" >
                <HiDeviceMobile className ="volume-controller-icons" />
                <AiOutlineMenuUnfold className ="volume-controller-icons" />
                <IoVolumeLow className ="volume-controller-icons" />
                <hr />
            </div>
        </div>
      
    //   </IconContext.Provider>
     );
}
 
export default PlayBar;