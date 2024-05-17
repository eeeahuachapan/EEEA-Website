import { sendEmail } from "../../services/emailService";
import { useState } from "react";

function EmailForm() {
    const [formData, setFormData] = useState({
        name: '',
        lastname: '',
        email: '',
        message: '',
        phoneNumber: ''
    });


    const initialState = {
        name: '',
        lastname: '',
        email: '',
        message: '',
        phoneNumber: ''
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log("Enviando correo...");

            const { name, lastname, email, message, phoneNumber } = formData;
            console.log(formData);
            await sendEmail(name, lastname, email, message, phoneNumber);
            setFormData(initialState);
            document.getElementById('my_modal_1').showModal();
            console.log('Correo enviado exitosamente');
        } catch (error) {
            console.error("Error al enviar el correo:", error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className='w-full lg:w-1/2 h-full flex flex-col items-center justify-between gap-3 lg:gap-5 p-8 font-Montserrat'>
            <div className="text-secondary text-xl lg:text-2xl font-semibold pb-3">Envíenos un mensaje</div>

            <div className="grid md:grid-cols-2 md:gap-6 w-full">
                <div className="relative z-0 w-full mb-5 group">
                    <input type="text" name="name" value={formData.name} onChange={handleChange} className="block py-2.5 px-0 w-full text-sm text-secondary
                                 bg-transparent border-0 border-b-2 appearance-none border-secondary focus:outline-none focus:ring-0
                                  focus:border-blue-600 peer" placeholder=" " required />
                    <label className="peer-focus:font-medium absolute text-sm text-secondary duration-300 transform 
                                -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4
                                 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 
                                 peer-focus:scale-75 peer-focus:-translate-y-6">Nombres</label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <input type="text" name="lastname" value={formData.lastname} onChange={handleChange} className="block py-2.5 px-0 w-full text-sm text-secondary bg-transparent border-0 border-b-2 appearance-none border-secondary focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label className="peer-focus:font-medium absolute text-sm text-secondary duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Apellidos</label>
                </div>
            </div>

            <div className="grid md:grid-cols-2 md:gap-6 w-full">
                <div className="relative z-0 w-full mb-5 group">
                    <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} className="block py-2.5 px-0 w-full text-sm text-secondary bg-transparent border-0 border-b-2 appearance-none border-secondary focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label className="peer-focus:font-medium absolute text-sm text-secondary duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Teléfono</label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <input type="email" name="email" value={formData.email} onChange={handleChange} className="block py-2.5 px-0 w-full text-sm text-secondary bg-transparent border-0 border-b-2 appearance-none border-secondary focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label className="peer-focus:font-medium absolute text-sm text-secondary duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Correo electrónico</label>
                </div>
            </div>

            <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows="4" className="block p-2.5 w-full text-sm text-secondary bg-gray-50 rounded-lg placeholder-secondary border border-secondary" placeholder="Escriba su mensaje..."></textarea>

            <button type="submit" className='bg-accent hover:bg-accent_hover active:bg-accent_active text-white rounded-md py-2 w-3/5 font-semibold lg:text-xl lg:font-bold shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] active:shadow-[inset_-12px_-8px_40px_#46464620]'>Enviar</button>
            <dialog id="my_modal_1" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box bg-white">
                    <h3 className="font-bold text-lg">Mensaje enviado con exito</h3>
                    <p className="py-4">Presiona la tecla ESC o presiona el boton para regresar</p>
                    <div className="modal-action">
                        <button onClick={() => document.getElementById('my_modal_1').close()} className="bg-accent flex justify-center hover:bg-accent_hover active:bg-accent_active px-16 py-3 lg:py-1 lg:px-5  text-white rounded-md  w-1/5 font-semibold lg:text-lg lg:font-bold shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] active:shadow-[inset_-12px_-8px_40px_#46464620]">Hecho</button>
                    </div>
                </div>
            </dialog>
        </form>
    )
}

export default EmailForm