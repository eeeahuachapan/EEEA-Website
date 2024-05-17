import Navbar from "../../components/navbar/Navbar"
import Footer from "../../components/footer/Footer"
import EventItem from "../../components/eventItem/EventItem"
import { useEffect, useState } from "react";
import { getEvents } from "../../services/eventService";
import Loader from "../../components/loader/Loader";

function Events() {

    const [loading, setLoading] = useState(false);
    const [events, setEvents] = useState([])
    const [completed, setCompleted] = useState(null);
    const [month, setMonth] = useState(0);

    const getData = async () => {
        try {
            setLoading(true);
            let response = await getEvents({ month, completed });
            if (response) {
                setEvents(response.data.events);
                console.log(response.data.events);
            }
            setLoading(false);
        } catch (error) {
            console.error('Error al obtener datos de la API:', error);
        }
    };

    const toggleCompleted = (value) => {
        if (completed === value) {
            setCompleted(null);
        }
        else {
            setCompleted(value);
        }
    };

    const toggleMonth = (num) => {
        if (month === num) {
            setMonth(null);
            return;
        }
        setMonth(num);
    };

    useEffect(() => {
        getData();
        console.log('completed', completed);
    }, [completed, month]);

    return (
        <div className="h-screen min-h-screen flex flex-col items-center font-Montserrat">
            <Navbar />

            <h1 className='font-bold text-secondary text-xl lg:text-3xl lg:font-extrabold lg:my-3'>Eventos</h1>

            <section className="w-full  lg:h-5/6 flex flex-col lg:flex-row items-end lg:items-stretch min-h-4/6 lg:bg-shapes lg:z-0  ">

                <button className="btn btn-sm bg-accent text-white border-none w-2/6 lg:hidden flex justify-between px-4 mr-5" onClick={() => document.getElementById('filters').showModal()}>
                    Filtros
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="white" viewBox="0 0 24 24" stroke="white"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.17 3.91C20.1062 3.78712 20.0101 3.68399 19.8921 3.61173C19.774 3.53947 19.6384 3.50084 19.5 3.5H4.5C4.36157 3.50084 4.226 3.53947 4.10792 3.61173C3.98984 3.68399 3.89375 3.78712 3.83 3.91C3.76636 4.03323 3.73915 4.17204 3.75155 4.31018C3.76395 4.44832 3.81544 4.58007 3.9 4.69L9.25 12V19.75C9.25259 19.9481 9.33244 20.1374 9.47253 20.2775C9.61263 20.4176 9.80189 20.4974 10 20.5H14C14.1981 20.4974 14.3874 20.4176 14.5275 20.2775C14.6676 20.1374 14.7474 19.9481 14.75 19.75V12L20.1 4.69C20.1846 4.58007 20.236 4.44832 20.2484 4.31018C20.2608 4.17204 20.2336 4.03323 20.17 3.91Z" /></svg>
                </button>
                <dialog id="filters" className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box bg-white">
                        <h3 className="font-bold text-lg text-accent">Filtros</h3>

                        <p className="py-4 font-bold">Estado</p>
                        <div className="flex gap-4">
                            <button onClick={() => toggleCompleted(true)} className={`btn btn-sm font-bold border-zinc-800 border-2 rounded-xl ${completed === true ? 'bg-accent text-white border-none hover:border-black hover:bg-accent' : ''}`}>Completado</button>
                            <button onClick={() => toggleCompleted(false)} className={`btn btn-sm font-bold border-zinc-800 border-2 rounded-xl ${completed === false ? 'bg-accent text-white border-none hover:border-black hover:bg-accent' : ''}`}>Proximo</button>
                        </div>

                        <p className="py-4 font-bold">Mes</p>
                        <div className="flex gap-4 w-full flex-wrap">
                            <button onClick={() => toggleMonth(1)} className={`btn btn-sm font-bold border-zinc-800 border-2 rounded-xl ${month === 1 ? 'bg-accent text-white border-none hover:border-black hover:bg-accent' : ''}`}>Enero</button>
                            <button onClick={() => toggleMonth(2)} className={`btn btn-sm font-bold border-zinc-800 border-2 rounded-xl ${month === 2 ? 'bg-accent text-white border-none hover:border-black hover:bg-accent' : ''}`}>Febrero</button>
                            <button onClick={() => toggleMonth(3)} className={`btn btn-sm font-bold border-zinc-800 border-2 rounded-xl ${month === 3 ? 'bg-accent text-white border-none hover:border-black hover:bg-accent' : ''}`}>Marzo</button>
                            <button onClick={() => toggleMonth(4)} className={`btn btn-sm font-bold border-zinc-800 border-2 rounded-xl ${month === 4 ? 'bg-accent text-white border-none hover:border-black hover:bg-accent' : ''}`}>Abril</button>
                            <button onClick={() => toggleMonth(5)} className={`btn btn-sm font-bold border-zinc-800 border-2 rounded-xl ${month === 5 ? 'bg-accent text-white border-none hover:border-black hover:bg-accent' : ''}`}>Mayo</button>
                            <button onClick={() => toggleMonth(6)} className={`btn btn-sm font-bold border-zinc-800 border-2 rounded-xl ${month === 6 ? 'bg-accent text-white border-none hover:border-black hover:bg-accent' : ''}`}>Junio</button>
                            <button onClick={() => toggleMonth(7)} className={`btn btn-sm font-bold border-zinc-800 border-2 rounded-xl ${month === 7 ? 'bg-accent text-white border-none hover:border-black hover:bg-accent' : ''}`}>Julio</button>
                            <button onClick={() => toggleMonth(8)} className={`btn btn-sm font-bold border-zinc-800 border-2 rounded-xl ${month === 8 ? 'bg-accent text-white border-none hover:border-black hover:bg-accent' : ''}`}>Agosto</button>
                            <button onClick={() => toggleMonth(9)} className={`btn btn-sm font-bold border-zinc-800 border-2 rounded-xl ${month === 9 ? 'bg-accent text-white border-none hover:border-black hover:bg-accent' : ''}`}>Septiembre</button>
                            <button onClick={() => toggleMonth(10)} className={`btn btn-sm font-bold border-zinc-800 border-2 rounded-xl ${month === 10 ? 'bg-accent text-white border-none hover:border-black hover:bg-accent' : ''}`}>Octubre</button>
                            <button onClick={() => toggleMonth(11)} className={`btn btn-sm font-bold border-zinc-800 border-2 rounded-xl ${month === 11 ? 'bg-accent text-white border-none hover:border-black hover:bg-accent' : ''}`}>Noviembre</button>
                            <button onClick={() => toggleMonth(12)} className={`btn btn-sm font-bold border-zinc-800 border-2 rounded-xl ${month === 12 ? 'bg-accent text-white border-none hover:border-black hover:bg-accent' : ''}`}>Diciembre</button>
                        </div>
                        <div className="modal-action">
                            <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn bg-accent text-white border-none">Aplicar</button>
                            </form>
                        </div>
                    </div>
                </dialog>


                <div className=" flex-wrap lg:w-40 justify-center join join-horizontal lg:join-vertical mx-4 p-6 gap-1 hidden lg:flex">
                    <h2 className="font-bold text-center text-lg">Estado</h2>
                    <button onClick={() => toggleCompleted(true)} className={`btn btn-sm border-white ${completed === true ? 'bg-accent text-white hover:border-black hover:bg-accent' : ''}`}>Completado</button>
                    <button onClick={() => toggleCompleted(false)} className={`btn btn-sm border-white ${completed === false ? 'bg-accent text-white hover:border-black hover:bg-accent' : ''}`}>Proximo</button>
                    <h2 className="font-bold text-center text-lg">Mes</h2>
                    <button onClick={() => toggleMonth(1)} className={`btn btn-sm border-white ${month === 1 ? 'bg-accent text-white hover:border-black hover:bg-accent ' : ''}`}>Enero</button>
                    <button onClick={() => toggleMonth(2)} className={`btn btn-sm border-white ${month === 2 ? 'bg-accent text-white hover:border-black hover:bg-accent' : ''}`}>Febrero</button>
                    <button onClick={() => toggleMonth(3)} className={`btn btn-sm border-white ${month === 3 ? 'bg-accent text-white hover:border-black hover:bg-accent' : ''}`}>Marzo</button>
                    <button onClick={() => toggleMonth(4)} className={`btn btn-sm border-white ${month === 4 ? 'bg-accent text-white hover:border-black hover:bg-accent' : ''}`}>Abril</button>
                    <button onClick={() => toggleMonth(5)} className={`btn btn-sm border-white ${month === 5 ? 'bg-accent text-white hover:border-black hover:bg-accent' : ''}`}>Mayo</button>
                    <button onClick={() => toggleMonth(6)} className={`btn btn-sm border-white ${month === 6 ? 'bg-accent text-white hover:border-black hover:bg-accent' : ''}`}>Junio</button>
                    <button onClick={() => toggleMonth(7)} className={`btn btn-sm border-white ${month === 7 ? 'bg-accent text-white hover:border-black hover:bg-accent' : ''}`}>Julio</button>
                    <button onClick={() => toggleMonth(8)} className={`btn btn-sm border-white ${month === 8 ? 'bg-accent text-white hover:border-black hover:bg-accent' : ''}`}>Agosto</button>
                    <button onClick={() => toggleMonth(9)} className={`btn btn-sm border-white ${month === 9 ? 'bg-accent text-white hover:border-black hover:bg-accent' : ''}`}>Septiembre</button>
                    <button onClick={() => toggleMonth(10)} className={`btn btn-sm border-white ${month === 10 ? 'bg-accent text-white hover:border-black hover:bg-accent' : ''}`}>Octubre</button>
                    <button onClick={() => toggleMonth(11)} className={`btn btn-sm border-white ${month === 11 ? 'bg-accent text-white hover:border-black hover:bg-accent' : ''}`}>Noviembre</button>
                    <button onClick={() => toggleMonth(12)} className={`btn btn-sm border-white ${month === 12 ? 'bg-accent text-white hover:border-black hover:bg-accent' : ''}`}>Diciembre</button>
                </div>

                <div className="flex flex-col w-full h-auto min-h-screen lg:min-h-fit lg:h-auto lg:w-11/12 gap-6 lg:px-0 py-6 px-2  lg:overflow-y-auto lg:flex-row lg:flex-wrap">

                    {loading && (
                        <div className="w-full h-full flex items-center justify-center">
                            <Loader />
                        </div>)}

                    {events.length === 0 && loading ? (
                        <div className="w-full flex flex-col lg:justify-center items-center gap-5">
                            <svg version="1.0" id="Layer_1" xmlns="http://www.w3.org/2000/svg" width="256px" height="256px" viewBox="0 0 64 64" enableBackground="new 0 0 64 64" xmlSpace="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path fill="#b3c7e4" d="M62.242,53.757L51.578,43.093C54.373,38.736,56,33.56,56,28C56,12.536,43.464,0,28,0S0,12.536,0,28 s12.536,28,28,28c5.56,0,10.736-1.627,15.093-4.422l10.664,10.664c2.344,2.344,6.142,2.344,8.485,0S64.586,56.101,62.242,53.757z M28,54C13.641,54,2,42.359,2,28S13.641,2,28,2s26,11.641,26,26S42.359,54,28,54z M60.828,60.828c-1.562,1.562-4.095,1.562-5.656,0 L44.769,50.425c2.145-1.606,4.051-3.513,5.657-5.656l10.402,10.402C62.391,56.732,62.391,59.266,60.828,60.828z"></path> <path fill="#b3c7e4" d="M28,4C14.745,4,4,14.745,4,28s10.745,24,24,24s24-10.745,24-24S41.255,4,28,4z M28,50 C15.85,50,6,40.15,6,28S15.85,6,28,6s22,9.85,22,22S40.15,50,28,50z"></path> <path fill="#b3c7e4" d="M28,11c-0.553,0-1,0.447-1,1s0.447,1,1,1c8.284,0,15,6.716,15,15c0,0.553,0.447,1,1,1s1-0.447,1-1 C45,18.611,37.389,11,28,11z"></path> </g> </g></svg>
                            <h1 className="text-center text-3xl text-primary font-bold w-full">No se encontraron eventos</h1>
                        </div>
                    ) : (
                        events.map((event) => (
                            <EventItem key={event.id} title={event.title} datetime={event.datetime} thumbnail={event.thumbnail} location={event.location} />
                        ))
                    )}

                </div>
            </section>

            <Footer />
        </div>
    )
}

export default Events