import Header from "../components/header/header"
import Background from "../components/background";
import Gallery from "../components/gallery/gallery";

export default function Paintings() {
    return (
        <div className={Background() + " text-white flex flex-col min-h-screen"}>
            <Header/>
            <Gallery/>
        </div>
    );
}