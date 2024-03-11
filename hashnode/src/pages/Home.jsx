import Header from "../components/Header"
import Imgs from "../components/atoms/Imgs"
import Brands from "../components/atoms/Brands"
import Info from "../components/Info"
import News from "../components/News"

function Home() {
    return (
        <>
            <Header></Header>

        

            <Imgs></Imgs>
      


            <div className="bg-white myShadow">
                <Brands></Brands>
                <Info></Info>
                <News></News>
            </div>


        </>
    )
}
export default Home