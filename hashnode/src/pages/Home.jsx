import Header from "../components/Header"
import Imgs from "../components/atoms/Imgs"
import Brands from "../components/atoms/Brands"

function Home() {
    return (
        <>
            <Header></Header>

        

            <Imgs></Imgs>
      


            <div className="bg-white myShadow">

                <Brands></Brands>
            </div>
        </>
    )
}
export default Home