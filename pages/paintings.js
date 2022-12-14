import Header from "../components/header/header"
import Background from "../components/background";
import Thumbnails from "../components/paintings/thumbnails";

export default function Paintings() {
    return (
        <div className={Background() + " text-white flex flex-col min-h-screen"}>
            <Header/>
            <Thumbnails/>
        </div>
    );
}