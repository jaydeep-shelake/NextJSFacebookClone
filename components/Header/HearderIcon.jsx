const HearderIcon = ({Icon,active}) => {
    return (
        <div className="flex items-center rounded cursor-pointer md:px-6 sm:h-14 md:hover:bg-gray-100 active:border-b-2 active:border-blue-500 group">
           <Icon className={`${active?'text-blue-500':'text-gray-500'} h-5 md:h-6 mx-auto  group-hover:text-blue-500 text-center`}/> 
        </div>
    )
}

export default HearderIcon
