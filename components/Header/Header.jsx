import Image from 'next/image';
import {BellIcon,HomeIcon,UserCircleIcon, UserGroupIcon,ViewGridIcon,ChatIcon,ChevronDownIcon} from '@heroicons/react/solid'
import {SearchIcon,FlagIcon,PlayIcon,ShoppingCartIcon} from '@heroicons/react/outline';
import HeaderIcon from './HearderIcon';
import { useSession } from 'next-auth/client';
const Header = () => {
    const [session]=useSession()
    return (
        <header className="stiky top-0 z-50 bg-white flex   items-center p-2 lg:p-x-5 shadow-md">
            {/*left*/}
            <div className=" flex items-center ">
               <Image src="https://img.icons8.com/fluent/2x/facebook-new.png" 
               width={40} 
               height={40} 
               layout="fixed"/>
               <div className="flex ml-3 items-center p-2 bg-gray-100 rounded">
                   <SearchIcon className="h-6 text-gray-600"/>
                   <input type="text" 
                   placeholder="Search facebook" 
                   className="hidden md:inline-flex ml-2 outline-none bg-transparent flex-shrink"/>
               </div>
            </div>

            {/*center*/}
            <div className="center flex justify-center flex-grow">
             <div className="flex  md:space-x-6 space-x-2">
                 <HeaderIcon Icon={HomeIcon} active/>
                 <HeaderIcon Icon={FlagIcon}/>
                 <HeaderIcon Icon={PlayIcon}/>
                 <HeaderIcon Icon={ShoppingCartIcon}/>
                 <HeaderIcon Icon={UserGroupIcon}/>
             </div>
            </div>

            {/*right*/}
            <div className="right flex items-center sm:space-x-2 justify-end">
                {/*profile pic*/}
                <Image className="rounded-full cursor-pointer" src={session.user.image} width={40} height={40}/>
                <p className="font-semibold pr-3">{session.user.name}</p>
                <ViewGridIcon className="icon"/>
                <ChatIcon className="icon"/>
                <BellIcon className="icon"/>
                <ChevronDownIcon className="icon"/>
            </div>
        </header>
    )
}

export default Header
