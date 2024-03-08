import first from "C:/Users/Jessica/Desktop/hashnodeClone/hashnode/src/assets/first.avif";
import second from "C:/Users/Jessica/Desktop/hashnodeClone/hashnode/src/assets/second.avif";
import third from "C:/Users/Jessica/Desktop/hashnodeClone/hashnode/src/assets/third.png";
import fourth from "C:/Users/Jessica/Desktop/hashnodeClone/hashnode/src/assets/fourth.avif";


function Imgs() {
    return (
       
        <>
            <div className="container mx-auto">
                <div >
                    <div className="img">
                        <img src={third} alt="" className="draw" />
                    </div>
                    <div className="img">
                        <img src={second} alt="" className="center" />
                    </div>
                </div>


                <div className="flex justify-between lati">
                    <div className="sx">
                        <img src={first} alt="" />
                    </div>
                    <div className="dx">
                        <img src={fourth} alt="" />
                    </div>
                </div>
            </div>

            </>
       
    )
}

export default Imgs