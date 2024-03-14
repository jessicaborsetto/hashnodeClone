import Header from "../components/Header"
import Imgs from "../components/atoms/Imgs"
import Brands from "../components/atoms/Brands"
import Info from "../components/Info"
import News from "../components/News"
import InfoNews from "../components/InfoNews"
import Rating from "../components/Rating"
import Teams from "../components/Teams"
import Pro from "../components/Pro"

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
            <div className="bg-black">
                <Rating></Rating>
            </div>
            <Teams></Teams>
            <div className="proSection">
                <Pro></Pro>
            </div>
        </>
    )
}
export default Home