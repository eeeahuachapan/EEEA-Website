import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'

function Home() {
  return (
    <div className=' h-screen min-h-screen flex flex-col items-center'>
      <Navbar />
      
      <div className='h-1/5 w-full  -z-10 flex flex-col justify-center'>
        
      <h1 className='text-white font-extrabold absolute z-10 text-1xl text-center'>ESCUELA DE EDUCACION ESPECIAL DE AHUACHAPAN</h1>
      <img src='/src/assets/banner.jpg' alt='logo' className='object-cover h-full w-full relative brightness-50'/>
      </div>

    <div className='w-11/12 h-3/5 bg-primary rounded-md flex flex-col items-center p-5 my-5 gap-3 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]'>
      <h1 className='text-secondary font-semibold text-xl'>Sobre nosotros</h1>
      <p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    
    <button className='bg-accent text-white rounded-md py-2 w-3/5 font-semibold  '>Conocer mas</button>
    
    </div>


    <h1 className='font-bold text-secondary text-xl'>Secciones de interes </h1>

      <div className='w-full flex flex-col items-center'>
        <img src='/src/assets/OfertaAcademica.svg' alt='section1' className='w-2/5  '/>
        <h2 className='bg-primary rounded-md py-1 px-2 w-1/2 text-center font-semibold text-secondary'>Oferta estudiantil</h2>
      </div>

      <div className='w-full flex flex-col items-center'>
        <img src='/src/assets/Calendario.svg' alt='section1' className='w-1/3 py-5 '/>
        <h2 className='bg-primary rounded-md py-1 px-2 w-1/2 text-center font-semibold text-secondary'>Eventos</h2>  
      </div>
        
      <div className='w-full flex flex-col items-center'>
        <img src='/src/assets/Instalaciones.svg' alt='section1' className='w-2/5 py-5 '/>
        <h2 className='bg-primary rounded-md py-1 px-2 w-1/2 text-center font-semibold text-secondary'>Instalaciones</h2>     
       </div>
        

      <Footer />
    </div>
    
  )
}

export default Home