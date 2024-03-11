import { Button } from "@material-tailwind/react";

function News(){
    return(
        <>
        <div className="py-20">
        <h2 className="container mx-auto mb-10 text-5xl font-semibold text-slate-900 px-64">Transform your blog into a <span className="text-blue-500">newsletter</span>  instantly!</h2>

            <div className="flex justify-center">

            <Button variant="filled" className="  text-white font-medium bg-blue-500 rounded-full flex gap-2 py-3 text-lg px-5 ">
               
                Create your newsletter</Button>
            </div>

        </div>
    </>
    )
}

export default News