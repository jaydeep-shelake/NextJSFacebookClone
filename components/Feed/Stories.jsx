const stories=[
    {name:'Jaydeep Shelake',src:"https://i.gadgets360cdn.com/large/elon_musk_reuters_1610084738222.jpg?downsize=950:*&output-quality=80",profile:"https://upload.wikimedia.org/wikipedia/commons/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg"},
    {name:'Elonk Musk',src:"https://i.gadgets360cdn.com/large/elon_musk_reuters_1610084738222.jpg?downsize=950:*&output-quality=80" ,profile:'https://upload.wikimedia.org/wikipedia/commons/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg'},
    
]

import StoryCard from './StoryCard';
const Stories = () => {
    return (
        <div className="flex justify-start space-x-3 mx-auto">
        {stories.map((story,index)=>(<StoryCard key={index} name={story.name} src={story.src} profile={story.profile}/>)
        )}
        </div>
    )
}

export default Stories
