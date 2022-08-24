import React from "react";
import axios from 'axios';

export default class Gallery extends React.Component {

    constructor() {
        super();
        this.state = { images: {} };
    }

    get_images() {
        let link = "https://3qd6ib.deta.dev/gallery/get/images/"
        axios.get(link)
            .then(response => {
                const images = new Map(Object.entries(response.data["images"]));
                this.setState({images: images})
            })
    }


    render() {
        let images = []
        if (this.state.images.size === undefined) {
            this.get_images()
        }
        else {
            images = Array.from(this.state.images)
        }

        return (
            <div className="flex flex-col min-h-screen">
                <div className="flex flex-col w-screen">
                    {/* Gallery */}
                    <div className="p-10 grid gap-10 justify-center items-center md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                        {
                            images.map(([key, image]) => (
                                <div key={key} className="relative group">
                                    <img alt="" src={"data:image/png;base64, " + image} className="w-72" />
                                    <div
                                        className="absolute bottom-0 left-0 right-0 p-2 px-4 text-white duration-500 bg-black opacity-0 group-hover:opacity-100 bg-opacity-40"
                                    >
                                        <div className="flex justify-between w-full">
                                            <div className="font-normal">
                                                <p className="text-sm">Abstract Painting</p>
                                                <p className="text-xs">245 likes - 35 Shares</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>);
    }
}

/**
 * 
 *                 for(let i = 0; i < 10; i++)
                {

                    let image = Buffer.from(response.data, 'binary').toString('base64')
                    this.setState(prevState => ({
                        images: [...prevState.images, image]
                      }))
                }
 */