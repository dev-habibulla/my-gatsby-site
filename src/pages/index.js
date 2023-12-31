import * as React from "react"
import { Link } from 'gatsby'
import Logo from "../images/Logo.png"
import Images from './../components/img';


const IndexPage = () => {
  return (
    <main className="flex justify-center items-center flex-col">
      <div>
        <Images src={Logo} className="mb-10 pt-36" />
      </div>
      <div className="text-center">
        <h1 className="text-4xl text-[#11175D] font-bold pb-3">
          Get started with easily register
        </h1>
        <p className=" pb-12">Free register and you can enjoy it</p>


        <input className="border p-5  w-9/12	 m-3	 " type="text" name="email" placeholder="Email Addres" />
        <input className="border p-5 w-9/12	m-3	 " type="text" name="name" placeholder="Full Name" />
        <input className="border p-5 w-9/12			m-3	 " type="password" name="password" placeholder="Password" />
        
      </div>
      <button  className="bg-green-500 py-2 px-6 text-white rounded">Sing Up</button>
      <Link
        to="/login"
        className="bg-green-500 py-2 px-6 m-10 text-white rounded"
      >
        Login Page
      </Link>
    </main>
  )
}
export const Head = () => <title>Home Page</title>

export default IndexPage


