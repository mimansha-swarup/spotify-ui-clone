import Home from "./component/Home";
import SideBar from "./component/SideBar";



function App() {
    return ( 
      <div className="row">
        <SideBar />
        <div className="content">
        <Home />
        <Home />
        <Home />

        
        
          
        </div>
      </div>
    );
}

export default App;