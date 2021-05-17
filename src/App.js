import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from "./component/Home";
import NavBar from "./component/commonComponent/NabBar";
import PlayBar from "./component/commonComponent/PlayBar";

import SideBar from "./component/commonComponent/SideBar";
import LikedSongs from "./component/LikePage";
import SearchPg from './component/searchpg';
// import { useEffect } from 'react';
import ScrollToTop from './component/commonComponent/ScrollToTop';




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
                    <Route path='/collection/tracks' component={LikedSongs} />
                
                </Switch>
                <PlayBar />
                

                
                
            </div>
        </Router>
    );
}

export default App;