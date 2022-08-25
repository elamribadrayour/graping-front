import Header from "../components/header/header"
import Background from "../components/background";
import Streamlits from "../components/ml/streamlits";

export default function ML()
{
    return (
        <div className={Background() + " text-white flex flex-col min-h-screen"}>
            <Header/>
            <Streamlits/>
        </div>
    );
}