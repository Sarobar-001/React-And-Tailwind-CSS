import React from "react";
import NavBar from "../components/NavBar";
import { Card1 , Card2, Card3, Card4, Card5, Card6} from "../components/Card";
import Footer from "../components/Footer";


export default function Home() {
  return (
    <>
      <div className="flex w-[100%] h-[100vh] justify-center">
        <div className="w-[70%] ">
          <NavBar />
          <div className="flex h-[33rem] mt-28">
            <div className=" flex flex-col h-[35rem] m-11 justify-center ">
              <span className="text-[35px] font-medium">Hi, I am Sarobar</span>
              <span className="text-[25px]">
                A Full-Stack Developer & Design Enthusiast
              </span>
              <span className=" mt-7 px-4 py-2 shadow-2xl bg-grey rounded-lg text-[20px] cursor-pointer w-[10rem] transition duration-400 hover:bg-primary hover:text-white">
                Download CV
              </span>
            </div>
            <div className="ml-11">
              <img src="./profile.svg" alt="profile" className="w-[950px] " />
            </div>
          </div>
          <div className="flex flex-col items-center h-[15rem] w-[100%] ">
            <span className="mt-28 text-4xl ">Projects Portfolio</span>
            <span className=" mt-14 text-xl">
              Search projects by title or filter by category
            </span>
          </div>
          <div className="flex justify-between">
            <input
              type="text"
              placeholder="Search Projects"
              className="w-[160px] h-8 px-3 py-4 border border-grey rounded-md"
            />
            <select className="border border-grey rounded-md">
              <option>All Projects</option>
              <option>Web Application</option>
              <option>Mobile Application</option>
              <option>UI/UX Design</option>
              <option>Branding</option>
            </select>
          </div>
          <hr class=" border-grey my-4" />
          <div className="flex flex-col justify-between h-[53rem]">
            <div className="flex justify-between ">
              <Card1 />
              <Card2 />
              <Card3 />    
            </div>
            <div className="flex justify-between">
              <Card4 />
              <Card5 />
              <Card6 />
            </div>
          </div>
          <div className="flex justify-center">
            <button className="px-5 py-2 my-20 bg-primary shadow-2xl rounded-xl text-white text-[22px]">More Projects</button>
          </div>
          <hr class="border border-grey my-4" />
          <Footer />
        </div>
      </div>
    </>
  );
}
