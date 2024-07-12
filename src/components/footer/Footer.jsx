import { Link } from "react-router-dom"

function Footer() {
    return (
        <div className='bg-secondary h-2/5 w-full font-Montserrat text-white flex flex-col lg:flex-row lg:px-24 gap-5 py-8 mt-5 bottom-0 '>
            <div className='h-1/2 w-full lg:w-1/2 lg:h-full flex justify-center lg:justify-stretch items-center lg:px-5 lg:gap-2 gap-2'>
                <Link to={'/'}><img src="/assets/logo.webp" className='w-16 h-16 lg:w-24 lg:h-24' alt="logo" /></ Link>
                <h1 className=' font-semibold text-center text-sm lg:text-base w-3/5 lg:w-2/5 lg:px-10'>Escuela de Educación Especial de Ahuachapán</h1>
            </div>

            <div className='lg:flex hidden w-1/2 justify-between gap-6'>
                <div className='flex flex-col items-start justify-center text-xs lg:gap-1 lg:text-sm '>
                    <p className='font-semibold text-left'>Acerca de</p>
                    <Link to={'/sobre-nosotros'}><p className='text-left underline'>Nosotros</p></Link>
                    <Link to={'/instalaciones'}><p className="text-left underline">Instalaciones</p></Link>
                </div>
                <div className='flex flex-col items-start  justify-center text-xs lg:gap-1 lg:text-sm'>
                    <p className='font-semibold'>Vida estudiantil</p>
                    <Link to={'/calendario-academico'}><p className="text-left underline">Calendario</p></Link>
                    <Link to={'/eventos'}><p className="text-left underline">Eventos</p></Link>
                </div>
                <div className='flex flex-col items-start justify-center text-xs h-1/2 lg:h-full lg:gap-1 lg:text-sm '>
                    <p className='font-semibold'>Contáctenos</p>
                    <p>(503) 7887-4853</p>
                    <p>roxana.carmen.chiguila@clases.edu.sv</p>
                </div>
            </div>
            <div className='flex flex-col items-center justify-center text-xs h-1/2 lg:hidden '>
                <p className='font-semibold'>Contáctenos</p>
                <p>(503) 7887-4853</p>
                <p>roxana.carmen.chiguila@clases.edu.sv</p>
            </div>
        </div>
    )
}

export default Footer 