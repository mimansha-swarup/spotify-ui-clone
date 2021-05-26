import { BsPlayFill  } from 'react-icons/bs'
const SongListing = ({props}) => {
    return ( 
        <div>
        <BsPlayFill id="playbtn"  />
            
            <table id="details">
            <thead>
            <tr>
                <th>#</th>
                <th>TITLE</th>
                <th>ARTIST</th>
                <th>DURATION</th>
                </tr>
            </thead>
            <tbody>
            {
                props.map((delEle)=>(
                    <tr key={delEle.id}>
                        <td ><BsPlayFill id="details-play-btn"  /> <span className="to-hide">{delEle.id}</span></td>
                        <td>{delEle.songName}</td>
                        <td>{delEle.singerName}</td>
                        <td>{delEle.duration}</td>
                    </tr>
                ))

            }
            
               
                
                
            </tbody>
            </table>

        </div>
     );
}
 
export default SongListing;