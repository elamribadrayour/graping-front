import axios from 'axios'
import React from "react";
import Link from 'next/link';
import Image from 'next/image';

export default class Logo extends React.Component
{
    constructor()
    {
        super();
        this.state = {logo : undefined};
    }

    get_logo() 
    {
        let link = "https://3qd6ib.deta.dev/header/get/logo"
        axios.get(link, {responseType: 'arraybuffer'})
            .then(response => 
                {
                    let image = Buffer.from(response.data, 'binary').toString('base64')
                    this.setState({logo: image})
                })
    }

    render()
    {
        let logo = this.state.logo
        if(this.state.logo === undefined)
        {
            logo = ""
            this.get_logo()
        }

        return(
            <Link href='/'>
                <div className='flex flex-col md:flex-row items-center justify-center"
                                    mt-10 md:mt-0 space-x-2'>   
                    <Image src={"data:image/png;base64, " + logo} 
                        alt=""
                        width={30}
                        height={30}
                        className="w-10 h-10 p-2"/>
                    <div className="text text-lg font-medium">
                        Graping
                    </div>
                </div>
            </Link>
        );
    }
}
