const DetailHead = ({imgsrc, heading,desc,color}) => {
    return ( 
        <div id="headerbox" style={{backgroundColor:color}}>
            <div className="row">
                <img loading="lazy" src={imgsrc} alt="Coverimage" />
                <div className="col">
                    <h5>{desc}</h5>
                    <h1>{heading}</h1>
                    <h5 className="hide">PlayList</h5>
                </div>
            </div>
        </div>
     );
}
 
export default DetailHead;