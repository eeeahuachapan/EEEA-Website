import Footer from "../../components/footer/Footer"
import Navbar from "../../components/navbar/Navbar"
import Loader from "../../components/loader/Loader"
import { useEffect, useState } from "react";
import { getFacilities } from "../../services/facilityService";

function Facilities() {
    const [loading, setLoading] = useState(false);
    const [facilities, setFacilities] = useState([]);

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

    useEffect(() => {
        getData();
    }, []);

    return (
        <div className="h-screen min-h-screen flex flex-col items-center font-Montserrat">
            <Navbar />

            <h1 className='font-bold text-secondary text-xl lg:text-3xl lg:font-extrabold lg:my-6'>Instalaciones</h1>

            <section className="h-screen flex flex-col lg:flex-row-reverse items-center justify-between lg:px-16 lg:gap-16 ">
                <div className='w-full lg:w-3/5 flex flex-col items-center p-4 lg:pl-12'>
                    <p className='text-sm lg:text-xl text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        <br /> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>

                <div className="w-11/12 lg:w-3/5 h-60 lg:h-96 my-6 carousel rounded-box">
                {loading && (
                        <div className="w-full h-full flex items-center justify-center">
                            <Loader />
                        </div>)}

                    {facilities.length > 0 ? (
                        facilities.map(facility => (
                            <div key={facility.id} className="carousel-item w-full">
                                <img src={facility.url} className="w-full object-contain" alt={facility.name} />
                            </div>
                        ))
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