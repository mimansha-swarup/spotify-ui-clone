import { IconContext  } from 'react-icons'
import { RiHomeFill,RiSearchLine ,RiHeartFill  } from 'react-icons/ri'
import { VscLibrary } from 'react-icons/vsc'
import { MdAddBox } from 'react-icons/md'

const SideBar = () => {
    return ( 
      <IconContext.Provider value={{ className: 'tile-logo'}}>
      
      <aside className="side-nav">
        <div className="nav-tile"> <RiHomeFill  /> <span> Home </span></div>
        
        <div className="nav-tile"> <RiSearchLine /> <span> Search </span></div>
        <div className="nav-tile"> <VscLibrary  /> <span>Library </span></div>
        
        <hr />
        <div className="nav-tile"> <MdAddBox /> <span>Add Playlist</span> </div>
        <div className="nav-tile"> <RiHeartFill /> <span>Liked Songs</span> </div>
        <hr />
      </aside>
      
      
      
      </IconContext.Provider>
     );
}
 
export default SideBar;