const DetailHead = ({imgsrc, heading,desc}) => {
    return ( 
        <div id="headerbox" >
            <div className="row">
                <img src={imgsrc} alt="Coverimage" />
                <div className="col">
                    <h5>{desc}</h5>
                    <h1>{heading}</h1>
                    <h5>PlayList</h5>

                </div>
            </div>
        </div>
     );
}
 
export default DetailHead;