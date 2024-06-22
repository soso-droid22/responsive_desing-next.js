import React from 'react';

const Footer = () => {
  return (
    <footer className=' max-w-md mx-auto  min-h-[35rem] lg:mx-auto lg:max-w-5xl 2xl:flex 2xl:flex-col
      2xl:relative 2xl:left-[-12rem] xl:relative xl:left-[-7rem] ' >
      
        <div className='relative bottom-[75px] lg:bottom-0'>
          <div className='relative lg:bottom-8'>
            <span className="relative top-[40px] left-[60px] text-3xl font-bold ">Travlog</span>
          </div>
          <div className='relative lg:bottom-8'>
            <img className='relative left-[14px]' src="./vector.svg" alt="logo"/>
          </div>
        </div>
        
        
        <div className='relative'>
          <span className='relative lg:hidden left-[13px] bottom-[2rem] text-sm opacity-55'>Contrary to popular belief, Lorem Ipsum is not simply <br/> random text.
            It has roots in a piece of classical Latin <br/>
            literature from 45 BC. 
          </span>
          <span className='relative hidden lg:block left-[13px] lg:bottom-4 flex-colum text-2xl opacity-55'>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a <br/> piece of classical Latin literature from 45 BC. 
          </span>
        </div>

        <div className='relative'>
          <span>
            <img className='relative left-[13px]' src="./Frame 72.svg" alt="icon" />
          </span>
        </div>

        <div className='relative  text-xl font-bold'>
          <span className='relative top-10'>
          <span className='relative left-[13px] bottom-5'>Company</span> <br/>
          <span className='relative lg:left-[15rem] lg:bottom-[3rem] left-[13px]'>Contact Us</span> <br/>
          <span className='relative lg:bottom-[6rem]' >
          <span className='relative lg:left-[30rem] lg:bottom-[0rem] left-[13px] top-5'>Meet Us</span>
          </span>
          </span> 
          
          
          <button className='relative lg:hidden top-[14px] left-[316px]
           bg-[#fff] w-[21px] h-[21px]   border-[#000] 
           rounded-full border-[1px] 
           hover:bg-[#61ff69] active:bg-[#e3f160] hover:border-[#61ff69] active:border-[#e3f160]' ><img  
          className='relative left-1 ' src="./Vector (1).svg" alt="icon" />
          </button>

          <button className='relative lg:hidden bottom-[25px] left-[295px]
           bg-[#fff] w-[21px] h-[21px]   border-[#000] 
           rounded-full border-[1px] 
           hover:bg-[#61ff69] active:bg-[#e3f160] hover:border-[#61ff69] active:border-[#e3f160]' ><img  
          className='relative left-1 ' src="./Vector (1).svg" alt="icon" />
          </button>

          <button className='relative lg:hidden top-[60px] left-[275px]
           bg-[#fff] w-[21px] h-[21px]   border-[#000] 
           rounded-full border-[1px] 
           hover:bg-[#61ff69] active:bg-[#e3f160] hover:border-[#61ff69] active:border-[#e3f160]' ><img  
          className='relative left-1 ' src="./Vector (1).svg" alt="icon" />
          </button>
        
        </div>


        <div>
        <span className='absolute hidden lg:block left-[59rem] bottom-[45rem] xl:left-[92rem] xl:top-[0rem] ' >
          <img src="./OBJECTS (3).svg" alt="icon" /></span>
        </div> 
        
        <span className='relative hidden lg:h-[0rem] lg:block lg:left-[1rem]' >
         <div className='relative text-xl flex flex-col space-y-4 lg:space-y-0' >
           <span>About</span><br/><span>Career</span><br/><span>mobile</span>
         </div>

         <div className='relative left-[14rem] bottom-[9rem] text-xl flex flex-col space-y-4 lg:space-y-0' >
           <span>Why Travlog?</span><br/><span>Partner with us</span><br/><span>FAQ's</span><br/><span>Blog</span>
         </div>

         <div className='relative left-[29rem] bottom-[21rem] text-xl flex flex-col space-y-4 lg:space-y-0' >
           <span>+00 92 1234 56789</span><br/><span>info@travlog.com</span><br/><span>205. R Street, New York</span><br/><span>BD23200</span>
         </div>
        
        
        
        
        
        
        </span>

        
        
      
    </footer>
  );
}

export default Footer;
