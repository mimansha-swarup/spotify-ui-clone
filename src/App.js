import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from "./component/Home";
import NavBar from "./component/NabBar";
import PlayBar from "./component/PlayBar";

import SideBar from "./component/SideBar";
import SearchPg from './searchpg';
// import { useEffect } from 'react';
import ScrollToTop from './component/ScrollToTop';




function App() {
    // useEffect(() => {
    //     window.scrollTo(0, 0)
    //   })
    return ( 
        <Router >
        <ScrollToTop />
            <div className = "App" >
            
                <NavBar />
                <SideBar />


                <Switch>
                <Route exact path='/' component={Home}/>
                
                
                        <Route path='/search' component={SearchPg} />
                
                
                    </Switch>

                
                <PlayBar />
            </div>
        </Router>
    );
}

export default App;