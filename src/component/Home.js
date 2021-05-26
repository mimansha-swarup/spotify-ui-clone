import PlayListTile from "./HomeComponent/PlayListTIle"
import './HomeComponent/home.css'
import { useEffect } from "react";

const Home = () => {
    useEffect(() => {
        
    }, [])
    return ( 
        <div className="content" style={{padding:"0 2rem"}}>
        <PlayListTile />
 
        
        </div> );
}
 
export default Home;