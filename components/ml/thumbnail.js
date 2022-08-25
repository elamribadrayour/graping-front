import React from "react";
import Link from "next/link"

export default class Thumbnail extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {

        let background = "bg-gradient-to-r from-slate-400 to-yellow-100"
        return (
            <Link href={"streamlit/" + this.props.link}>
                <div key={this.props.name} className={background + " relative uppercase text-center group  px-10 py-10 rounded-xl text-slate-900 w-50"}>
                    {this.props.name}
                </div>
            </Link>);
    }
}