import Logo from "./logo";
import Tabs from "./tabs";

export default function Header()
{
    return(
        <div className="bg-white  text-slate-900 flex flex-col border-b-2 items-center justify-between
                        space-y-20 p-10
                        md:flex-row md:space-y-0">
            <Logo/>
            <Tabs/>
        </div>
    )
}