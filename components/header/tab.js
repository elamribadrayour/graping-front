import Link from "next/link"

export default function Tab({href, title})
{
    return(
        <div>
            <Link href='/404'>{title}</Link>
        </div>
    )
}