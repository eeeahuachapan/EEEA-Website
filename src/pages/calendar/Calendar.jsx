import Navbar from "../../components/navbar/Navbar"
import Footer from "../../components/footer/Footer"

function Calendar() {
    return (
        <div className="h-screen min-h-screen flex flex-col items-center">
            <Navbar />

            <h1 className='font-bold text-secondary text-xl lg:text-3xl lg:font-extrabold lg:my-6'>Calendario Académico</h1>

            <section className="h-screen w-full p-6 gap-10 flex flex-col lg:flex-row items-center lg:justify-between">
                <div className="flex flex-wrap lg:w-32 justify-center join join-horizontal lg:join-vertical m-4 gap-1">
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

                <div className="flex flex-col w-11/12 h-full gap-6">
                    <div className="bg-slate-300">Aqui hay un evento</div>
                    <div className="bg-slate-300">Aqui hay un evento</div>
                    <div className="bg-slate-300">Aqui hay un evento</div>
                    <div className="bg-slate-300">Aqui hay un evento</div>
                    <div className="bg-slate-300">Aqui hay un evento</div>
                    <div className="bg-slate-300">Aqui hay un evento</div>
                    <div className="bg-slate-300">Aqui hay un evento</div>
                    <div className="bg-slate-300">Aqui hay un evento</div>
                    <div className="bg-slate-300">Aqui hay un evento</div>
                    <div className="bg-slate-300">Aqui hay un evento</div>
                </div>
            </section>

            <Footer />
        </div>
    )
}

export default Calendar