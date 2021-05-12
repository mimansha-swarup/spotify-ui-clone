import Home from "./component/Home";
import NavBar from "./component/NabBar";
import PlayBar from "./component/PlayBar";
import SideBar from "./component/SideBar";




function App() {
    return ( 
      <div className="App">
      <NavBar />
      <SideBar />
      
      <div className="content">
      <Home />
      
      </div>
      <PlayBar/>
      </div>
      
      );
    }

export default App;