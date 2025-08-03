import { useState,useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from'./home';
import Browse from './browse'; 
import './App.css'





export const serviceImages = [
  "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop", // Plumbing
  "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400&h=300&fit=crop", // Electrical Repair
  "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=300&fit=crop", // AC Maintenance
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=300&fit=crop", // Painting (Quick Home Painting)
  "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=300&fit=crop", // Carpentry
  "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=300&fit=crop", // Cleaning Services
  "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=400&h=300&fit=crop", // Satellite Installation
  "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400&h=300&fit=crop", // Handyman
  "https://images.unsplash.com/photo-1464983953574-0892a716854b?w=400&h=300&fit=crop", // Tile Work (Pro Tiling Services)
  "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400&h=300&fit=crop"  // Generator Repair
];




function App() {
 
  // a state to handle fetched data 
  const[Alldata,setAlldata]=useState([]);
//fetch data from backened and stire the resukt to all data state
useEffect(() => {
    fetch('https://madad-services-api.onrender.com/api/services')
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      console.log('Data fetched successfully:', data);
      setAlldata(data);
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    });
}, []);

//merge images to each service data

 const mergedData = Alldata.map((item, index) => ({
  ...item,
  imageUrl: serviceImages[index] || ''
}));

  return (
    // specifiny app container
    <div className="relative flex size-full min-h-screen flex-col bg-[#f8f9fc] group/design-root overflow-x-hidden" style={{fontFamily: '"Work Sans", "Noto Sans", sans-serif'}}>
      <div className="layout-container flex h-full grow flex-col"> 
        
        <Header mergedData={mergedData}/> 
        
       <Footer/>
        
      </div>
    </div>
  )
}

export default App

// header component that haslogo and navidation for home and browsing page 

function Header({mergedData}) {
  return ( 
    <Router>
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#e6e9f4] px-4 sm:px-6 md:px-8 lg:px-10 py-3">
      {/* Logo and Navigation */}
      <div className="flex items-center gap-4 md:gap-8">
        <div className="flex items-center gap-2 md:gap-4 text-[#0d0f1c]">
          <div className="size-4">
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M44 11.2727C44 14.0109 39.8386 16.3957 33.69 17.6364C39.8386 18.877 44 21.2618 44 24C44 26.7382 39.8386 29.123 33.69 30.3636C39.8386 31.6043 44 33.9891 44 36.7273C44 40.7439 35.0457 44 24 44C12.9543 44 4 40.7439 4 36.7273C4 33.9891 8.16144 31.6043 14.31 30.3636C8.16144 29.123 4 26.7382 4 24C4 21.2618 8.16144 18.877 14.31 17.6364C8.16144 16.3957 4 14.0109 4 11.2727C4 7.25611 12.9543 4 24 4C35.0457 4 44 7.25611 44 11.2727Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
          <Link to ='/'>
          <h2 className="text-[#0d0f1c] text-base md:text-lg font-bold leading-tight tracking-[-0.015em]">Madad</h2>

          </Link>
        </div>
        {/* Desktop Navigation */}
        <div className="flex items-center gap-4 sm:gap-6 md:gap-9">

          <Link to ='/'  style={{ color: '#0d0f1c' }} className="text-[#0d0f1c] text-sm font-medium leading-normal">Home</Link>
          <Link  to ='browse' style={{ color: '#0d0f1c' }}  className="text-[#0d0f1c] text-sm font-medium leading-normal" >Find Talent</Link>
        </div>
      </div>
      
      {/* Right side - empty for now */}
      <div className="flex flex-1 justify-end gap-4 md:gap-6 lg:gap-8">
        {/* Empty space for future elements */}
      </div>
    </header>
{/* 
// routers to link pages home and browse */}
    <Routes>
      <Route path='/'element={<Home/>}/>
      <Route path='/browse'element={<Browse mergedData={mergedData}/>}/>
          </Routes>
    </Router>
  )
}
//footer section about general information 

