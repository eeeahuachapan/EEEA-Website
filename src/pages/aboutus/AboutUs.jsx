import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'

function AboutUs() {
  return (
    <div className=' h-screen min-h-screen flex flex-col items-center '>
      <Navbar />
      

      <div className='h-1/5 w-full  -z-10 flex flex-col justify-center items-center lg:h-1/3'>
        
      <h1 className='text-white font-extrabold absolute z-10 text-2xl text-center lg:text-5xl lg:px-32'>SOBRE NOSOTROS</h1>
      <img src='/src/assets/banner.jpg' alt='logo' className='object-cover h-full w-full relative brightness-50'/>
      </div>

    <p className='px-5 text-sm lg:w-10/12 lg:text-base mt-5 lg:mt-12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam maiores officia, soluta quae doloremque repudiandae reprehenderit quisquam reiciendis! Officiis voluptatem itaque incidunt maxime delectus cupiditate ullam eaque deleniti corporis voluptatibus?
    <br/> <br/> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita nobis in quas necessitatibus, qui natus, inventore magni debitis eius doloribus repellat nihil laboriosam architecto dolor quia dignissimos ratione itaque quidem. </p>
        
    <section className='w-11/12 h-1/2 flex flex-col gap-1 my-5 lg:flex-row lg:h-4/5 lg:w-10/12 lg:px-8  '>
        <div className='w-full h-1/2 bg-secondary p-5 gap-2 rounded-t-lg text-white flex flex-col justify-center items-center
        lg:h-full lg:p-12 lg:gap-8 lg:rounded-t-none lg:rounded-l-lg
        shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]'>
            <h1 className='font-bold text-xl'>Mision</h1>
            <p className='text-sm lg:text-base'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum quo, nemo officia molestiae libero, praesentium animi voluptate dolore fuga numquam quibusdam quos cumque voluptates amet similique maxime quod explicabo quas?</p>
        </div>
        <div className='w-full h-1/2 bg-primary p-5 gap-2 rounded-b-lg text-secondary flex flex-col justify-center items-center
        lg:h-full lg:p-12 lg:gap-8 lg:rounded-b-none lg:rounded-r-lg
        shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]'>
            <h1 className='font-bold text-xl'>Vision</h1>
            <p className='text-sm lg:text-base'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum quo, nemo officia molestiae libero, praesentium animi voluptate dolore fuga numquam quibusdam quos cumque voluptates amet similique maxime quod explicabo quas?</p>
        </div>
    </section>

    
    <h1 className='text-secondary font-bold text-2xl'>Nuestra ideologia</h1>
    <section className='w-full h-3/5  flex flex-col items-center my-5 gap-5 lg:flex-row lg:h-1/3 lg:w-10/12 lg:gap-8'>
    <p className='px-5 text-sm lg:text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam maiores officia, soluta quae doloremque repudiandae reprehenderit quisquam reiciendis! Officiis voluptatem itaque incidunt maxime delectus cupiditate ullam eaque deleniti corporis voluptatibus?
    <br/> <br/> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita nobis in quas necessitatibus, qui natus, inventore magni debitis eius doloribus repellat nihil laboriosam architecto dolor quia dignissimos ratione itaque quidem. </p>
    
    <img src="/src/assets/Imagen2.webp" alt="" className='w-11/12 h-1/3 object-cover rounded-lg lg:h-full lg:w-1/3'/>
    </section>
    

      <Footer />
    </div>
    
  )
}

export default AboutUs