import {useCollection} from 'react-firebase-hooks/firestore'
import { db } from '../firebase'
import Post from './Post';
const Posts = ({posts}) => {
    const [realtimePost,loading,error]=useCollection(
        db.photo.orderBy('timestamp','desc')
    )
    return (
        <div>
             { realtimePost? realtimePost?.docs.map(post=>(<Post
            key={post.data().id}
            name={post.data().name}
            caption={post.data().caption}
            time={post.data().timestamp}
            postImg={post.data().postImg}
            userImg={post.data().image}
            />)):(
              posts.map(post=>(
                <Post
                key={post.id}
                name={post.name}
                caption={post.caption}
                time={post.timestamp}
                postImg={post.postImg}
                userImg={post.image}
                />
                ))  
            )

            }
        </div>
    )
}

export default Posts
