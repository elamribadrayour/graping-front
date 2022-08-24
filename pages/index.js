import Header from "../components/header/header"
import Background from "../components/background";
import Painting from "../components/gallery/painting";

export default function Home() 
{
    return (
        <div className={Background() + " text-white flex flex-col h-screen"}>
            <Header/>
            <Painting/>
        </div>
    );
}