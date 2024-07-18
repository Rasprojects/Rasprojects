"use client";

import Image from "next/image";
import Link from "next/link";
import img from "./hero-section.jpg"
import about from './about.png'
import features from './features.png'

import { Header } from "./components/header.component";
import { useState,useEffect } from "react";
import { MobileHeader } from "./components/mobile/mobile.component";
import { CiCircleInfo, CiMap } from "react-icons/ci";
import { TfiArrowCircleLeft, TfiArrowLeft, TfiArrowRight } from "react-icons/tfi";
import { Jost } from "next/font/google";



export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  const features = require('/src/app/features.png');
  // const back = {
  //   backgroundImage: 'url("/src/app/features.png")',
  //   backgroundSize: 'cover', // Ensures the image covers the entire div
  //   backgroundPosition: 'center', // Centers the image
  //   width: '100%', // Set the width of the div
  //   height: '100vh' // Set the height of the div
  // };

    useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.screen.width <= 768); // Adjust the width value as needed for your mobile breakpoint
    };

    // Set the initial value
    handleResize();

    // Add event listener for resize
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
    alert("is Mobile")
  }, []);

  return (
    <main className="min-h-screen">      
      {isMobile? <MobileHeader /> : <Header />}
      {/* Hero Section */}
      <div className="w-screen h-1/2 relative ">
      <div className="-z-10 absolute inset-0">
        <Image src={img} alt="Hero Image" layout="fill" objectFit="cover" loading="lazy" />
      </div>

      {/* Hero Contents */}
      <div className="relative flex items-center z-10 h-full pb-60">
        <div className="container px-4">
          <div className=" ml-10 md:ml-36 md:mt-52 md:mt-20  sm:ml-24 mt-20 justify-start">
            <p className="text-secondary font-bold md:text-lg sm:text-">CONNECTING FARMERS TO</p>
            <p className="text-primary font-extrabold text-2xl md:text-4xl sm:text-3xl">MARKET AND RESOURCES</p>
            <p className="text-secondary pt-2 md:text-2xl sm:text-sm">
            We aim to bridge the gap between farmers and the information <br /> they need to succeed in a competitive and ever-changing agricultural landscape.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 sm:grid-cols-1 gap-2 mt-4 container md:w-1/3">
              <button className=" outline outline-1 outline-primary rounded-full  text-secondary font-bold sm:max-w-screen-sm md:w-36  py-4">About Us</button>
              <button className=" outline outline-1 outline-primary bg-primary rounded-full  text-secondary font-bold sm:max-w-screen-sm md:w-36 py-4">Download App</button>
            </div>
          </div>          
        </div>
      </div>      
    </div>

    {/* AboutUs Section */}
    <div className="container w-full">
    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-7 relative   bg-white justify-items-center ">
      <div className="p-6">
        <Image src={about} alt="Hero Image" width={623} height={577}  objectFit="cover" loading="lazy" />
      </div>
      <div className="p-6">
        <h1 className=" text-primary font-bold text-4xl">About RAS</h1>
        <p className=" font-normal text-xl p-2 mt-2 justify-start">
        Reflex Agritech Solutions (RAS) is a Nigerian startup that provides real-time market information, connections to resources, agricultural knowledge, and a supportive community through Mobile and Web-based Applications. We aim to bridge the gap between farmers and the information they need to succeed in a competitive and ever-changing agricultural landscape. 
        </p>
        <button className=" outline outline-1 outline-primary bg-primary rounded-full  text-secondary font-bold sm:max-w-screen-sm md:w-36 px-4 py-2 justify-start">Join Us</button>
        <p className=" items-center  sm:mx-auto font-normal mt-4">
          Have any questions?<br/>
          Contact us!
        </p>
        <b className=" items-center justify-start sm:mx-auto font-normal font-bold text-xl text-black mt-4">
        <b>+234 (080) 38863790 </b>
        </b>
      </div>
    </div>
    </div>


    
    {/* Features Section */}
    <div className="container-fluid relative  w-full bg-primary mb-12" style={{height:"auto"}}>
      {/* <Image src={features}  className=" w-full" style={{height:716}} /> */}
      {/* <div className=" absolute inset-0 "> */}
      <div>
          <div className=" grid grid-cols-1 items-center justify-center px-4 py-8">
            <span className=" md:text-4xl sm:text-3xl roboto-bold text-secondary mx-auto px-2">Features of RAS App</span>      
            <p className=" text-center text-white  mx-auto md:w-1/2 sm:w-[0.2]">
                Your pocket farm advisor!  Get real-time market prices, connect with buyers & suppliers, access expert knowledge & build your farming community. Download & empower your success!
            </p>     
            {/* Starting of the Cards */}
            <div className="grid sm:grid-cols-1 md:grid-cols-4 gap-4 my-6">
              <div className="grid grid-col-1 container rounded-md shadow-md bg-secondary animate-fade-up animate-twice   hover:ease-out place-items-center px-5 ml-2" style={{ width:312,height:390}}>           
                      <div className="place-center">
                          <div className=" rounded-full bg-primary mt-4 place-content-center" style={{width:80,height:80}}>   
                            <CiMap className="w-12 h-12 mx-auto text-white"/>                       
                          </div>
                      </div>                     
                        <div className="grid grid-cols-1 text-center">
                            <span className="font-bold text-1xl">Weather Information</span>
                            <span className="text-gray-500 my-2">Plan your planting & harvest with real-time weather updates.</span>
                        </div>
                        <div className="outline outline-1  transition duration-150 ease-in-out outline-primary bg-primary px-6  hover:bg-green-900 text-white py-2 mt-2 mb-4 shadow-sm">
                            <Link href="#">
                              Learn More...
                            </Link>
                        </div>                
                </div>
                <div className="grid grid-col-1 container rounded-md shadow-md bg-secondary hover:ease-out place-items-center px-5 ml-2" style={{ width:312,height:390}}>           
                     <div className="place-center">
                        <div className=" rounded-full bg-primary mt-4 place-content-center" style={{width:80,height:80}}>   
                          <CiMap className="w-12 h-12 mx-auto text-white"/>                       
                        </div>
                     </div>                     
                      <div className="grid grid-cols-1 text-center">
                          <span className="font-bold text-1xl">Real Time Market Price</span>
                          <span className="text-gray-500 my-2">Get the best deals with instant market pricing for your crops.</span>
                      </div>
                      <div className="outline outline-1  transition duration-150 ease-in-out outline-primary bg-primary px-6  hover:bg-green-900 text-white py-2 mt-2 mb-4 shadow-sm">
                          <Link href="#">
                            Learn More...
                          </Link>
                      </div>                
              </div>
              <div className="grid grid-col-1 container rounded-md shadow-md bg-secondary hover:ease-out place-items-center px-5 ml-2" style={{ width:312,height:390}}>           
                     <div className="place-center">
                        <div className=" rounded-full bg-primary mt-4 place-content-center" style={{width:80,height:80}}>   
                          <CiMap className="w-12 h-12 mx-auto text-white"/>                       
                        </div>
                     </div>                     
                      <div className="grid grid-cols-1 text-center">
                          <span className="font-bold text-1xl">e-Market Linkage</span>
                          <span className="text-gray-500 my-2">Connect directly with buyers & find new markets for your harvest.</span>
                      </div>
                      <div className="outline outline-1  transition duration-150 ease-in-out outline-primary bg-primary px-6  hover:bg-green-900 text-white py-2 mt-2 mb-4 shadow-sm">
                          <Link href="#">
                            Learn More...
                          </Link>
                      </div>                
              </div>
              <div className="grid grid-col-1 container rounded-md shadow-md bg-secondary hover:ease-out place-items-center px-5 ml-2" style={{ width:312,height:390}}>           
                     <div className="place-center">
                        <div className=" rounded-full bg-primary mt-4 place-content-center" style={{width:80,height:80}}>   
                          <CiMap className="w-12 h-12 mx-auto text-white"/>                       
                        </div>
                     </div>                     
                      <div className="grid grid-cols-1 text-center">
                          <span className="font-bold text-1xl">Access to Loans</span>
                          <span className="text-gray-500 my-2">Access loan options to grow your farm with confidence.</span>
                      </div>
                      <div className="outline outline-1  transition duration-150 ease-in-out outline-primary bg-primary px-6  hover:bg-green-900 text-white py-2 mt-2 mb-4 shadow-sm">
                          <Link href="#">
                            Learn More...
                          </Link>
                      </div>                
              </div>    
              {/* End of Cards   */}
            </div>    
          </div>        
      </div>         
    </div>

 {/* Our Services */} 
    <div className=" container mx-auto place-content-center mb-12 md:px-12 sm:px-12">
            <div className="flex flex-row items-center justify-center"> 
              <h1 className=" text-primary font-bold text-2xl">Our Services</h1>
            </div>
            <div className="flex flex-row items-center justify-center mt-3"> 
              <p className=" text-black text-center">
                  All-in-one Ag tool!  Get market updates, connect to your network, & access knowledge. Grow smarter, farm stronger.
              </p>
            </div>
    </div>
    <div className=" grid grid-cols-1 md:grid-cols-3 sm:grid-cols-1 gap-y-12 gap-x-3 my-12 mx-12 place-items-center ">
        <div className="container  w-64 h-72 border shadow-md rounded-xl px-4 py-5 justify-items-center" style={{ backgroundColor:'#F4F0EC'}}>
              <div className=" flex flex-row justify-center mx-auto items-center">
                    <h1 className=" text-primary text-center text-1xl font-bold mb-4 mt-12">Consultation</h1>
              </div>
              <div className=" text-center text-black">
              Our on-demand Consultancy service connects you with expert agronomists for tailored advice.
              </div>
              <div className=" flex items-center gap-2 justify-center my-6">
                    <div className="items-center flex-col font-bold">
                        Read More 
                    </div> 
                    <div className=" items-center flex-col">
                      <TfiArrowRight className=" text-primary font-bold" />
                    </div>  
              </div>
          </div> 

           <div className="container  w-64 h-72 border shadow-md rounded-xl px-4 py-5 justify-items-center" style={{ backgroundColor:'#F4F0EC'}}>
              <div className=" flex flex-row justify-center mx-auto items-center">
                    <h1 className=" text-primary text-center text-1xl font-bold mb-4 mt-12">Access to Finance</h1>
              </div>
              <div className=" text-center text-black ">
              Access to Finance helps you secure loans and funding to grow your farm with confidence
              </div>
              <div className=" flex items-center gap-2 justify-center mt-6">
                    <div className="items-center flex-col font-bold ">   
                        Read More 
                    </div> 
                    <div className=" items-center flex-col">
                      <TfiArrowRight className=" text-primary font-bold" />
                    </div>  
              </div>  
          </div>

           <div className="container  w-64 h-72 border shadow-md rounded-xl px-4 py-5 justify-items-center" style={{ backgroundColor:'#F4F0EC'}}>
              <div className=" flex flex-row justify-center mx-auto items-center">
                    <h1 className=" text-primary text-center text-1xl font-bold mb-4 mt-12">Market Information</h1>
              </div>
              <div className=" text-center text-black ">
              Get real-time market data and insights with Market Information. Never miss an oppurtunity
              </div>
              <div className=" flex items-center gap-2 justify-center mt-6">
                    <div className="items-center flex-col font-bold ">
                        Read More 
                    </div> 
                    <div className=" items-center flex-col">
                      <TfiArrowRight className=" text-primary font-bold" />
                    </div>  
              </div>
          </div>

           <div className="container  w-64 h-72 border shadow-md rounded-xl px-4 py-5 justify-items-center" style={{ backgroundColor:'#F4F0EC'}}>
              <div className=" flex flex-row justify-center mx-auto items-center">
                    <h1 className=" text-primary text-center text-1xl font-bold mb-4 mt-12">e-Market Linkage</h1>
              </div>
              <div className=" text-center text-black ">
              e-Market Linkage connects you directly with buyers, ensuring you get the best deals for your crops.
              </div>
              <div className=" flex items-center gap-2 justify-center mt-6">
                    <div className="items-center flex-col font-bold ">
                        Read More 
                    </div> 
                    <div className=" items-center flex-col">
                      <TfiArrowRight className=" text-primary font-bold" />
                    </div>  
              </div>
          </div>

           <div className="container  w-64 h-72 border shadow-md rounded-xl px-4 py-5 justify-items-center" style={{ backgroundColor:'#F4F0EC'}}>
              <div className=" flex flex-row justify-center mx-auto items-center">
                    <h1 className=" text-primary text-center text-1xl font-bold mb-4 mt-12">Procurement</h1>
              </div>
              <div className=" text-center text-black ">
              Find and purchase all the supplies you need conveniently through our Procurement service
              </div>
              <div className=" flex items-center gap-2 justify-center mt-6">
                    <div className="items-center flex-col font-bold ">
                        Read More 
                    </div> 
                    <div className=" items-center flex-col">
                      <TfiArrowRight className=" text-primary font-bold" />
                    </div>  
              </div>
          </div>

           <div className="container  w-64 h-72 border shadow-md rounded-xl px-4 py-5 justify-items-center" style={{ backgroundColor:'#F4F0EC'}}>
              <div className=" flex flex-row justify-center mx-auto items-center">
                    <h1 className=" text-primary text-center text-1xl font-bold mb-4 mt-12">Agricultural Knowledge</h1>
              </div>
              <div className=" text-center text-black ">
              Access a wealth of articles, videos, and expert advice with our Knowledge library.
              </div>
              <div className=" flex items-center gap-2 justify-center mt-6">
                    <div className="items-center flex-col font-bold ">
                        Read More 
                    </div> 
                    <div className=" items-center flex-col">
                      <TfiArrowRight className=" text-primary font-bold" />
                    </div>  
              </div>
          </div>       
    </div>

    <footer className=" container-fluid bg-primary w-full h-auto text-white px-4 py-3 my-4">
          <div className="grid sm:grid-cols-1 md:grid-cols-5 md:gap-2 gap-2 justify-center my-5">
                <div className="container px-4 py-2">
                </div>
                <div className="container px-4 py-2">
                  <p>We aim to bridge the gap between farmers and the information they need to succeed in a competitive and ever-changing agricultural landscape.</p>
                </div>
                <div className="container px-4 py-2">
                  <div className="flex flex-row">
                      <span className=" font-bold text-white">Pages</span>
                  </div>
                  <div className="grid grid-cols-1">
                        <div className="flex flex-row my-2">Home</div>
                        <div className="flex flex-row my-2">About Us</div>
                        <div className="flex flex-row my-2">Services</div>
                        <div className="flex flex-row my-2">Features</div>
                        <div className="flex flex-row my-2">Our Team</div>
                  </div>
                </div>
                <div className="container px-4 py-2">
                  <div className="flex flex-row">
                      <span className=" font-bold text-white">Features</span>
                  </div>
                  <div className="grid grid-cols-1">
                        <div className="flex flex-row my-2">Weather Report</div>
                        <div className="flex flex-row my-2">Market Price</div>
                        <div className="flex flex-row my-2">e-Market Linkage</div>
                        <div className="flex flex-row my-2">Consultancy</div>
                        <div className="flex flex-row my-2">Access to Finance</div>
                  </div>                  
                </div>
                <div className="container px-4 py-2">
                  <div className="flex flex-row">
                      <span className=" font-bold text-white">Contact</span>
                  </div>
                  <div className="grid grid-cols-1">
                        <div className="flex flex-row my-2">3rd Floor Abdullahi Yero House Ali Akilu Kaduna.</div>
                        <div className="flex flex-row my-2">info@rasproject.ng</div>
                        <div className="flex flex-row my-2">+234 (080) 38863790</div>
                  </div>
                </div>
          </div>
    </footer>
    </main>
  );
}
