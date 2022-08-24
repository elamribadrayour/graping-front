import axios from 'axios'
import React from "react";
import Link from 'next/link';

export default class Tabs extends React.Component
{
    constructor()
    {
        super();
        this.state = {tabs : undefined};
    }

    get_tabs() 
    {
        axios.get('https://3qd6ib.deta.dev/header/get/tabs')
        .then((response) => {
            this.setState({tabs: response["data"]["tabs"]})
        })
    }

    render()
    {
        let tabs = this.state.tabs
        if(this.state.tabs === undefined)
        {
            tabs = []
            this.get_tabs()
        }

        return(
            <div className="flex flex-col m-10 items-center justify-between
                            space-y-8
                            md:flex-row md:space-y-0 md:space-x-10" >
                    {
                        tabs.map((value, key) => (
                            <div key={key}>
                                <Link href='/404'>{value}</Link>
                            </div>
                        ))
                    }
            </div>
        );
    }
}
