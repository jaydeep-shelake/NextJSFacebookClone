import Image from "next/image"

const Contact = ({src,name}) => {
    return (
        <div className="flex items-center space-x-3 rounded mb-3 relative hover:bg-gray-300 cursor-pointer p-2">
            <Image src={src} className="rounded-full" objectFit="cover" width={50} height={50} layout={"fixed"}/>
            <p>{name}</p>
            <div className="absolute  bottom-2 left-7 bg-green-500 h-3 w-3 rounded-full"/>
        </div>
    )
}

export default Contact
