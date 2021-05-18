import Image from "next/image"
import { timestamp } from "../firebase";
import {ChatAltIcon,ShareIcon,ThumbUpIcon} from '@heroicons/react/outline'

const Post = ({name,caption,time,postImg,userImg}) => {
    
    return (
        <div className="flex flex-col p-2">
            <div className="p-5 bg-white mt-5 rounded shadow-sm">
                <div className="flex items-center space-x-2">
                    <img src={userImg} width={40} height={40} className="rounded-full"/>
                    <div>
                        <p className="font-medium ">{name}</p>
                        {time?
                        <p className="text-xs text-gray-400">{
                            new Date(time?.toDate()).toLocaleString()
                        }</p>:<p className="text-xs  text-gray-400">Loding....</p>}
                    </div>
                </div>
                <p className="pt-4">{caption}</p>
            </div>
            {postImg&&(
                <div className="relative h-56 md:h-96 bg-white mb-2">
                    <Image src={postImg} objectFit="contain" layout="fill"/>
                </div>
            )}

            <div style={{marginTop:'-7px'}} className="flex justify-evenly p-2 items-center  rounded-b-2xl  bg-white shadow-md text-gray-400 border-t">
             <div className="inputicon ronded-none rounded-bl-2xl">
                 <ThumbUpIcon className="h-4"/>
                 <p className="text-xs sm:text-base">Like</p>
             </div>
             <div className="inputicon">
               <ChatAltIcon className="h-4"/>
               <p className="text-xs sm:text-base">Comment</p>
             </div>
             <div  className="inputicon ronded-none rounded-br-2xl">
            <ShareIcon className="h-4"/>
            <p className="text-xs sm:text-base">Share</p>
             </div>
            </div>
        </div>
    )
}

export default Post
