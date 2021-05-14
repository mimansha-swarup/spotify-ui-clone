import { IconContext  } from 'react-icons'
import { RiHomeFill,RiSearchLine ,RiHeartFill  } from 'react-icons/ri'
import { VscLibrary } from 'react-icons/vsc'
import { MdAddBox } from 'react-icons/md'
import { NavLink } from "react-router-dom";

const SideBar = () => {
    return ( 
      <IconContext.Provider value={{ className: 'tile-logo'}}>
      
      <aside className="side-nav">
        <img className="logo" src="https://raw.githubusercontent.com/mimansha-swarup/spotify-ui-clone/main/public/onspotbg.png" alt="logo" />
        <NavLink exact to='/'  className="nav-tile" activeClassName="active-now" > <RiHomeFill  /> <span> Home </span></NavLink>
        
        <NavLink to='/search' className="nav-tile" activeClassName="active-now" > <RiSearchLine /> <span> Search </span></NavLink>
        <NavLink to='/Library' className="nav-tile" activeClassName="active-now" > <VscLibrary  /> <span>Library </span></NavLink>
        
        <hr />
        <NavLink to='/addPlaylst' className="nav-tile" activeClassName="active-now" > <MdAddBox /> <span>Add Playlist</span> </NavLink>
        <NavLink to='/likedSongs' className="nav-tile" activeClassName="active-now" > <RiHeartFill /> <span>Liked Songs</span> </NavLink>
        <hr />
      </aside>
      
      
      
      </IconContext.Provider>
     );
}
 
export default SideBar;