import { BsPlayFill  } from 'react-icons/bs'
import {NavLink} from 'react-router-dom'
const MusicCard = ({parser,styleCheck}) => {
    return ( 
        // <NavLink to={`songs/${parser.id}`}>
        <NavLink to={{
            pathname:`songs/${parser.id}`,
            state:{check: parser}
        }}>
        <div className={styleCheck?"music-card neumorphisim-musiccard":"music-card library-card"} >
        <img loading="lazy" src={parser.image} alt="s"  />
        
        <BsPlayFill className="hover-playbtn"  />
        <div>
            <span className="title">{parser.song}</span>
            <span className="singer">{parser.singer}</span>
        </div>
        
        
        
        </div> 
        </NavLink>
            
     );
}
 
export default MusicCard;