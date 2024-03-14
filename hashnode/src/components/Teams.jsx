import { Button } from "@material-tailwind/react";
import teamOne from "C:/Users/Jessica/Desktop/hashnodeClone/hashnode/src/assets/teamOne.avif";
import teamTwo from "C:/Users/Jessica/Desktop/hashnodeClone/hashnode/src/assets/teamtwo.avif";
import teamThree from "C:/Users/Jessica/Desktop/hashnodeClone/hashnode/src/assets/teamthree.avif";

function Teams() {
    return (
        <>
            <h2 className="container mx-auto mt-40 text-5xl font-semibold text-slate-900 px-64">Hashnode for teams.</h2>
            <h3 className="mt-7 font-medium text-xl">Get your team's voice heard. Launch an engineering blog, a product updates page, or a company culture showcase.</h3>

            <div className="container mx-auto my-20 grids grid-cols-2 place-items-center gap-10">

                <Button variant="filled" className=" w-64 text-white font-medium bg-blue-500 rounded-full gap-2 py-3 text-lg ">

                    Start a team blog</Button>

                <Button variant="filled" className=" w-48 text-white font-medium bg-blue-500 rounded-full gap-2 py-3 text-lg ">

                    Learn</Button>
            </div>


            <div className="container mx-auto  px-52 grid gap-10 mb-40">



                <div className="grid grid-cols-2 gap-10">
                    <div className="bg-slate-100 rounded-3xl border-slate-200 leading-7">
                        <div className="grid place-content-center">
                            <div>
                                <img src={teamOne} alt="" />
                            </div>
                            <div className="text-left p-10 grid place-content-center">
                                <h3 className="text-xl font-bold text-slate-800 ">Advanced user management.</h3>
                                <p className="text-md font-md text-slate-500 ">Collaborate with your team members and publish under the same domain. Get access to advanced member management.</p>
                            </div>

                        </div>

                    </div>
                    <div className="bg-slate-100 rounded-3xl border-slate-200 leading-7">
                        <div className="grid place-content-center">

                            <div className="flex justify-center">
                                <img src={teamTwo} alt="" />
                            </div>
                            <div className="text-left p-10 grid place-content-center">
                                <h3 className="text-xl font-bold text-slate-800 ">Built-In Analytics.</h3>
                                <p className="text-md font-md text-slate-500 ">Analyze your articles' performance over a period of time. Access powerful analytics to track the number of views and likes on your blog.</p>
                            </div>

                        </div>

                    </div>
                </div>

                <div className="bg-slate-100 rounded-3xl border-slate-200 leading-7">
                    <div className="grid grid-cols-2 ">
                        <div className="text-left p-10 grid place-content-center">
                            <h3 className="text-xl font-bold text-slate-800 ">Native GitHub integration.</h3>
                            <p className="text-md font-md text-slate-500 ">Publish and backup articles directly on a private or public GitHub repository, enabling you to always have control over your content.</p>
                        </div>
                        <div className="py-10">
                            <img src={teamThree} alt="" className="p-2"/>
                        </div>
                    </div>

                </div>
                <div className="bg-slate-100 rounded-3xl border-slate-200 leading-7">
                    <div className="grid grid-cols-2">
                        <h2 className=" p-10 place-content-center text-5xl text-left font-bold text-gray-900 ">COLLABORATE FEEDBACK</h2>

                        <div className="text-left p-10 grid place-content-center">
                            <h3 className="text-xl font-bold text-slate-800 ">Advanced editing and writing collaboration.</h3>
                            <p className="text-md font-md text-slate-500 ">Hashnode offers advanced collaboration features that you would expect from a team blog. It includes an approval process and feedback system to enhance drafts before they are published on the blog.</p>
                        </div>

                    </div>

                </div>



            </div>
        </>
    )
}

export default Teams