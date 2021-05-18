import Head from "next/head"
import Image from "next/image"
import {signIn} from 'next-auth/client'
const Login = () => {
    return (
        <>
            <Head><title>{"Login with facebook"}</title></Head>
        <div className="grid place-items-center" style={{marginTop:'200px'}}>
            <Image src="https://img.icons8.com/fluent/2x/facebook-new.png"
            width={100}
            height={100}
            objectFit="contain"
            className="mb-5"
            />
            <h1 onClick={signIn} className="cursor-pointer bg-blue-500 text-white p-3 text-white rounded font-semibold">Login With Facebook</h1>
        </div>
        </>
    )
}

export default Login
