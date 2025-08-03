
import Browse from './browse'; 

import React from 'react';

// import link rom react router to enable single page routing
import { Link } from 'react-router-dom';


function Home(){
return(
    <div>
        <Hero/>
    </div>
);
}
export default Home;

// hero section that has a bckgroung and a button link to browse page
function Hero() {
  return (
    <div className="@container">
      <div className="@[480px]:p-0 flex justify-center">
        <div
          className="w-full max-w-screen-sm sm:max-w-screen-md md:max-w-[1200px] 
          flex min-h-[300px] sm:min-h-[400px] md:min-h-[480px] 
          flex-col gap-4 sm:gap-6 bg-cover bg-center bg-no-repeat 
          @[480px]:gap-8 @[480px]:rounded-xl items-center justify-center 
          p-4 sm:p-6 md:p-8"
          style={{
            backgroundImage:
              'linear-gradient(rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.9) 100%),url("https://thumbs.dreamstime.com/b/serious-skilled-african-handyman-blue-overalls-uniform-going-to-repair-dishwasher-young-professional-african-american-230508507.jpg")',
          }}
        >
          <div className="flex flex-col gap-2 text-left relative">
            <h3
              style={{ color: 'white', letterSpacing: '3px', fontFamily: 'Roboto', textAlign: 'left' }}
              className="text-white text-[24px] sm:text-[24px] md:text-[56px] lg:text-[56px] tracking-[-0.033em] 
                         px-2 md:w-[700px]"
            >
              Connecting clients in need for handyman and other services to deliver
            </h3>

            <Link
              to="/browse"
              className="inline-flex items-center justify-center gap-x-2 
                         rounded-xl bg-[#e6e9f4] px-4 py-2 
                         mt-6 w-fit cursor-pointer hover:bg-[#d8dbe9] transition duration-300"
            >
              <p className="text-[#0d0f1c] text-xs sm:text-sm font-medium leading-normal">
                Find services now
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}


