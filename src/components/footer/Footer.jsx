function Footer() {
    return (
        <div className='bg-secondary h-2/5 w-full font-Montserrat text-white flex flex-col lg:flex-row lg:px-24 gap-5 py-8 mt-5 bottom-0 '>
            <div className='h-1/2 w-full lg:w-1/2 lg:h-full flex justify-center items-center lg:px-5 lg:gap-0 gap-2'>
                <img src="/src/assets/logo.png" className='w-16 h-16 lg:w-24 lg:h-24' alt="logo" />
                <h1 className=' font-semibold text-center text-sm lg:text-base w-3/5 lg:w-2/5 lg:px-10'>Escuela de Educación Especial de Ahuachapan</h1>
            </div>

            <div className='lg:flex hidden w-1/2 justify-between pr-32'>
                <div className='flex flex-col items-start justify-center text-xs lg:gap-1 lg:text-sm '>
                    <p className='font-semibold text-left'>Acerca de</p>
                    <p className='text-left'>Nosotros</p>
                    <p>Instalaciones</p>
                </div>
                <div className='flex flex-col items-start  justify-center text-xs lg:gap-1 lg:text-sm'>
                    <p className='font-semibold'>Vida estudiantil</p>
                    <p>Calendario</p>
                    <p>Eventos</p>
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