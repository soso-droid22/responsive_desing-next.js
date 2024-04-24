import React from 'react'

const main = () => {
  return (
    <main>
      <div className='image_container relative bottom-[180px]'>
       <div>
         <div className='relative items-center justify-center bottom-[598px]'><img  className='relative left-[15px]' 
           src="/layer22.svg" alt="photo" width={'400'} height={'147'} /></div>
         </div>
         
         <div className='relative' >
           <img  className='relative bottom-[700px] items-center justify-center left-[77px]' src="/Frame_15.svg" alt="photo" width={'295'} height={'324'}/>
         </div>
             
         <div className='relative' >
           <img  className='relative bottom-[890px] items-center justify-center left-[40px]' src="/Frame 16.svg" alt="photo" width={'70'} height={'70'}/>
         </div>
         </div>
      <div className='text relative flex'>
       <div className='relative text-[10px] font-bold left-[330px] bottom-[1110px]'>
         <p className='relative flex items-center right-3 top-5 shadow-xl border-[10px] border-l-[20px] rtl rounded-full w-[90px] border-red-200 bg-red-200 opacity-95'>
           {/* Content inside the button */}
           <span className="rleative px-2 right-1 ">Top&nbsp;Places</span>
         </p>
         <span>
          <img className='relative bg-white rounded-full right-[2px] bottom-[4px]' src="location 1.svg" alt="logo" width={12} height={12} />
          </span>
        </div>
        <div className='relative'>
          <img className='relative bottom-[1010px] left-[150px]' src="/Frame_17.svg" alt="logo" />
        </div>
       <div className='relative'>
         <p className='relative bg-white rtl border-r-[30px] bg-opacity-20 rounded-md border-[20px] border-transparent  
         right-[35px] text-[#F85E9F] text-md font-bold text-center justify-center bottom-[900px]'
         
         >
           Explore&nbsp;the&nbsp;world! 
         </p>
         <img className='relative left-[130px] bottom-[945px]' src="/work 1.svg" alt="logo" />
         <div className='relative bottom-[900px]'>
          <p>Travel top</p>
          <br />
          <p>of the world</p>
         </div>
         
       </div>
       
        </div>

       
         
       
    </main>
  )
}

export default main