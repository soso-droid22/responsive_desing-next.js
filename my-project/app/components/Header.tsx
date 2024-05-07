import React from 'react';

const Header = () => {
  return (
    <header className="h-screen ">
      {/* Navigation Bar */}
      <nav className="relative top-0 left-0 right-0 z-50 bg-opacity-0 p-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="relative left-[40px] text-3xl font-bold">Travlog</h1>
          </div>
          <div className='relative right-[214px]'>
            <img src="./vector.svg" alt="logo"/>
          </div>
          <div>
            <img src="./hamburger.svg" alt="hamburger" />
          </div>
        </div>
      </nav>

      {/* Main Section */}
      <section className="fixed flex items-center justify-center  w-full h-full">
        <div className="flex ml-7 items-center justify-center bg-red-100">
          {/* Render multiple colored divs */}
          {[...Array(10)].map((_, index) => (
            <React.Fragment key={index}>
              <div className="h-[1500px] w-[80px] bg-red-200 bg-opacity-55"></div>
              <div className="w-7"></div>
            </React.Fragment>
          ))}
        </div>
      </section>
    </header>
  );
};

export default Header;
