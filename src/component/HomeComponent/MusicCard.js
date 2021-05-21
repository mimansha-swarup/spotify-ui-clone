import { BsPlayFill  } from 'react-icons/bs'
const MusicCard = ({parser,styleCheck}) => {
    return ( 
        <div className={styleCheck?"music-card neumorphisim-musiccard":"music-card"} >
        <img src={`${parser.image}`} alt="s"  />
        
        <BsPlayFill className="hover-playbtn"  />
        
        <span className="title">{parser.song}</span>
        <span className="singer">{parser.singer}</span>
        
        </div> 
            
     );
}
 
export default MusicCard;