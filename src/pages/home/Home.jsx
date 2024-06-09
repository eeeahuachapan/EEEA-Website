import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import { useNavigate, Link } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const navigateToAboutUs = () => {
    navigate(`/sobre-nosotros`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className=' h-screen min-h-screen flex flex-col items-center font-Montserrat'>
      <Navbar />

      <div className='h-1/5 w-full  -z-10 flex flex-col justify-center  lg:items-center lg:h-1/3'>

        <h1 className='text-white font-extrabold absolute z-10 text-1xl w-full px-4 text-center lg:text-5xl lg:px-32'>ESCUELA DE EDUCACIÓN ESPECIAL DE AHUACHAPÁN</h1>
        <img src='/src/assets/banner.webp' alt='logo' className='object-cover h-full w-full relative brightness-50' />
      </div>

      <div className='w-full h-auto flex flex-col items-center bg-shapes '>
        <div className='w-11/12 h-4/5 bg-primary rounded-md flex flex-col items-center p-5 my-5 lg:mt-12 gap-3 lg:w-10/12 lg:h-auto
    shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]'>
          <h1 className='text-secondary font-bold text-xl lg:text-3xl lg:font-extrabold'>Sobre nosotros</h1>
          <section className='w-full flex items-center justify-center gap-12'>
            <div className='w-full lg:w-1/2 flex flex-col items-center gap-3 lg:gap-5 p-4 '>
              <p className='text-sm lg:text-xl text-justify'>El 27 de mayo de 1991 nace la Escuela de Educación Especial de Ahuachapán, fundada por la Lic. Julissa Evelyn Rugamas, con el deseo de brindar atención a los niños con discapacidad intelectual de la ciudad de Ahuachapán; tomando en cuenta que no había ningún centro educativo que brinda atención especializada.
                <br />
                <br />El propósito de la escuela es preparar a los niños y niñas para la vida, desarrollando en ellos sus capacidades y fortalezas para que puedan desenvolverse de una manera funcional en el medio familiar, social y laboral.</p>
              <button onClick={navigateToAboutUs} className='bg-accent hover:bg-accent_hover active:bg-accent_active text-white rounded-md py-2 my-2 w-3/5 font-semibold lg:text-xl lg:font-bold 
    shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] active:shadow-[inset_-12px_-8px_40px_#46464620]'>Conocer más</button>
            </div>
            <img src="/src/assets/Picture1.webp" alt="" className='hidden lg:flex  w-2/5 h-4/5 object-cover rounded-md' />
          </section>

        </div>

        <h1 className='font-bold text-secondary text-xl lg:text-3xl lg:font-extrabold mt-10 lg:mt-12'>Secciones de interés </h1>

        <section className='lg:flex lg:my-5 lg:mb-12 p-5 lg:p-10 lg:overflow-hidden'>
          <Link to={'/oferta-academica'} className='w-full flex flex-col items-center hover:scale-110'>
            <img src='/src/assets/OfertaAcademica.webp' alt='section1' className='w-1/3 py-5  lg:py-4 ' />
            <h2 className='bg-primary rounded-md py-1 px-2 w-1/2 text-center font-semibold text-secondary'>Oferta académica</h2>
          </Link>

          <Link to={'/eventos'} className='w-full flex flex-col items-center hover:scale-110'>
            <img src='/src/assets/Calendario.webp' alt='section1' className='w-1/3 py-5 lg:py-4 ' />
            <h2 className='bg-primary rounded-md py-1 px-2 w-1/2 text-center font-semibold text-secondary'>Eventos</h2>
          </Link>

          <Link to={'/instalaciones'} className='w-full flex flex-col items-center hover:scale-110'>
            <img src='/src/assets/Instalaciones.webp' alt='section1' className='w-2/5 py-5 lg:py-0 ' />
            <h2 className='bg-primary rounded-md py-1 px-2 w-1/2 text-center font-semibold text-secondary'>Instalaciones</h2>
          </Link>
        </section>
      </div>

      <Footer />
    </div>

  )
}

export default Home