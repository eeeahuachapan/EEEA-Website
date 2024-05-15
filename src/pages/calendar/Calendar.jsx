import Navbar from "../../components/navbar/Navbar"
import Footer from "../../components/footer/Footer"
import CalendarItem from "../../components/calendarItem/CalendarItem"

function Calendar() {
    return (
        <div className="h-screen min-h-screen flex flex-col items-center justify-between font-Montserrat">
            <Navbar />

            <h1 className='font-bold text-secondary text-xl lg:text-3xl lg:font-extrabold lg:my-6'>Calendario Académico</h1>

            <section className="w-full lg:h-3/4 flex flex-col lg:flex-row">
                <div className="flex flex-wrap lg:w-40 justify-center join join-horizontal lg:join-vertical mx-4 p-6 gap-1">
                    <button className="btn btn-sm border-white">Enero</button>
                    <button className="btn btn-sm border-white">Febrero</button>
                    <button className="btn btn-sm border-white">Marzo</button>
                    <button className="btn btn-sm border-white">Abril</button>
                    <button className="btn btn-sm border-white">Mayo</button>
                    <button className="btn btn-sm border-white">Junio</button>
                    <button className="btn btn-sm border-white">Julio</button>
                    <button className="btn btn-sm border-white">Agosto</button>
                    <button className="btn btn-sm border-white">Septiembre</button>
                    <button className="btn btn-sm border-white">Octubre</button>
                    <button className="btn btn-sm border-white">Noviembre</button>
                    <button className="btn btn-sm border-white">Diciembre</button>
                </div>

                <div className="flex flex-col lg:w-11/12 gap-6 p-6 lg:overflow-y-auto lg:bg-shapes lg:z-0 ">
                    <CalendarItem />
                    <CalendarItem />
                    <CalendarItem />
                    <CalendarItem />
                    <CalendarItem />
                    <CalendarItem />
                    <CalendarItem />
                </div>
            </section>

            <Footer />
        </div>
    )
}

export default Calendar