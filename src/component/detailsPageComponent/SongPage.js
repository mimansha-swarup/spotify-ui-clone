import "../Liked.css"
import DetailHead from "./HeadBox"


import SongListing from "./SongListing"
  


const SongPage = (props) => {
    const data = props.location.state.check;
    
    
    return (
        <div className="content" >
            <DetailHead imgsrc={data.image} heading={data.song} desc={`by ${data.singer}`} color="#084f21"/> 
            <SongListing props={data.songsLst} color="#084f21" />
            
            {
            //   1ED760 {console.log(props.location.state)}
        }
            
            

        </div>
      );
}
 
export default SongPage;