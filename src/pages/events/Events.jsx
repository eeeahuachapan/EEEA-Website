import Navbar from "../../components/navbar/Navbar"
import Footer from "../../components/footer/Footer"
import CalendarItem from "../../components/calendarItem/CalendarItem"
import EventItem from "../../components/eventItem/EventItem"

function Events() {
  return (
    <div className="h-screen min-h-screen flex flex-col items-center ">
    <Navbar />

    <h1 className='font-bold text-secondary text-xl lg:text-3xl lg:font-extrabold lg:my-3'>Eventos</h1>

    <section className="w-full  lg:h-5/6 flex flex-col lg:flex-row items-end lg:items-stretch min-h-4/6   ">
        
        <button className="btn btn-sm bg-accent text-white border-none w-2/6 lg:hidden flex justify-between px-4 mr-5" onClick={()=>document.getElementById('filters').showModal()}>
                Filtros
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="white" viewBox="0 0 24 24" stroke="white"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.17 3.91C20.1062 3.78712 20.0101 3.68399 19.8921 3.61173C19.774 3.53947 19.6384 3.50084 19.5 3.5H4.5C4.36157 3.50084 4.226 3.53947 4.10792 3.61173C3.98984 3.68399 3.89375 3.78712 3.83 3.91C3.76636 4.03323 3.73915 4.17204 3.75155 4.31018C3.76395 4.44832 3.81544 4.58007 3.9 4.69L9.25 12V19.75C9.25259 19.9481 9.33244 20.1374 9.47253 20.2775C9.61263 20.4176 9.80189 20.4974 10 20.5H14C14.1981 20.4974 14.3874 20.4176 14.5275 20.2775C14.6676 20.1374 14.7474 19.9481 14.75 19.75V12L20.1 4.69C20.1846 4.58007 20.236 4.44832 20.2484 4.31018C20.2608 4.17204 20.2336 4.03323 20.17 3.91Z" /></svg>
                </button>
                <dialog id="filters" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box bg-white">
                    <h3 className="font-bold text-lg text-accent">Filtros</h3>
                    
                    <p className="py-4 font-bold">Estado</p>
                    <div className="flex gap-4">   
                        <label className="swap">
                        <input type="checkbox" />
                        <div className="bg-accent text-white flex justify-center rounded-xl font-bold px-4 py-1 swap-on">Completado</div>
                        <div className="bg-white border-zinc-800 outline flex justify-center rounded-xl font-bold px-4 py-1 swap-off">Completado</div>
                        </label>
                        <label className="swap">
                        <input type="checkbox" />
                        <div className="bg-accent text-white flex justify-center rounded-xl font-bold px-4 py-1 swap-on">Proximo</div>
                        <div className="bg-white border-zinc-800 outline flex justify-center rounded-xl font-bold px-4 py-1 swap-off">Proximo</div>
                        </label>
                    </div>

                    <p className="py-4 font-bold">Mes</p>
                    <div className="flex gap-4 w-full flex-wrap">   
                        <label className="swap">
                        <input type="checkbox" />
                        <div className="bg-accent text-white flex justify-center rounded-xl font-bold px-4 py-1 swap-on">Enero</div>
                        <div className="bg-white border-zinc-800 outline flex justify-center rounded-xl font-bold px-4 py-1 swap-off">Enero</div>
                        </label>
                        <label className="swap">
                        <input type="checkbox" />
                        <div className="bg-accent text-white flex justify-center rounded-xl font-bold px-4 py-1 swap-on">Febrero</div>
                        <div className="bg-white border-zinc-800 outline flex justify-center rounded-xl font-bold px-4 py-1 swap-off">Febrero</div>
                        </label>
                        <label className="swap">
                        <input type="checkbox" />
                        <div className="bg-accent text-white flex justify-center rounded-xl font-bold px-4 py-1 swap-on">Marzo</div>
                        <div className="bg-white border-zinc-800 outline flex justify-center rounded-xl font-bold px-4 py-1 swap-off">Marzo</div>
                        </label>
                        <label className="swap">
                        <input type="checkbox" />
                        <div className="bg-accent text-white flex justify-center rounded-xl font-bold px-4 py-1 swap-on">Abril</div>
                        <div className="bg-white border-zinc-800 outline flex justify-center rounded-xl font-bold px-4 py-1 swap-off">Abril</div>
                        </label>
                        <label className="swap">
                        <input type="checkbox" />
                        <div className="bg-accent text-white flex justify-center rounded-xl font-bold px-4 py-1 swap-on">Mayo</div>
                        <div className="bg-white border-zinc-800 outline flex justify-center rounded-xl font-bold px-4 py-1 swap-off">Mayo</div>
                        </label>
                        <label className="swap">
                        <input type="checkbox" />
                        <div className="bg-accent text-white flex justify-center rounded-xl font-bold px-4 py-1 swap-on">Junio</div>
                        <div className="bg-white border-zinc-800 outline flex justify-center rounded-xl font-bold px-4 py-1 swap-off">Junio</div>
                        </label>
                        <label className="swap">
                        <input type="checkbox" />
                        <div className="bg-accent text-white flex justify-center rounded-xl font-bold px-4 py-1 swap-on">Julio</div>
                        <div className="bg-white border-zinc-800 outline flex justify-center rounded-xl font-bold px-4 py-1 swap-off">Julio</div>
                        </label>
                        <label className="swap">
                        <input type="checkbox" />
                        <div className="bg-accent text-white flex justify-center rounded-xl font-bold px-4 py-1 swap-on">Agosto</div>
                        <div className="bg-white border-zinc-800 outline flex justify-center rounded-xl font-bold px-4 py-1 swap-off">Agosto</div>
                        </label>
                        <label className="swap">
                        <input type="checkbox" />
                        <div className="bg-accent text-white flex justify-center rounded-xl font-bold px-4 py-1 swap-on">Septiembre</div>
                        <div className="bg-white border-zinc-800 outline flex justify-center rounded-xl font-bold px-4 py-1 swap-off">Septiembre</div>
                        </label>
                        <label className="swap">
                        <input type="checkbox" />
                        <div className="bg-accent text-white flex justify-center rounded-xl font-bold px-4 py-1 swap-on">Octubre</div>
                        <div className="bg-white border-zinc-800 outline flex justify-center rounded-xl font-bold px-4 py-1 swap-off">Octubre</div>
                        </label>
                        <label className="swap">
                        <input type="checkbox" />
                        <div className="bg-accent text-white flex justify-center rounded-xl font-bold px-4 py-1 swap-on">Noviembre</div>
                        <div className="bg-white border-zinc-800 outline flex justify-center rounded-xl font-bold px-4 py-1 swap-off">Noviembre</div>
                        </label>
                        <label className="swap">
                        <input type="checkbox" />
                        <div className="bg-accent text-white flex justify-center rounded-xl font-bold px-4 py-1 swap-on">Diciembre</div>
                        <div className="bg-white border-zinc-800 outline flex justify-center rounded-xl font-bold px-4 py-1 swap-off">Diciembre</div>
                        </label>
                        
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
            <button className="btn btn-sm border-white">Completado</button>
            <button className="btn btn-sm border-white">Proximo</button>
            <h2 className="font-bold text-center text-lg">Mes</h2>
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

        <div className="flex flex-col  lg:w-11/12 gap-6 lg:p-6 py-6 px-2  lg:overflow-y-auto">
         <EventItem />
         <EventItem />
         <EventItem />
         <EventItem />
         <EventItem />
        </div>
    </section>

    <Footer />
</div>
  )
}

export default Events