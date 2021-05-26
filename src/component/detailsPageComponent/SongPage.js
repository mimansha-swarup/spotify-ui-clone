import "../Liked.css"
import DetailHead from "./HeadBox"

import SongListing from "./SongListing"
  


const SongPage = (props) => {
    const data = props.location.state.check;
    
    return (
        <div className="content" style={{backgroundImage:"linear-gradient(#FA5077,#0F0F0F 30vh)", backgroundAttachment:"fixed"}}>
            <DetailHead imgsrc={data.image} heading={data.song} desc={`by ${data.singer}`} /> 
            <SongListing props={data.songsLst}/>
            
            {
            //    {console.log(props.location.state)}
        }
            
            

        </div>
      );
}
 
export default SongPage;