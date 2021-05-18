import Stories from './Stories';
import Input from '../Input/Input';
import Posts from './Posts'
const Feed = ({posts}) => {
    return (
        <div className="flex-grow h-screen  pb-44 pt-6 mr-4 xl:mr-40 overflow-y-auto scrollbar-hide">
            {/*story*/}
            <div className="mx-auto max-w-md md:max-w-lg lg:max-w-2xl">
            <Stories/>
            <Input/>
            <Posts posts={posts}/>
            </div>
        
            {/*Posts*/}
        </div>
    )
}

export default Feed
