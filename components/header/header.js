import Logo from "./logo";
import Tabs from "./tabs";

export default function Header()
{
    return(
        <div className="bg-white flex flex-col border-b-2 items-center justify-between
                        space-y-20 pb-10
                        md:flex-row md:space-y-0 md:pb-0">
            <Logo/>
            <Tabs/>
        </div>
    )
}