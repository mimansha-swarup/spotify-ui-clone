import "./Liked.css"
import DetailHead from "../component/HeadBox"
import SongListing from "../Layout/SongListing"
  


const SongPage = (props) => {
    const data = props.location.state.check;
    return (
        <div className="content" >
            <DetailHead imgsrc={data.image} heading={data.song} desc={`by ${data.singer}`} color="#084f21"/> 
            <SongListing props={data.songsLst} color="#084f21" />
        </div>
      );
}
 
export default SongPage;