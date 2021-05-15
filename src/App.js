import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from "./component/Home";
import NavBar from "./component/NabBar";
import PlayBar from "./component/PlayBar";
import SideBar from "./component/SideBar";
import SearchPg from './searchpg';




function App() {
    return ( 
        <Router >
            <div className = "App" >
                <NavBar />
                <SideBar />


                <div className = "content" >
                    <Switch>
                        <Route exact path='/'>
                            <Home />
                        </Route>
                        <Route path='/search'>
                            <SearchPg />
                        </Route>
                    </Switch>

                </div> 
                <PlayBar />
            </div>
        </Router>
    );
}

export default App;