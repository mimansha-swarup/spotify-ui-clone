import { BsPlayFill  } from 'react-icons/bs'
const MusicCard = ({gerneTile}) => {
    return ( 
        <div className="music-list">
        {
            gerneTile.map((parser) => (
            <div className="music-card" key={parser.song}>
            <img src={`${parser.image}`} alt="s"  />
            
            <BsPlayFill className="hover-playbtn"  />
            
            <span className="title">{parser.song}</span>
            <span className="singer">{parser.singer}</span>
          
            </div> 
            
            ))
          }  
          </div>
     );
}
 
export default MusicCard;