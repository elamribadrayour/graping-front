import Header from "../components/header/header"
import Background from "../components/background";

export default function Home() {
    return (
        <div className={Background() + " text-white flex flex-col min-h-screen"}>
            <Header/>
        </div>
    );
}