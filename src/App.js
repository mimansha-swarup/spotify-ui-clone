import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from "./component/Home";
import NavBar from "./component/commonComponent/NabBar";
import PlayBar from "./component/commonComponent/PlayBar";
import SideBar from "./component/commonComponent/SideBar";
import SearchPg from './component/searchpg';
import ScrollToTop from './component/commonComponent/ScrollToTop';
import Library from './component/Library';
import LikedSongs from './component/Liked';




function App() {
    return ( 
        <Router >
        <ScrollToTop />
            <div className = "App" >
            
                <NavBar />
                <SideBar />


                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/search' component={SearchPg} />
                    <Route exact path='/collection' component={Library} />
                    <Route exact path='/collection/tracks' component={LikedSongs} />
                
                </Switch>
                <PlayBar />
                

                
                
            </div>
        </Router>
    );
}

export default App;