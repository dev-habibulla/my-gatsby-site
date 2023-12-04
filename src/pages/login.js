import * as React from 'react'
import { Link } from 'gatsby'
import Logo from "../images/Logo.png"
import Images from './../components/img';
// Step 2: Define your component
const Login = () => {
  return (
    <main className="flex justify-center items-center flex-col">
      <div>
        <Images src={Logo} className="mb-10 pt-36" />
      </div>
      <div className="text-center">
        <h1 className="text-4xl text-[#11175D] font-bold pb-3">
          Login
        </h1>
        <p className=" pb-12">Free Login and you can enjoy it</p>


        <input className="border p-5  w-9/12	 m-3	 " type="text" name="email" placeholder="Email Addres" />

        <input className="border p-5 w-9/12			m-3	 " type="password" name="password" placeholder="Password" />

      </div>
      <button className="bg-green-500 py-2 px-6 text-white rounded">Sing in</button>
      <Link to="/" className=" bg-green-500 py-2 px-6 m-10 text-white rounded">Back to Home</Link>
    </main>

  )
}

// Step 3: Export your component
export const Head = () => <title>Login Page</title>
export default Login