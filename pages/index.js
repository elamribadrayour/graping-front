import Footer from "../components/footer"
import Header from "../components/header/header"
import Background from "../components/background";

export default function Home() 
{
    return (
        <div className={Background() + " flex flex-col h-screen"}>
            <Header/>
            <Footer/>
        </div>
    );
}