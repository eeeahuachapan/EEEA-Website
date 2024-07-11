import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'

function AcademicOffer() {

    return (
        <div className=' h-screen min-h-screen flex flex-col items-center font-Montserrat'>
            <Navbar />

            <div className='h-1/5 w-full  -z-10 flex flex-col justify-center lg:items-center lg:h-1/3'>

                <h1 className='text-white font-extrabold absolute z-10 text-4xl text-center lg:text-5xl lg:px-32'>OFERTA ACADÉMICA</h1>
                <img src='/assets/banner.webp' alt='logo' className='object-cover h-full w-full relative brightness-50' />
            </div>

            <div className='w-full h-auto flex flex-col items-center bg-shapes'>

                <div className='w-full justify-center flex lg:justify-end'>
                    <div className='w-11/12 h-auto bg-primary rounded-md lg:rounded-l-md lg:rounded-r-none  flex flex-col lg:flex-row items-center justify-evenly p-5 my-5 lg:mt-12 gap-3 lg:w-11/12 lg:h-auto
    shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] px-10 lg:py-10'>
                        <h1 className='text-secondary font-bold text-xl lg:text-3xl lg:font-extrabold lg:w-1/5'>Parvularia y 1er grado</h1>
                        <div className='text-secondary'>
                            <h2 className='font-semibold'>Ingreso</h2>
                            <ul className='list-disc '>
                                <li> No puede inhibir su movimiento y controlar sus impulsos</li>
                                <li> Identifica sus emociones y sentimientos y los expresa </li>
                                <li> La mayoria posee control de esfinter</li>
                                <li> Presenta dificultad para seguir indicaciones</li>
                                <li> Interactua haciendo uso de la comunicacion oral</li>
                                <li> Desarrolla lazoz de amistad</li>
                            </ul>
                        </div>
                        <div className='text-secondary'>
                            <h2 className='font-semibold'>Egreso</h2>
                            <ul className='list-disc '>
                                <li> Identifica situaciones de riesgo o peligros</li>
                                <li> Comprende que hay valores y normas que respetar </li>
                                <li> Se mantiene en el tema y expresa sus ideas</li>
                                <li> Reconoce su nombre</li>
                                <li> Se logra comunicar segun la modalidad que le sea mas conveniente</li>
                                <li> Realiza actividades de la vida diaria</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className='w-full justify-center flex lg:justify-start'>
                    <div className='w-11/12 h-auto bg-secondary text-white rounded-md lg:rounded-r-md lg:rounded-l-none flex flex-col lg:flex-row items-center justify-evenly p-5 my-5 lg:mt-12 gap-3 lg:w-11/12 lg:h-auto
    shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] px-10 lg:py-10'>
                        <h1 className=' font-bold text-xl lg:w-1/5  lg:text-3xl lg:font-extrabold'>2do y 3er grado</h1>
                        <div>
                            <h2 className='font-semibold'>Ingreso</h2>
                            <ul className='list-disc '>
                                <li> Reconocer miembros de la familia, medios de transporte y elementos del entorno como animales</li>
                                <li> Reconocer emociones y sentimientos en otras personas </li>
                                <li> No es capaz de limpiarse al ir al baño</li>
                                <li> No tiene lenguaje fluido</li>
                                <li> Presenta un poco de dificultad al seguir indicaciones</li>
                                <li> Explora el medio natural a traves de experiencias sensoriales</li>
                            </ul>
                        </div>
                        <div >
                            <h2 className='font-semibold'>Egreso</h2>
                            <ul className='list-disc '>
                                <li> Expresa y comunica ideas y emociones a traves de diferentes lenguajes</li>
                                <li> Adquisición de noción de cantidad (todo, mucho, ninguno)</li>
                                <li> Respeta las normas establecidas en los contextos en los que se desenvuelve</li>
                                <li> Diferencia las caracteristicas de forma, color, tamaño</li>
                                <li> Resuelve situaciones de la vida cotidiana</li>
                                <li> Aplica las normas básicas de convivencia y acepta opiniones de los demas</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className='w-full justify-center flex lg:justify-end'>
                    <div className='w-11/12 h-auto bg-primary rounded-md lg:rounded-l-md lg:rounded-r-none  flex flex-col lg:flex-row items-center justify-evenly p-5 my-5 lg:mt-12 gap-3 lg:w-11/12 lg:h-auto
    shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] px-10 lg:py-10'>
                        <h1 className='text-secondary font-bold text-xl lg:text-3xl lg:font-extrabold lg:w-1/5'>4to a 6to grado</h1>
                        <div className='text-secondary'>
                            <h2 className='font-semibold'>Ingreso</h2>
                            <ul className='list-disc '>
                                <li> Inician las habilidades de mantener el entorno seguro</li>
                                <li> Practica la empatia, asertividad en situaciones adecuadas, aceptación de su cuerpo y su identidad sexual</li>
                                <li> Sigue reglas y las actividades de la vida diaria</li>
                                <li> Contesta a preguntas personales</li>
                                <li> Usa frases sencillas, frases escritas y la lectura de pequeños textos</li>
                            </ul>
                        </div>
                        <div className='text-secondary'>
                            <h2 className='font-semibold'>Egreso</h2>
                            <ul className='list-disc '>
                                <li> Demuestra autonomia en diferentes situaciones del centro educativo</li>
                                <li> Desarrollo de la identidad en actividades individuales y colectivas</li>
                                <li> Practica medidas de prevencion de enfermedades, riesgos y accidentes</li>
                                <li> Comprende las normas de circulación y seguridad vial</li>
                                <li> Desarrolla habilidades de lectroescritura mecánica</li>
                                <li> Realiza operaciones de la vida cotidiana</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className='w-full justify-center flex lg:justify-start'>
                    <div className='w-11/12 h-auto bg-secondary text-white rounded-md lg:rounded-r-md lg:rounded-l-none flex flex-col lg:flex-row items-center justify-evenly p-5 my-5 lg:mt-12 gap-3 lg:w-11/12 lg:h-auto
    shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] px-10 lg:py-10'>
                        <h1 className=' font-bold text-xl lg:w-1/5  lg:text-3xl lg:font-extrabold'>Formación Laboral</h1>
                        <div>
                            <h2 className='font-semibold'>Ingreso</h2>
                            <ul className='list-disc '>
                                <li> Resuelve situaciones de la vida cotidiana</li>
                                <li> Aplica las normas básicas de convivencia</li>
                                <li> Expresa y comunica ideas y sentimientos a traves de los diferentes lenguajes</li>
                                <li> Deficiencia en competencias de autodirección y autocuidado</li>
                                <li> Falta de seguridad en sus capacidades</li>
                                <li> Sigue indicaciones y cumple horarios establecidos</li>
                            </ul>
                        </div>
                        <div >
                            <h2 className='font-semibold'>Egreso</h2>
                            <ul className='list-disc '>
                                <li> Respeta a compañeros de trabajo</li>
                                <li> Comunica sus ideas con asertividad</li>
                                <li> Cumple con las normas y politicas del espacio de trabajo</li>
                                <li> Elabora distintos procesos de manufactura de recetas</li>
                                <li> Auxilia en proceso de limpieza, corte y organizacion</li>
                                <li> Maneja estrategias de matemáticas aplicada en la vida diaria y laboral</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>


            <Footer />
        </div>
    )
}

export default AcademicOffer