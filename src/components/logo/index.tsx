import Image from "next/image"
import Link from "next/link"

const Logo:React.FC = () => {
    return (
        <Link href={'/'} className="cursor-pointer">
            <Image width={48} height={48} src="/logo.svg" alt="logo" />
        </Link>
    )
}

export default Logo