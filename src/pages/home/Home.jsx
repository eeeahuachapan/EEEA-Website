import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'

function Home() {
  return (
    <div className=' h-screen min-h-screen flex flex-col items-center'>
      <Navbar />
      
      <div className='h-1/5 w-full  -z-10 flex flex-col justify-center lg:items-center lg:h-1/3'>
        
      <h1 className='text-white font-extrabold absolute z-10 text-1xl text-center lg:text-5xl lg:px-32'>ESCUELA DE EDUCACION ESPECIAL DE AHUACHAPAN</h1>
      <img src='/src/assets/banner.jpg' alt='logo' className='object-cover h-full w-full relative brightness-50'/>
      </div>

    <div className='w-11/12 h-4/5 bg-primary rounded-md flex flex-col items-center p-5 my-5 lg:mt-12 gap-3 lg:w-10/12 lg:h-3/5
    shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]'>
      <h1 className='text-secondary font-semibold text-xl lg:text-3xl lg:font-extrabold'>Sobre nosotros</h1>
      <section className='w-full flex items-center justify-center gap-8'>
      <div className='w-full lg:w-1/2 flex flex-col items-center gap-3 lg:gap-5'>
      <p className='text-sm lg:text-xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 

      <br/> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    
    <button className='bg-accent hover:bg-accent_hover active:bg-accent_active text-white rounded-md py-2 w-3/5 font-semibold lg:text-xl lg:font-bold 
    shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] active:shadow-[inset_-12px_-8px_40px_#46464620]'>Conocer mas</button>
      
      
    <img src="/src/assets/Imagen1.jpg" alt=""  className='lg:hidden  object-cover w-2/3 h-1/2 rounded-md'/>
      </div>

      <img src="/src/assets/Imagen1.jpg" alt=""  className='hidden lg:flex  w-2/5 h-4/5 object-cover rounded-md'/>
      </section>
      
      
    </div>


    <h1 className='font-bold text-secondary text-xl lg:text-3xl lg:font-extrabold lg:mt-12'>Secciones de interes </h1>

    <section className='lg:flex lg:my-5 lg:mb-12'>
    <div className='w-full flex flex-col items-center'>
        <img src='/src/assets/OfertaAcademica.svg' alt='section1' className='w-1/3 py-5  lg:py-4 '/>
        <h2 className='bg-primary rounded-md py-1 px-2 w-1/2 text-center font-semibold text-secondary'>Oferta estudiantil</h2>
      </div>

      <div className='w-full flex flex-col items-center'>
        <img src='/src/assets/Calendario.svg' alt='section1' className='w-1/3 py-5 lg:py-4 '/>
        <h2 className='bg-primary rounded-md py-1 px-2 w-1/2 text-center font-semibold text-secondary'>Eventos</h2>  
      </div>
        
      <div className='w-full flex flex-col items-center'>
        <img src='/src/assets/Instalaciones.svg' alt='section1' className='w-2/5 py-5 lg:py-0 '/>
        <h2 className='bg-primary rounded-md py-1 px-2 w-1/2 text-center font-semibold text-secondary'>Instalaciones</h2>     
       </div>
    </section>
      
        

      <Footer />
    </div>
    
  )
}

export default Home