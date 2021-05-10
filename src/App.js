import Home from "./component/Home";
import SideBar from "./component/SideBar";
import { IoChevronBackCircleOutline ,IoChevronForwardCircleOutline } from 'react-icons/io5'
import { IconContext  } from 'react-icons'



function App() {
    return ( 
      <IconContext.Provider value={{ className: 'tile-logo'}}>
      <div className="row">
        <SideBar />
        <div className="column">
          <div className="nav-details">
            <div>
            <IoChevronBackCircleOutline />
            <IoChevronForwardCircleOutline />
            </div>
            
            <button className="upgrade-btn">
            UPGRADE
            </button>
            
          
          </div>
          
          
          <div className="content">
          <Home />
          <div style={{height:'20vh'}}></div>
         
          
          
          
          
          </div>
        </div>
      </div>
      </IconContext.Provider>
      );
    }

export default App;