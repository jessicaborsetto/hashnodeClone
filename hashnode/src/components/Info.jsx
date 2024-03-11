import one from "C:/Users/Jessica/Desktop/hashnodeClone/hashnode/src/assets/blog.avif";
import two from "C:/Users/Jessica/Desktop/hashnodeClone/hashnode/src/assets/gilliermo.avif";
import three from "C:/Users/Jessica/Desktop/hashnodeClone/hashnode/src/assets/hashgit.avif";
import four from "C:/Users/Jessica/Desktop/hashnodeClone/hashnode/src/assets/markdown.avif";
import five from "C:/Users/Jessica/Desktop/hashnodeClone/hashnode/src/assets/newsletter.avif";
import six from "C:/Users/Jessica/Desktop/hashnodeClone/hashnode/src/assets/button.avif";

function Info() {
    return (
        <>
            <h2 className="container mx-auto my-40 text-5xl font-semibold text-slate-900 px-64"><span className="text-blue-500">Blogging platform </span>optimized for software developers and technical writers.</h2>
            <div className="container mx-auto  px-52 grid gap-10 mb-40">

                <div className="bg-slate-100 rounded-3xl border-slate-200 leading-7">
                    <div className="grid grid-cols-2 ">
                        <div className="text-left p-10 grid place-content-center">
                            <h3 className="text-xl font-bold text-slate-800 ">Super-fast and SEO-optimized blogs built for developers and tech enthusiasts.</h3>
                            <p className="text-md font-md text-slate-500 ">Hashnode blogs are fast, up-to-date with SEO techniques, and score above 90 on all Lighthouse parameters. They're simple, elegant, and user-friendly.</p>
                        </div>
                        <div className="py-10">
                            <img src={one} alt="" />
                        </div>
                    </div>

                </div>
                <div className="bg-slate-100 rounded-3xl border-slate-200 leading-7">
                    <div className="grid grid-cols-2">
                        <div className="text-left p-10 grid place-content-center">
                            <h3 className="text-xl font-bold text-slate-800 ">Own your traffic. Blog for free on a custom domain!</h3>
                            <p className="text-md font-md text-slate-500 ">Don't blog on rented URLs. Map your custom domain to your Hashnode blog for free and own your traffic. True content ownership.</p>
                        </div>
                        <div className="pt-10">
                            <img src={two} alt="" />
                        </div>
                    </div>

                </div>

                <div className="grid grid-cols-2 gap-10">
                    <div className="bg-slate-100 rounded-3xl border-slate-200 leading-7">
                        <div className="grid place-content-center">
                            <div className="text-left p-10 grid place-content-center">
                                <h3 className="text-xl font-bold text-slate-800 ">Automatic GitHub backup and publishing.</h3>
                                <p className="text-md font-md text-slate-500 ">Publish articles from your GitHub repository to your Hashnode blog and backup your Hashnode articles to GitHub like a pro.</p>
                            </div>
                            <div>
                                <img src={three} alt="" />
                            </div>
                        </div>

                    </div>
                    <div className="bg-slate-100 rounded-3xl border-slate-200 leading-7">
                        <div className="grid place-content-center">
                            <div className="text-left p-10 grid place-content-center">
                                <h3 className="text-xl font-bold text-slate-800 ">Write effortlessly with Markdown-first WYSIWYG editor.</h3>
                                <p className="text-md font-md text-slate-500 ">Use Hashnode's Markdown-based WYSIWYG editor for code blocks, syntax highlighting, and web embeds.</p>
                            </div>
                            <div className="flex justify-center">
                                <img src={four} alt="" className="w-80"/>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="grid grid-flow-row-dense grid-cols-3 gap-10">
                    <div className="bg-slate-100 rounded-3xl border-slate-200 leading-7 col-span-2">
                        <div className="grid place-content-center">
                            <div className="text-left p-10 grid place-content-center">
                                <h3 className="text-xl font-bold text-slate-800 ">Transform your blog into a newsletter instantly.</h3>
                                <p className="text-md font-md text-slate-500 ">Expand your audience with Hashnode's free built-in newsletter feature. Capture readers' email addresses and engage them by sending articles directly to their inbox.</p>
                            </div>
                            <div className="flex justify-center">
                                <img src={five} alt="" className="w-5/6" />
                            </div>
                        </div>

                    </div>
                    <div className="bg-slate-100 rounded-3xl border-slate-200 leading-7">
                        <div className="grid place-content-center">
                            <div className="text-left p-10 grid place-content-center">
                                <h3 className="text-xl font-bold text-slate-800 ">All of these, completely free!</h3>
                                <p className="text-md font-md text-slate-500 ">Join the thriving community of millions of developer bloggers now.</p>
                            </div>
                            <div className="flex justify-center">
                                <img src={six} alt="" className="w-48"/>
                            </div>
                        </div>

                    </div>
                </div>


            </div>
        </>
    )
}
export default Info