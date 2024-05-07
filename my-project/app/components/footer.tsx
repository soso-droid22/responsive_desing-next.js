import React from 'react';

const Footer = () => {
  return (
    <footer>
      <section>
        <div className='relative bottom-[75px]'>
          <div className='relative'>
            <span className="relative top-[40px] left-[60px] text-3xl font-bold">Travlog</span>
          </div>
          <div className='relative'>
            <img className='relative left-[14px]' src="./vector.svg" alt="logo"/>
          </div>
        </div>
        
        <div className="min-h-[300px]" />
        
        <div className='relative bottom-[340px]'>
          <span className='relative left-[13px] text-sm opacity-55'>Contrary to popular belief, Lorem Ipsum is not simply <br/> random text.
            It has roots in a piece of classical Latin <br/>
            literature from 45 BC. 
          </span>
        </div>

        <div className='relative bottom-[315px]'>
          <span>
            <img className='relative left-[13px]' src="./Frame 72.svg" alt="icon" />
          </span>
        </div>

        <div className='relative bottom-[270px] text-xl font-bold'>
          <span className='relative left-[13px] bottom-5'>Company</span> <br/>
          <span className='relative left-[13px]'>Contact Us</span> <br/>
          <span className='relative left-[13px] top-5'>Meet Us</span>
          
          
          <button className='relative bottom-[75px] left-[310px]
           bg-[#fff] w-[21px] h-[21px]   border-[#000] 
           rounded-full border-[1px] ' ><img  
          className='relative left-1 ' src="./Vector (1).svg" alt="icon" />
          </button>

          <button className='relative bottom-[25px] left-[290px]
           bg-[#fff] w-[21px] h-[21px]   border-[#000] 
           rounded-full border-[1px] ' ><img  
          className='relative left-1 ' src="./Vector (1).svg" alt="icon" />
          </button>

          <button className='relative top-[20px] left-[270px]
           bg-[#fff] w-[21px] h-[21px]   border-[#000] 
           rounded-full border-[1px] ' ><img  
          className='relative left-1 ' src="./Vector (1).svg" alt="icon" />
          </button>
        
        </div>

      </section>
    </footer>
  );
}

export default Footer;
