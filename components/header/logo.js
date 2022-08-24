import axios from 'axios'
import React from "react";

export default class Logo extends React.Component
{
    constructor()
    {
        super();
        this.state = {logo : undefined};
    }

    get_logo() 
    {
        let link = "http://localhost:8082/header/get/logo"
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
            <a href='/' className='flex flex-col md:flex-row items-center justify-center"
                                    mt-10 md:mt-0'>
                <img src={"data:image/png;base64, " + logo} 
                    alt=""
                    className="w-10 h-10 p-2"/>
                <div className="text text-lg font-medium">
                    Graping
                </div>
            </a>
        );
    }
}
