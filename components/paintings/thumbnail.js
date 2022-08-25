import Link from "next/link"


export default function Thumbnail({ name, image }) {
    return (
        <Link href={"paintings/" + name}>
            <div key={name} className="relative group rounded-xl bg-slate-100 w-50">
                <img alt="" src={"data:image/png;base64, " + image} className="rounded-xl w-full" />
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
        </Link>
    )
}