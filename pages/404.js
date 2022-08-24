import Link from "next/link";
import Header from "../components/header/header";
import Background from "../components/background";

export default function not_found() {
    return (
        <div>
            <Header />
            <div className={Background() + " text-white"}>
                <div className="flex min-h-screen text-center 
                            flex-col space-y-10
                            items-center justify-center
                            md:space-x-10
                            md:flex-row md:space-y-0">
                    <div className="hover:text-black hover:bg-white border-whit
                                        rounded-xl py-2 px-4 border 
                                        duration-1000">
                        <Link href="/404">
                            Retry
                        </Link>
                    </div>

                    <div className="hover:text-black hover:bg-white border-white 
                                        rounded-xl py-2 px-4 border 
                                        duration-1000">
                        <Link href="/">
                            Home
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}