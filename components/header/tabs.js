import axios from 'axios'
import React from "react";

import Tab from './tab';

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
                        tabs.map((title, key) => (
                            <div key={key}>
                                <Tab href="/404" title={title}/>
                            </div>
                        ))
                    }
            </div>
        );
    }
}

/*
<button id="dropdownDefault" data-dropdown-toggle="dropdown" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Dropdown button <svg class="ml-2 w-4 h-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>
<!-- Dropdown menu -->
<div id="dropdown" class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700">
    <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefault">
      <li>
        <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
      </li>
      <li>
        <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
      </li>
      <li>
        <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
      </li>
      <li>
        <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
      </li>
    </ul>
</div>
*/