function Footer(){

  return(
    <footer className="flex justify-center">
    <div className="flex max-w-[960px] flex-1 flex-col">
      <footer className="flex flex-col gap-6 px-5 py-10 text-center @container">
        {/* <!-- ===== START: FOOTER LINKS ===== --> */}
        <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 sm:gap-6 @[480px]:flex-row @[480px]:justify-around">
          <a className="text-[#47569e] text-sm sm:text-base font-normal leading-normal min-w-40" href="#">About</a>
          <a className="text-[#47569e] text-sm sm:text-base font-normal leading-normal min-w-40" href="#">Contact</a>
          <a className="text-[#47569e] text-sm sm:text-base font-normal leading-normal min-w-40" href="#">Terms of Service</a>
          <a className="text-[#47569e] text-sm sm:text-base font-normal leading-normal min-w-40" href="#">Privacy Policy</a>
        </div>
        {/* <!-- ===== END: FOOTER LINKS ===== -->
        
        <!-- ===== START: SOCIAL MEDIA LINKS ===== --> */}
        <div className="flex flex-wrap justify-center gap-4">
          <a href="#">
            <div clasNames="text-[#47569e]" data-icon="TwitterLogo" data-size="24px" data-weight="regular">
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                <path
                  d="M247.39,68.94A8,8,0,0,0,240,64H209.57A48.66,48.66,0,0,0,168.1,40a46.91,46.91,0,0,0-33.75,13.7A47.9,47.9,0,0,0,120,88v6.09C79.74,83.47,46.81,50.72,46.46,50.37a8,8,0,0,0-13.65,4.92c-4.31,47.79,9.57,79.77,22,98.18a110.93,110.93,0,0,0,21.88,24.2c-15.23,17.53-39.21,26.74-39.47,26.84a8,8,0,0,0-3.85,11.93c.75,1.12,3.75,5.05,11.08,8.72C53.51,229.7,65.48,232,80,232c70.67,0,129.72-54.42,135.75-124.44l29.91-29.9A8,8,0,0,0,247.39,68.94Zm-45,29.41a8,8,0,0,0-2.32,5.14C196,166.58,143.28,216,80,216c-10.56,0-18-1.4-23.22-3.08,11.51-6.25,27.56-17,37.88-32.48A8,8,0,0,0,92,169.08c-.47-.27-43.91-26.34-44-96,16,13,45.25,33.17,78.67,38.79A8,8,0,0,0,136,104V88a32,32,0,0,1,9.6-22.92A30.94,30.94,0,0,1,167.9,56c12.66.16,24.49,7.88,29.44,19.21A8,8,0,0,0,204.67,80h16Z"
                ></path>
              </svg>
            </div>
          </a>
          <a href="#">
            <div className="text-[#47569e]" data-icon="FacebookLogo" data-size="24px" data-weight="regular">
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                <path
                  d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm8,191.63V152h24a8,8,0,0,0,0-16H136V112a16,16,0,0,1,16-16h16a8,8,0,0,0,0-16H152a32,32,0,0,0-32,32v24H96a8,8,0,0,0,0,16h24v63.63a88,88,0,1,1,16,0Z"
                ></path>
              </svg>
            </div>
          </a>
          <a href="#">
            <div className="text-[#47569e]" data-icon="LinkedinLogo" data-size="24px" data-weight="regular">
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                <path
                  d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z"
                ></path>
              </svg>
            </div>
          </a>
        </div>
        {/* <!-- ===== END: SOCIAL MEDIA LINKS ===== -->
        
        <!-- ===== START: COPYRIGHT TEXT ===== --> */}
        <p className="text-[#47569e] text-sm sm:text-base font-normal leading-normal">@2024 Madad. All rights reserved.</p>
        {/* <!-- ===== END: COPYRIGHT TEXT ===== --> */}
      </footer>
    </div>
  </footer>
  );
}