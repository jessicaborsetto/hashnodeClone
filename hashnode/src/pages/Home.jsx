import Header from "../components/Header"
import Imgs from "../components/atoms/Imgs"
import Brands from "../components/atoms/Brands"
import Info from "../components/Info"
import News from "../components/News"
import InfoNews from "../components/InfoNews"
import Rating from "../components/Rating"

function Home() {
    return (
        <>
            <Header></Header>

        

            <Imgs></Imgs>
      


            <div className="bg-white myShadow">
                <Brands></Brands>
                <Info></Info>
                <News></News>
                <InfoNews></InfoNews>
            </div>
            <div className="bg-black p-32">
                <Rating></Rating>

            </div>


        </>
    )
}
export default Home