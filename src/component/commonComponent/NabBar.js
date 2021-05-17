import { IoChevronBackCircleOutline ,IoChevronForwardCircleOutline } from 'react-icons/io5'
import { HiUserCircle,HiChevronDown } from 'react-icons/hi'
import { IconContext  } from 'react-icons'

const NavBar = () => {
    return ( 
        
      <IconContext.Provider value={{ className: 'nav-logo'}}>
        <div className="nav-details">
          <div className="nav-grid">
            <IoChevronBackCircleOutline />
            <IoChevronForwardCircleOutline />
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
          
          
        </div>
      </IconContext.Provider>
      
     );
}
 
export default NavBar;