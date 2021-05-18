import {SearchIcon} from '@heroicons/react/outline'
import {DotsHorizontalIcon,VideoCameraIcon}from '@heroicons/react/solid';
import Contact from './Contact'
const Widgets = () => {
    const contact =[{src:'https://upload.wikimedia.org/wikipedia/commons/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg'},{src:'https://upload.wikimedia.org/wikipedia/commons/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg'},{src:'https://upload.wikimedia.org/wikipedia/commons/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg'}]
    return (
        <div className="hidden lg:flex flex-col p2 mt-5">
            <div className="flex justify-between items-center text-gray-400 mb-3">
                <p className="text-sm font-semibold mr-2">Contacs</p>
                <div className="flex space-x-2">
                   <VideoCameraIcon className="h-6"/>
                   <SearchIcon className="h-6"/>
                   <DotsHorizontalIcon className="h-6"/>
                </div>
            </div>
            {contact.map((con,i)=>(<Contact key={i} src={con.src} name="Elon Musk "/>))}
        </div>
    )
}

export default Widgets
