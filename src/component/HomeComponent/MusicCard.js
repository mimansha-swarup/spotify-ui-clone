import { FiPlayCircle  } from 'react-icons/fi'
const MusicCard = ({gerneTile}) => {
    return ( 
        <div className="music-list">
        {
            gerneTile.map((parser) => (
            <div className="music-card" key={parser.song}>
            <img src={`${parser.image}`} alt="s"  />
            <FiPlayCircle className="hover-paybtn" style={{color:'green'}} />
              <span className="title">{parser.song}</span>
              <span className="singer">{parser.singer}</span>
          
            </div> 
            
            ))
          }  
          </div>
     );
}
 
export default MusicCard;