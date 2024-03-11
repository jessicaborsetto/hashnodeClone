import first from "C:/Users/Jessica/Desktop/hashnodeClone/hashnode/src/assets/nlsett.avif";
import second from "C:/Users/Jessica/Desktop/hashnodeClone/hashnode/src/assets/nltwo.avif";
import third from "C:/Users/Jessica/Desktop/hashnodeClone/hashnode/src/assets/nlthree.avif";

function InfoNews() {
    return (
        <>
            <h2 className="container mx-auto my-40 text-5xl font-semibold text-slate-900 px-64"><span className="text-blue-500">Blogging platform </span>optimized for software developers and technical writers.</h2>
            <div className="container mx-auto  px-52 grid gap-10 mb-40">

                <div className="bg-slate-100 rounded-3xl border-slate-200 leading-7">
                    <div className="grid grid-cols-2 ">
                    <div className="py-10">
                            {/* <img src={one} alt="" /> */}
                        </div>
                        <div className="text-left p-10 grid place-content-center">
                            <h3 className="text-xl font-bold text-slate-800 ">Transform your readers into devoted fans.</h3>
                            <p className="text-md font-md text-slate-500 ">Capture readers' email addresses easily with Hashnode's built-in newsletter feature. The subscription form appears on your blog homepage and below every article.</p>
                        </div>
                       
                    </div>

                </div>

                <div className="grid grid-cols-2 gap-10 ">
                    <div className="bg-slate-100 rounded-3xl border-slate-200 leading-7">
                        <div className="grid place-content-center">
                            <div className="text-left p-10 grid place-content-center">
                                <h3 className="text-xl font-bold text-slate-800 ">Advanced subscribers management.</h3>
                                <p className="text-md font-md text-slate-500 ">Manage your subscribers like a pro with our easy-to-use dashboard. Import and delete subscribers anytime, hassle-free.</p>
                            </div>
                            <div className="px-10">
                                <img src={first} alt="" />
                            </div>
                        </div>

                    </div>
                    <div className="bg-slate-100 rounded-3xl border-slate-200 leading-7">
                        <div className="grid place-content-center">
                            <div className="text-left p-10 grid place-content-center">
                                <h3 className="text-xl font-bold text-slate-800 ">Deliver articles straight to readers' inboxes.</h3>
                                <p className="text-md font-md text-slate-500 ">With the newsletters feature enabled, you can send articles to your readers' inboxes.</p>
                            </div>
                            <div >
                                <img src={second} alt="" />
                            </div>
                        </div>

                    </div>
                </div>
                <div className="bg-slate-100 rounded-3xl border-slate-200 leading-7">
                    <div className="grid grid-cols-2">
                        <div className="text-left p-10 grid place-content-center">
                            <h3 className="text-xl font-bold text-slate-800 ">Syntax-highlighted code blocks.</h3>
                            <p className="text-md font-md text-slate-500 ">Our newsletters support syntax-highlighted code blocks, which is a first in the industry.</p>
                        </div>
                        <div className="pt-10">
                            <img src={third} alt="" />
                        </div>
                    </div>

                </div>

                

               


            </div>
        </>
    )
}
export default InfoNews