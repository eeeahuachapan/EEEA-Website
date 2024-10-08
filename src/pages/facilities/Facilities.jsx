import Footer from "../../components/footer/Footer"
import Navbar from "../../components/navbar/Navbar"
import Loader from "../../components/loader/Loader"
import { useEffect, useState } from "react";
import { getFacilities } from "../../services/facilityService";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Inline from "yet-another-react-lightbox/plugins/inline";

function Facilities() {
    const [loading, setLoading] = useState(false);
    const [facilities, setFacilities] = useState([]);
    const [open, setOpen] = useState(false);
    const [index, setIndex] = useState(0);

    // Function to toggle the lightbox open state
    const toggleOpen = (bool) => {
        setOpen(bool);
    };

    // Update the current index in the lightbox
    const updateIndex = ({ index: current }) => setIndex(current);

    const getData = async () => {
        try {
            setLoading(true);
            const data = await getFacilities();
            if (data) {
                setFacilities(data);
                setLoading(false);
            }
        } catch (error) {
            console.error('Error al obtener datos de la API:', error);
        }
    };

    // Gets all facilities on load
    useEffect(() => {
        getData();
    }, []);

    return (
        <div className="h-screen min-h-screen flex flex-col items-center font-Montserrat bg-shapes">
            <Navbar />

            <h1 className='font-bold text-secondary text-xl lg:text-3xl lg:font-extrabold lg:my-6'>Instalaciones</h1>

            <section className="h-screen flex flex-col lg:flex-row-reverse items-center justify-between lg:px-16 md:gap-10 lg:gap-16 m-2">
                <div className='w-full lg:w-3/5 flex flex-col items-center p-2 lg:pl-12 bg-white rounded-md'>
                    <p className='text-sm md:text-base lg:text-lg text-justify'>
                        Contamos con rampas de acceso que facilitan la entrada a personas con discapacidad motora o en silla de ruedas, tanto para acceder a la institución como para acceder a cualquier instalación dentro de ella. <br />
                        Nuestra institución posee servicios sanitarios adecuados para niños con discapacidad.<br />
                        Además, se dispone de una cancha para la recreación de los alumnos en sus recreos y clases, rodeada de áreas verdes. <br />
                        Actualmente, nuestro centro educativo se encuentra en la lista de escuelas que serán remodeladas por parte del proyecto de "Mi nueva escuela". Esperamos que nuestra infraestructura mejore con el tiempo.</p>
                </div>

                <div className="w-11/12 lg:w-3/5 h-auto my-6 carousel rounded-box">
                    {loading && (
                        <div className="w-full h-full flex items-center justify-center">
                            <Loader />
                        </div>)}

                    {facilities.length > 0 ? (
                        <>
                            <Lightbox
                                index={index}
                                slides={[
                                    ...facilities.map((facility) => ({ src: facility.url })),
                                ]}
                                plugins={[Inline]}
                                on={{
                                    view: updateIndex,
                                    click: () => toggleOpen(true),
                                }}
                                carousel={{
                                    padding: 0,
                                    spacing: 0,
                                    imageFit: "cover",
                                }}
                                inline={{
                                    style: {
                                        width: "100%",
                                        maxWidth: "900px",
                                        aspectRatio: "3 / 2",
                                        margin: "0 auto",
                                    },
                                }}
                            />

                            <Lightbox
                                open={open}
                                close={() => toggleOpen(false)}
                                index={index}
                                slides={[
                                    ...facilities.map((facility) => ({ src: facility.url })),
                                ]}
                                on={{ view: updateIndex }}
                                animation={{ fade: 0 }}
                                controller={{ closeOnPullDown: true, closeOnBackdropClick: true }}
                            />
                        </>
                    ) : (
                        <div className="w-full flex justify-center items-center">
                            <p>No se encontraron instalaciones.</p>
                        </div>
                    )}
                </div>
            </section>

            <Footer />
        </div>
    )
}

export default Facilities