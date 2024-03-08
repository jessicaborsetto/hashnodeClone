import amz from "C:/Users/Jessica/Desktop/hashnodeClone/hashnode/src/assets/amz.avif";
import cf from "C:/Users/Jessica/Desktop/hashnodeClone/hashnode/src/assets/cf.avif";
import git from "C:/Users/Jessica/Desktop/hashnodeClone/hashnode/src/assets/git.avif";
import google from "C:/Users/Jessica/Desktop/hashnodeClone/hashnode/src/assets/google.avif";
import meta from "C:/Users/Jessica/Desktop/hashnodeClone/hashnode/src/assets/meta.avif";
import micr from "C:/Users/Jessica/Desktop/hashnodeClone/hashnode/src/assets/micr.avif";
import netflix from "C:/Users/Jessica/Desktop/hashnodeClone/hashnode/src/assets/netflix.avif";
import square from "C:/Users/Jessica/Desktop/hashnodeClone/hashnode/src/assets/square.avif";

function Brands() {
    return (
        <div className="container mx-auto my-40">
            <h3 className="my-10 font-medium text-xl">The go-to platform for top developers from leading companies.</h3>
            <div className="px-64">
                <div className="grid grid-cols-5">
                    <div className="grid place-content-center">
                        <img src={meta} alt="" className="brand" />
                    </div>
                    <div className="grid place-content-center">
                        <img src={google} alt="" className="brand" />
                    </div>
                    <div className="grid place-content-center">
                        <img src={amz} alt="" className="brand" />
                    </div>
                    <div className="grid place-content-center">
                        <img src={micr} alt="" className="brand" />
                    </div>
                    <div className="grid place-content-center">
                        <img src={git} alt="" className="brand" />
                    </div>
                </div>
                <div className="grid grid-cols-3">
                    <div className="grid place-content-center">
                        <img src={netflix} alt="" className="brand" />
                    </div>
                    <div className="grid place-content-center">
                        <img src={cf} alt="" className="brand" />
                    </div>
                    <div className="grid place-content-center">
                        <img src={square} alt="" className="brand" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Brands