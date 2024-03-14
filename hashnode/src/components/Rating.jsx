import Testimonial from "./atoms/Testimonial"

function Rating(){
    return(
        <>
        <div className= "p-32 border-b-2 border-indigo-600">
        <Testimonial></Testimonial>
        </div>
        <div className="grid grid-cols-4 container mx-auto text-white p-10">
            <div>
                <h3 className="font-bold text-6xl">300K</h3>
                <h3 className="font-medium leading-10">Blogs Created</h3>
            </div>
            <div>
                <h3 className="font-bold text-6xl">1M</h3>
                <h3 className="font-medium leading-10">Articles published</h3>
            </div>
            <div>
                <h3 className="font-bold text-6xl">125M</h3>
                <h3 className="font-medium leading-10"> Total article reads</h3>
            </div>
            <div>
                <h3 className="font-bold text-6xl">3M</h3>
                <h3 className="font-medium leading-10">Monthly active users</h3>
            </div>

        </div>
       
        </>
    )
}
export default Rating