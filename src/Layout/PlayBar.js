// import { IconContext  } from 'react-icons'

import { AiOutlineMenuUnfold  } from 'react-icons/ai'
import { IoVolumeLow  } from 'react-icons/io5'
import { HiDeviceMobile  } from 'react-icons/hi'


import SongController from '../component/playbar_songController'
import SongDetails from '../component/PlayBar_SongDetails'


const PlayBar = (props) => {
    
    return ( 
        // <IconContext.Provider value={{ }}>
        <footer className="music-bar">            
            <SongDetails />
            <SongController />            
            <div className="volume-controller " >
                <HiDeviceMobile className ="volume-controller-icons" />
                <AiOutlineMenuUnfold className ="volume-controller-icons" />
                <IoVolumeLow className ="volume-controller-icons" />
                <hr />
            </div>
        </footer>
      
    //   </IconContext.Provider>
     );
}
 
export default PlayBar;