import { useSession } from "next-auth/client";
import {EmojiHappyIcon} from '@heroicons/react/outline'
import {CameraIcon,VideoCameraIcon} from '@heroicons/react/solid'
import Image from 'next/image';
import {useRef,useState} from 'react'
import { db ,timestamp,storage} from "../firebase";
const Input = () => {
    const [session]=useSession();
    const captionRef =useRef(null);
    const filePickerRef=useRef(null);
    const [img,setImg]=useState(null);
    const sendPost=(e)=>{
       e.preventDefault();
       if(!captionRef.current.value)return;
       db.photo.add({
           caption:captionRef.current.value,
           name:session.user.name,
           image:session.user.image,
           email:session.user.email,
           timestamp:timestamp
       }).then(doc=>{
           if(img){
               const uploadPost=storage.ref(`posts/${doc.id}`).putString(img,'data_url')
               removeImage();
               uploadPost.on('state_change',null,err=>console.log(err),()=>{
                   //when theupload complete
                   storage.ref(`posts`).child(doc.id).getDownloadURL().then(url=>{
                       db.photo.doc(doc.id).set({
                           postImg:url
                       },{merge:true})
                   })
               });
           }
       }).catch(err=>console.log(err))
       captionRef.current.value="";
       console.log('submitted')
    }
    const addImageToPost=(e)=>{
     const reader = new FileReader();
     if(e.target.files[0]){
         reader.readAsDataURL(e.target.files[0])
     }
     reader.onload=(readerEvent)=>{
           setImg(readerEvent.target.result);
     }
    }
    const removeImage=()=>{
        setImg(null);
    }
    return (
        <div className="bg-white p-2  rounded-2xl shodow-md text-gray-500 font-medium mt-20">
            <div className="flex space-x-4 p-4 items-center">
                <Image
                className="rounded-full"
                src={session.user.image}
                width={40}
                height={40}
                layout="fixed"
                />
                <form className="flex flex-1">
                <input ref={captionRef} className="rounded h-10 bg-gray-100 flex-grow px-5 outline-none" type="text" placeholder={`whats on your mind, ${session.user.name}`}/>
                <button className="hidden" onClick={sendPost} type="submit"></button>
                </form>
                {img &&(
                    <div className="flex flex-col filter  hover:brighter-110 transition duration-150 transform hover:scale-105 cursor-pointer" onClick={removeImage}>
                        <img src={img} alt="img" className="h-10 object-contain"/>

                    </div>
                )}
            </div>
            <div className="flex items-center justify-evenly p-3 border-t ">
             <div className="inputicon">
              <VideoCameraIcon className="h-6 text-red-500"/>
              <p className="text-xs sm:text-sm xl:text-base">Live Video</p>
             </div>
             <label htmlFor="file" className="inputicon">
                <CameraIcon className="h-6 text-green-500"/>
                <p className="text-xs sm:text-sm xl:text-base">Photo/Video</p>
                <input ref={filePickerRef} id="file" type="file" onChange={addImageToPost} className="hidden"/>
            </label>
             <div className="inputicon">
             <EmojiHappyIcon className="h-6 text-yellow-500"/>
               <p className="text-xs sm:text-sm xl:text-base">Family Activity</p>

             </div>
            </div>
        </div>
    )
}

export default Input
