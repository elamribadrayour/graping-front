import { useRouter } from "next/router";
import axios from "axios";
import Header from "../../components/header/header";
import Background from "../../components/background";
import { useEffect, useState, useRef } from "react";

export default function Streamlit() 
{
    let router = useRouter()
    let isRendered = useRef(false);
    let [url , setUrl] = useState(undefined)

    const name = "url"
    const { streamlit } = router.query
    const prefix_url = "https://3qd6ib.deta.dev/ml/get/url/"

    useEffect(() => {
        isRendered = true;
        axios.get(prefix_url + streamlit)
        .then(response => {
            if(response.data === null)
            {
                return
            }
            else
            {
            }

            setUrl(response.data[name]);
        })
        .catch(error => console.log(error))
        return () => {
            isRendered = false;
        };
    }, []);

    return (

        <div className={Background() + " text-white flex flex-col min-h-screen"}>
            <Header />
            <div className="flex items-center justify-center min-h-screen">
                <iframe className="min-h-screen w-screen" src={url}></iframe>
            </div>
        </div>
    );
}
