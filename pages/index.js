import { getSession } from 'next-auth/client';
import Head from 'next/head';
import Header from '../components/Header/Header';
import Login from '../components/Login';
import Sidebar from '../components/Sidebar/Siderbar';
import Feed from '../components/Feed/Feed';
import Widgets from '../components/Sidebar/Widgets';
import { db } from '../components/firebase';
const Home=({session,posts})=>{
  if(!session)return<Login/>;
  return (
    <div className="bg-gray-100">
      <Head><title>{"Facebook Clone"}</title></Head>
      {/*Header*/}
      <Header/>
      {/*Body*/}

      <div>
        <main className="flex justify-space-between">
       {/* sidbar*/}
        <Sidebar/>
       {/*feed*/}
        <Feed posts={posts}/>
       {/*wigets*/}
       <Widgets/>
       </main>
      </div>
    </div>
  )
}

export default Home

export async function getServerSideProps(context){
 const session= await getSession(context);
 const posts = await db.photo.orderBy('timestamp','desc').get()
 const docs=posts.docs.map(post=>({
   id:post.id,
   ...post.data(),
   timestamp:null
 }))
 return {
   props:{
     session:session,
     posts:docs,
   }
 }
}