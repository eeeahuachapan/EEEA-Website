import Navbar from "../../components/navbar/Navbar"
import Footer from "../../components/footer/Footer"
import EmailForm from "../../components/emailForm/EmailForm"


function ContactUs() {
    return (
        <div className="h-screen min-h-screen flex flex-col items-center">
            <Navbar />

            <h1 className='font-bold text-secondary text-xl lg:text-3xl lg:font-extrabold lg:my-6'>Contáctenos</h1>

            <div className="flex flex-col items-center w-full h-fit gap-6 p-4 lg:px-14">
                <div className="grid lg:grid-cols-3 w-full h-fit gap-6 lg:gap-8">
                    <section className="order-last lg:order-first bg-slate-400">01</section>

                    <dl className="h-auto flex flex-col items-center justify-between bg-secondary text-center text-white p-8 gap-2 rounded-lg shadow-xl">
                        <dt className="text-xl lg:text-2xl font-semibold pb-3">Información de Contacto</dt>
                        
                        <div className="flex justify-center w-full p-1">
                            <img src="src\assets\email-svgrepo-com 1.png" alt="" className='w-16 h-16' />
                        </div>
                        <dd className="text-base lg:text-lg pb-4">Correo electrónico: correo@gmail.com</dd>

                        <div className="flex justify-center w-full p-1">
                            <img src="src\assets\phone-call-svgrepo-com 1.png" alt="" className='w-16 h-16' />
                        </div>
                        <dd className="text-base lg:text-lg">Teléfono: (503) 7777-8888</dd>
                    </dl>

                    <dl className="h-auto flex flex-col order-first lg:order-last items-center justify-between bg-primary text-center text-secondary p-8 gap-2 rounded-lg shadow-xl">
                        <dt className="text-xl lg:text-2xl font-semibold pb-3">Horarios de Atención</dt>
                        <dd className="text-base lg:text-lg">Lunes a Viernes</dd>
                        <dd className="text-base lg:text-lg pb-4">8:00 AM - 3:00 PM</dd>
                        
                        <div className='flex justify-center w-full p-1'>
                            <img src="src\assets\location-pin-svgrepo-com 1.png" alt="" className='w-16 h-16' />
                        </div>
                        <dd className="text-base lg:text-lg">Dirección: Avenida Hola Hola, Calle Hola, Ahuachapán</dd>
                    </dl>
                </div>

                <section className="flex w-full h-auto items-center justify-between bg-primary rounded-lg">
                    <EmailForm />

                    <img src="/src/assets/Imagen1.jpg" alt="" className='hidden lg:flex w-1/2 h-full object-cover rounded-r-lg' />
                </section>
            </div>

            <Footer />
        </div>
    )
}

export default ContactUs