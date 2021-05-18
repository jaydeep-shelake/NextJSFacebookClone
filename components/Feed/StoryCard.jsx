import Image from 'next/image';
const StoryCard = ({name,src,profile}) =>{
    return (
        <div className="
        relative h-14 w-14 md:h-20 w-20 lg: h-56 w-32 cursor-pointer 
        overflow-x p-3 transition duration-100 transform ease-in hover:scale-105 hover:animate-pulse">
            <img 
         className="absolute opacity-0 lg:opacity-100 rounded-2xl  top-15"
         src={profile}
         width={90}
         height={90}
         layout="fixed"
         alt={name}
            />
            <div className="ml-1 mt-1  brightness-75 w-10 h-10 object-cover filter brightness-75 z-50 rounded-full lg:rounded-full"
>
            <img src={src}
            layout="fill"
            style={{width:'100%',height:'100%'}}
            alt={name}
            className="rounded-full "
            />
            </div>
            <p style={{bottom:'-50px',fontSize:'12px'}} className="absolute opacity-0 lg:opacity-100    w-5/6 text-white txet-sm font-bold truncate">{name}</p>
        </div>
    )
}

export default StoryCard
