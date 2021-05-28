import { IoChevronBackCircleOutline ,IoChevronForwardCircleOutline } from 'react-icons/io5'
import { HiUserCircle,HiChevronDown } from 'react-icons/hi'
import { IconContext  } from 'react-icons'
import { useHistory } from "react-router-dom";

const NavBar = () => {
  const history = useHistory();
    return ( 
        
      <IconContext.Provider value={{ className: 'nav-logo'}}>
        <header className="nav-details">
          <div className="nav-grid">
            <IoChevronBackCircleOutline onClick={()=>history.goBack()} />
            <IoChevronForwardCircleOutline onClick={()=>history.goForward()} />
            
          </div>
          <div className="nav-grid">
            <button className="upgrade-btn">
              UPGRADE
            </button>

            <button className="user-btn">
            <HiUserCircle className="user-icon"/>
              Name  
            <HiChevronDown className="user-icon" />
            </button>
          </div>
          
          
        </header>
      </IconContext.Provider>
      
     );
}
 
export default NavBar;