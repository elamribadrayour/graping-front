

export default function Thumbnail({name, image}) {
    console.log(name)
    return (
        <div key={name} className="relative group">
            <img alt="" src={"data:image/png;base64, " + image} className="w-72" />
            <div
                className="absolute bottom-0 left-0 right-0 p-2 px-4 text-white duration-500 bg-black opacity-0 group-hover:opacity-100 bg-opacity-40"
            >
                <div className="flex justify-between w-full">
                    <div className="font-normal">
                        <p className="text-sm">{name}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}