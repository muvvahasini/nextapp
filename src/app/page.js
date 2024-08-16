import { Button } from "@/components/ui/button"

import Link from 'next/link'
import mvgbackgroundImage from "../../public/mvgbackgroundImage.jpg";

export default function Home() {
  return (
    <div>
      <div className="flex m-1 justify-between gap-5 items-center bg-light md:grid-cols-3 p-3">
        <div>
        <p className="font-serif text-fuchsia-600 " style={{
          fontStyle:"italic" ,
          fontFamily:"fantasy",
          fontWeight:"bold",
          fontSize:"25px",
        }}>MVG </p>
        <p className="font-serif text-fuchsia-600  ml-6" style={{
          fontStyle:"italic" ,
          fontFamily:"fantasy",
          fontWeight:"bold",
          fontSize:"25px",
        }}>INNOVATIONS</p>
        </div>
        <div className="flex justify-between gap-5 p-2 font-500 text-[20px]">
        <a href="#dataEl">Features</a>
        <p>About us</p>
        <p>Contact us</p>
        </div>
        <Link href="/LoginPage">
        <Button>login</Button>
        </Link>
      </div>
      <hr/>
      <div style={{
        backgroundImage:`url(${mvgbackgroundImage.src})`,
        backgroundPosition:"center",
        backgroundSize:"cover",
        width:"100vw",
        height:"60vh",
        display:"flex",
        flexDirection:"row",
        alignItems:"flex-start",
        justifyContent:"space-between",
        padding:"20px",

      }}>
        <div className="">
        <h1 className="text-white font-500 m-1 text-[30px]">Learn what ever you want to, and give the first step to your career.</h1>
        <p className="text-white font-500 m-1 text-[28px]">This right path to start your journey.</p>
        <Button className="m-1">Enroll Now</Button>
        <p className="text-gray-300 font-500 text-[28px]">Enroll now to Explore</p>
        </div>
      </div>
      <div>
        <p id="dataEl">data</p>
      </div>
    </div>
  );
}
