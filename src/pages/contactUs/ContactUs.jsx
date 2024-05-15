import Navbar from "../../components/navbar/Navbar"
import Footer from "../../components/footer/Footer"
import EmailForm from "../../components/emailForm/EmailForm"


function ContactUs() {
    return (
        <div className="h-screen min-h-screen flex flex-col items-center font-Montserrat">
            <Navbar />

            <div className='w-full h-auto flex flex-col items-center bg-shapes'>
            <h1 className='font-bold text-secondary text-xl lg:text-3xl lg:font-extrabold lg:my-6'>Contáctenos</h1>

<div className="flex flex-col items-center w-full h-fit gap-6 p-4 lg:px-14">
    <div className="grid lg:grid-cols-3 w-full h-fit gap-6 lg:gap-8">
        <section className="order-last lg:order-first bg-slate-400">
            <div className="google-map-code w-full h-96 lg:h-full">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3872.47864167!2d-89.84985492516677!3d13.930082186480629!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f6297f6ec87d7cf%3A0x683dd6c8693d080b!2sEscuela%20de%20Educaci%C3%B3n%20Especial%20de%20Ahuachap%C3%A1n!5e0!3m2!1ses-419!2ssv!4v1710895757930!5m2!1ses-419!2ssv"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowfullscreen=""></iframe>
            </div>
        </section>

        <dl className="h-auto flex flex-col items-center justify-between bg-secondary text-center text-white p-8 gap-2 rounded-lg shadow-xl">
            <dt className="text-xl lg:text-2xl font-semibold pb-3">Información de Contacto</dt>

            <div className="flex justify-center w-full p-1">
                <img src="src\assets\email-svgrepo-com 1.png" alt="" className='w-16 h-16' />
            </div>
            <dd className="text-base lg:text-lg pb-4">Correo electrónico: roxana.carmen.chiguila@clases.edu.sv</dd>

            <div className="flex justify-center w-full p-1">
                <img src="src\assets\phone-call-svgrepo-com 1.png" alt="" className='w-16 h-16' />
            </div>
            <dd className="text-base lg:text-lg">Teléfono: (503) 7887-4853</dd>
        </dl>

        <dl className="h-auto flex flex-col order-first lg:order-last items-center justify-between bg-primary text-center text-secondary p-8 gap-2 rounded-lg shadow-xl">
            <dt className="text-xl lg:text-2xl font-semibold pb-3">Horarios de Atención</dt>
            <dd className="text-base lg:text-lg">Lunes a Viernes</dd>
            <dd className="text-base lg:text-lg">Matutino: 7:00 AM - 11:30 AM</dd>
            <dd className="text-base lg:text-lg pb-2">Vespertino: 1:00 PM - 5:30 PM</dd>

            <div className='flex justify-center w-full p-1'>
                <img src="src\assets\location-pin-svgrepo-com 1.png" alt="" className='w-16 h-16' />
            </div>
            <dd className="text-base lg:text-lg">Dirección: Col. Zacamil, esquina opuesta a Hospital General de Ahuachapán Francisco Menéndez.</dd>
        </dl>
    </div>

    <section className="flex w-full h-auto items-center justify-between bg-primary rounded-lg">
        <EmailForm />

        <img src="/src/assets/Picture2.webp" alt="" className='hidden lg:flex w-1/2 h-full object-cover rounded-r-lg' />
    </section>
</div>

            </div>
           
            <Footer />
        </div>
    )
}

export default ContactUs