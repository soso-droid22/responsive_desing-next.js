import React from 'react';

const Header = () => {
  return (
    <header className="container max-w-md lg:mx-auto h-[55rem] lg:h-[65rem] mx-auto lg:max-w-5xl 2xl:mx-auto 2xl:max-w-xl
    md:relative md:h-[55rem] sm:h-[55rem] ">
      {/* Navigation Bar */}
      <nav className="relative top-0 left-0 right-0 z-50 bg-opacity-0 p-4">
        <div className="flex items-center justify-between">
          <div className='relative ' >
            <h1 className="relative 2xl:hidden xl:hidden left-[50px] text-3xl font-bold  lg:left-[28rem]">Travlog</h1>
            <h1 className="relative hidden xl:block 2xl:block 2xl:right-[25rem] text-3xl font-extrabold  ">Travlog</h1>
          </div>
          <div className='relative hidden 2xl:block ' >
          <div className='flex flex-row space-x-4 font-bold items-center justify-center text-center ' >
              <ul>
                <li className='relative text-xl' >Home</li>
              </ul>
              <ul>
                <li className='relative text-xl' >Discover</li>
              </ul>
              <ul>
                <li className='relative text-xl' >Special&nbsp;Deals</li>
              </ul>
              <ul>
                <li className='relative text-xl' >Contact</li>
              </ul>
            </div>
          </div>

          
          <div className='hidden  xl:block 2xl:hidden  ' >
            <div className=' relative xl:flex  flex-row space-x-4 font-bold items-center
           justify-center text-center left-[-18rem]' >
              <ul>
                <li className='relative text-xl' >Home</li>
              </ul>
              <ul>
                <li className='relative text-xl' >Discover</li>
              </ul>
              <ul>
                <li className='relative text-xl' >Special&nbsp;Deals</li>
              </ul>
              <ul>
                <li className='relative text-xl' >Contact</li>
              </ul>

           </div>
          </div>
          


          <div className='relative xl:hidden 2xl:hidden right-[214px] lg:right-[7rem]'>
            <img src="./Vector (2).svg" alt="logo"/>
          </div>

          <div className='absolute hidden 2xl:block xl:block flex-col left-[-27rem] 2xl:left-[-27rem] xl:left-[-2rem]  '>
            <img src="./Vector (2).svg" alt="logo"/>
          </div>




          <div className=' xl:hidden 2xl:hidden relative lg:right-[57rem]' >
            <img src="./hamburger.svg" alt="hamburger" />
          </div>
          
        </div>
        <div className='hidden sm:hidden md:hidden 2xl:block 2xl:left-[0rem] lg:block  xl:relative xl:left-[8rem]  '>
         <div className='relative left-[45rem] flex flex-row bottom-[2.8rem] gap-10 '>
           <button className='relative border-[1rem] bg-[#ffff] 
           border-[#ffff] rounded-[1.5rem] w-[7rem] 2xl:w-[115px] 2xl:h-[49px]
           hover:bg-[#61ff69] active:bg-[#e3f160] hover:border-[#61ff69] active:border-[#e3f160] focus:ring  focus:outline-none focus:ring-[#f5f253]' 
           >Log In</button>
           
           <button className='relative border-[1rem] bg-[#5D50C6] border-[#5D50C6]
            text-[#ffff] rounded-[1.5rem] w-[7rem] 2xl:w-[115px] 2xl:h-[49px]
              hover:bg-[#61ff69] active:bg-[#e3f160] hover:border-[#61ff69] active:border-[#e3f160] focus:ring  focus:outline-none focus:ring-[#f5f253]'
            >Sing Up</button>
         </div>
        </div> 
      </nav>

      {/* Main Section */}
      <section className="fixed flex items-center justify-center md:w-[30rem] bottom-[7rem]
      lg:bottom-[100rem] lg:left-[18rem] w-full lg:h-0 h-full 
      2xl:left-[35rem] ">
        <div className="flex 2xl:w-[105rem] ml-7 items-center justify-center bg-red-100">
          {/* Render multiple colored divs */}
          {[...Array(30)].map((_, index) => (
            <React.Fragment key={index}>
              <div className=" lg:h-[5000px] h-[2000px] 2xl:w-[300rem] w-[80px] bg-red-200 bg-opacity-55  "></div>
              <div className="w-7 2xl:w-[400rem]"></div>
            </React.Fragment>
          ))}
        </div>
      </section>
    </header>
  );
};

export default Header;
