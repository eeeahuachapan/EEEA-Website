import { getAllActivities, getActivitiesByMonth } from "../../services/calendarServices";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import CalendarItem from "../../components/calendarItem/CalendarItem";
import { useEffect, useState } from "react";
import Loader from "../../components/loader/Loader";

function Calendar() {
    const [loading, setLoading] = useState(false);
    const [activities, setActivities] = useState([]);
    const [month, setMonth] = useState(null);

    // Function to get all activities
    const getAllData = async () => {
        try {
            setLoading(true);
            const response = await getAllActivities();

            if (response) {
                setActivities(response.data.activities);
            }
            setLoading(false);
        } catch (error) {
            console.error('Error al obtener datos de la API:', error);
            setLoading(false);
        }
    };

    // Function to get activities by month
    const getMonthData = async () => {
        try {
            setLoading(true);
            const response = await getActivitiesByMonth(month);

            if (response) {
                setActivities(response.data);
            }
            setLoading(false);
        } catch (error) {
            console.error('Error al obtener datos de la API:', error);
            setLoading(false);
        }
    };

    const toggleMonth = (num) => {
        if (month === num) {
            setMonth(null); // Deselect the month if it's already selected
            return;
        } else {
            setMonth(num);
        }
    };

    useEffect(() => {
        if (month === null) {
            getAllData();
        } else {
            getMonthData();
        }
    }, [month]);

    return (
        <div className="h-screen min-h-screen flex flex-col items-center justify-between font-Montserrat">
            <Navbar />

            <h1 className='font-bold text-secondary text-xl lg:text-3xl lg:font-extrabold lg:my-6'>Calendario Académico</h1>

            <section className="w-full lg:h-3/4 flex flex-col lg:flex-row">
                <div className="flex flex-wrap lg:w-40 justify-center join join-horizontal lg:join-vertical mx-4 p-6 gap-1">
                    <button onClick={() => toggleMonth(1)} className={`text-xs btn btn-xs border-white ${month === 1 ? 'bg-accent text-white hover:bg-accent' : ''}`}>Enero</button>
                    <button onClick={() => toggleMonth(2)} className={`text-xs btn btn-xs border-white ${month === 2 ? 'bg-accent text-white hover:bg-accent' : ''}`}>Febrero</button>
                    <button onClick={() => toggleMonth(3)} className={`text-xs btn btn-xs border-white ${month === 3 ? 'bg-accent text-white hover:bg-accent' : ''}`}>Marzo</button>
                    <button onClick={() => toggleMonth(4)} className={`text-xs btn btn-xs border-white ${month === 4 ? 'bg-accent text-white hover:bg-accent' : ''}`}>Abril</button>
                    <button onClick={() => toggleMonth(5)} className={`text-xs btn btn-xs border-white ${month === 5 ? 'bg-accent text-white hover:bg-accent' : ''}`}>Mayo</button>
                    <button onClick={() => toggleMonth(6)} className={`text-xs btn btn-xs border-white ${month === 6 ? 'bg-accent text-white hover:bg-accent' : ''}`}>Junio</button>
                    <button onClick={() => toggleMonth(7)} className={`text-xs btn btn-xs border-white ${month === 7 ? 'bg-accent text-white hover:bg-accent' : ''}`}>Julio</button>
                    <button onClick={() => toggleMonth(8)} className={`text-xs btn btn-xs border-white ${month === 8 ? 'bg-accent text-white hover:bg-accent' : ''}`}>Agosto</button>
                    <button onClick={() => toggleMonth(9)} className={`text-xs btn btn-xs border-white ${month === 9 ? 'bg-accent text-white hover:bg-accent' : ''}`}>Septiembre</button>
                    <button onClick={() => toggleMonth(10)} className={`text-xs btn btn-xs border-white ${month === 10 ? 'bg-accent text-white hover:bg-accent' : ''}`}>Octubre</button>
                    <button onClick={() => toggleMonth(11)} className={`text-xs btn btn-xs border-white ${month === 11 ? 'bg-accent text-white hover:bg-accent' : ''}`}>Noviembre</button>
                    <button onClick={() => toggleMonth(12)} className={`text-xs btn btn-xs border-white ${month === 12 ? 'bg-accent text-white hover:bg-accent' : ''}`}>Diciembre</button>
                </div>

                <div className="flex flex-col lg:w-11/12 gap-6 p-6 lg:overflow-y-auto lg:bg-shapes lg:z-0">
                    {loading && (
                        <div className="w-full h-full flex items-center justify-center">
                            <Loader />
                        </div>
                    )}

                    {activities.length === 0 && !loading ? (
                        <div className="w-full flex flex-col lg:justify-center items-center gap-5 h-full">
                            <h1 className="text-center text-3xl text-primary font-bold">No se encontraron actividades</h1>
                        </div>
                    ) : (
                        activities.map((activity) => (
                            <CalendarItem key={activity.id} activity={activity} />
                        ))
                    )}
                </div>
            </section>

            <Footer />
        </div>
    );
}

export default Calendar