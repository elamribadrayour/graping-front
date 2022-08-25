import axios from 'axios'
import React from "react";

import Tab from './tab';

export default class Tabs extends React.Component
{
    constructor()
    {
        super();
        this.tabs = new Map()
        this.tabs.set("/ml", "Machine Learning")
        this.tabs.set("/paintings", "Paintings")
        this.tabs.set("/music", "Music")

    }

    render()
    {
        return(
            <div className="flex flex-col m-10 items-center justify-between
                            space-y-8
                            md:flex-row md:space-y-0 md:space-x-10" >
                {
                    Array.from(this.tabs).map(([key, title]) => (
                        <div key={key}>
                            <Tab href={key} title={title}/>
                        </div>
                    ))
                }
            </div>
        );
    }
}
