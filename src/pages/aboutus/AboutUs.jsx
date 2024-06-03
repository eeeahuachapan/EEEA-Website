import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'

function AboutUs() {
  return (
    <div className=' h-screen min-h-screen flex flex-col items-center font-Montserrat'>
      <Navbar />

      <div className='h-1/5 w-full flex flex-col justify-center items-center lg:h-1/3'>
        <h1 className='text-white font-extrabold absolute z-10 text-2xl text-center lg:text-5xl lg:px-32'>SOBRE NOSOTROS</h1>
        <img src='/src/assets/banner.webp' alt='logo' className='object-cover h-full w-full relative brightness-50' />
      </div>

      <p className='px-5 text-sm lg:w-10/12 lg:text-base mt-5 lg:mt-12 text-justify'>El referente de evaluación que se tiene en este centro educativo es la aplicación de las pruebas psicológicas que son parte del protocolo de atención a los estudiantes, aplicadas por psicólogos y evaluaciones pedagógicas realizadas por los docentes, estas muestran resultados que indican el nivel de discapacidad intelectual, con los cuales es necesaria la implementación de estrategias metodológicas con adecuaciones curriculares según la limitante de cada estudiante. A partir de los resultados obtenidos, las docentes elaboran un expediente por estudiante, y con esta base se elabora y planifica la atención educativa y curricular para cada estudiante en particular.
        <br /> <br /> Actualmente se cuenta con un equipo de 6 docentes en educación especial al servicio de los 66 estudiantes pertenecientes a la institución. Existe un genuino compromiso con el trabajo de parte de todos los miembros del equipo. Dentro de las estrategias metodológicas que el equipo de docentes utiliza se encuentran ludotecas, material concreto, dinámicas grupales, exposiciones, experimentos, entre otros. </p>

      <section className='w-11/12 h-auto flex flex-col my-5 lg:flex-row lg:h-4/5 lg:w-10/12 lg:px-8'>
        <div className='w-full bg-secondary px-5 py-10 gap-2 rounded-t-lg text-white flex flex-col justify-center items-center
        lg:h-full lg:p-12 lg:gap-8 lg:rounded-r-none lg:rounded-l-lg
        shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]'>
          <h1 className='font-bold text-xl'>Misión</h1>
          <p className='text-sm lg:text-base text-justify'>Somos una institución educativa que brinda atención especializada a estudiantes con discapacidad intelectual mediante la práctica de metodologías innovadoras e inclusivas para el desarrollo pleno de competencias para integrarse a su medio social.</p>
        </div>
        <div className='w-full bg-primary p-5 gap-2 rounded-b-lg text-secondary flex flex-col justify-center items-center
        lg:h-full lg:p-12 lg:gap-8 lg:rounded-l-none lg:rounded-r-lg
        shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]'>
          <h1 className='font-bold text-xl'>Visión</h1>
          <p className='text-sm lg:text-base text-justify'>Ser una institución educativa que brinde una formación integral, donde sea reconocida y valorada por la comunidad por su calidad, innovación, formación académica y laboral, a estudiantes con discapacidad intelectual, con la participación activa de la familia y miembros de la comunidad, desarrollando sus potencialidades para la participación plena en el medio social y laboral.</p>
        </div>
      </section>

      <h1 className='text-secondary font-bold text-2xl mt-6'>Valores institucionales</h1>
      <section className='w-full h-auto flex-row items-center mb-5 gap-5 lg:w-10/12 lg:gap-8'>
        <div className='flex flex-col lg:flex-row lg:gap-12 w-full px-4 py-8'>
          <p className='text-justify text-sm lg:text-base'><a className='font-bold'>Amor:</a> Saber, reconocer y asumir que las personas tienen defectos como virtudes. Es la comprometida manifestación   del mas puro interés que uno puede sentir por otra persona.
            <br /><br />
            <a className='font-bold'>Humildad:</a> Aceptamos cuando nos equivocamos y necesitamos ayuda. Teniendo consciencia de las limitaciones y debilidades que se nos presentan.
            <br /><br />
            <a className='font-bold'>Alegría:</a> Se propicia un ambiente armónico y agradable para todo aquel que visite la institución.</p>
          <br />

          <p className='text-justify text-sm lg:text-base'><a className='font-bold'>Respeto:</a> Se practica el valor con toda la comunidad educativa, se toma en cuenta dentro de las normas de convivencia, ya que se acepta y aprecia las cualidades de cada individuo.
            <br /><br />
            <a className='font-bold'>Disciplina:</a> Forma de actuar de manera ordenada, organizada, poniendo limites de manera constante.
            <br /><br />
            <a className='font-bold'>Gratitud:</a> Sentirnos satisfechos con las personas involucradas en el proceso formativo de los estudiantes.</p>
        </div>
        <div className='flex justify-center w-full'>
          <img src="/src/assets/Picture3.webp" alt="" className='w-11/12 h-1/3 object-cover rounded-lg lg:h-72 lg:object-center lg:w-2/3 ' />
        </div>
      </section>


      <Footer />
    </div>

  )
}

export default AboutUs