import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'

function AcademicOffer() {

    return (
        <div className=' h-screen min-h-screen flex flex-col items-center font-Montserrat'>
            <Navbar />

            <div className='h-1/5 w-full  -z-10 flex flex-col justify-center lg:items-center lg:h-1/3'>

                <h1 className='text-white w-full font-extrabold absolute z-10 text-4xl text-center lg:text-5xl lg:px-32'>OFERTA ACADÉMICA</h1>
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
                                <li> No puede inhibir su movimiento y controla sus impulsos.</li>
                                <li> Identifica sus emociones y sentimientos y los expresa.</li>
                                <li> Sigue el ritmo de la música </li>
                                <li> La mayoría posee control de esfínteres </li>
                                <li> Presenta un poco de dificultad al seguir indicaciones.</li>
                                <li> Desarrollar lazos de amistad</li>
                            </ul>
                        </div>
                        <div className='text-secondary'>
                            <h2 className='font-semibold'>Egreso</h2>
                            <ul className='list-disc '>
                                <li> Identifica el espacio físico del aula </li>
                                <li> Practica algunas normas establecidas en el aula. </li>
                                <li> Se expresa a través de movimientos corporales  </li>
                                <li> Se logra comunicar según la modalidad que le sea más conveniente</li>
                                <li> Se incorpora a actividades lúdicas </li>
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
                                <li> Reconoce miembros de la familia, medios de transporte y elemento del entorno relacionados a la naturaleza.</li>
                                <li> Reconocer emociones y sentimientos, en él mismo y en otras personas.  </li>
                                <li> No logra ser totalmente independientemente al momento del uso del baño.</li>
                                <li> Dificultades en el lenguaje oral</li>
                                <li> Presenta dificultad en seguir dos o tres indicaciones de forma consecutiva.</li>
                                <li> Dificultad para respetar bordes de las figuras pequeñas.</li>
                                <li> Explorar el medio natural a través de experiencias sensoriales.</li>
                            </ul>
                        </div>
                        <div >
                            <h2 className='font-semibold'>Egreso</h2>
                            <ul className='list-disc '>
                                <li> Expresa, comunica ideas, sentimientos y emociones a través de diferentes lenguajes corporales. </li>
                                <li> Manifiesta una actitud de solidaridad en momentos emotivos (tristeza, alegría, molestia hacia los demás)</li>
                                <li> Practica constante del aseo adecuado al momento de ir al baño</li>
                                <li> Se logra comunicar según la capacidad que posee.</li>
                                <li> Logra seguir una indicación.</li>
                                <li> Logra respetar límites con espacios amplios.</li>
                                <li> Expresa interés por relacionarse con el medio natural.</li>
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
                                <li> Inicia las habilidades de mantener el entorno seguro.</li>
                                <li> Practica la empatía, asertividad en situaciones adecuadas, aceptación de su cuerpo identidad sexual.</li>
                                <li> Sigue reglas y las actividades de la vida diaria.</li>
                                <li> Responde preguntas personales.</li>
                                <li> Aceptación de su cuerpo y su identidad sexual.</li>
                            </ul>
                        </div>
                        <div className='text-secondary'>
                            <h2 className='font-semibold'>Egreso</h2>
                            <ul className='list-disc '>
                                <li> Demuestra autonomía en diferentes situaciones del centro educativo.</li>
                                <li> Desarrollo de la identidad en actividades individuales y colectivas.</li>
                                <li> Práctica medida de prevención de enfermedades, riesgos y accidentes.</li>
                                <li> Comprende las normas de la circulación y seguridad vial (no todos)</li>
                                <li> Desarrolla actividades de lectoescritura mecánica (algunos transcriben)</li>
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
                                <li> Resuelve situaciones de la vida cotidiana.</li>
                                <li> Aplican las normas básicas de convivencia.</li>
                                <li> Expresa y comunica ideas sentimientos y emociones a través de los diferentes lenguajes.</li>
                                <li> Deficiencia en competencia de autodirección y de autocuidado.</li>
                                <li> Falta de seguridad en sus capacidades.</li>
                                <li> Siguen indicaciones y cumple horarios establecidos.</li>
                            </ul>
                        </div>
                        <div >
                            <h2 className='font-semibold'>Egreso</h2>
                            <ul className='list-disc '>
                                <li> Interactúa pon respeto qué tu hacia sus compañeros en diferentes situaciones.</li>
                                <li> Utiliza algunas frases o norma de cortesía al interactuar con los demás.</li>
                                <li> Sí, lo hace de acuerdo a sus capacidades , ya sea corporal o a través de diferentes lenguajes.</li>
                                <li> Lo hace de acuerdo a instrucciones de lo que se hace paso a paso.</li>
                                <li> Se refuerza autoestima, para lograr un mejor desenvolvimiento en las actividades a realizar.</li>
                                <li> Sí,trabaja en horario flexibles tomando en cuenta sus habilidades y destrezas.</li>
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