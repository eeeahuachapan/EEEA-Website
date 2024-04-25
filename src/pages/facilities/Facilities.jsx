import Footer from "../../components/footer/Footer"
import Navbar from "../../components/navbar/Navbar"

function Facilities() {
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
                    <div className="carousel-item w-full">
                        <img src="/escuelas.png" className="w-full object-contain" />
                    </div>
                    <div className="carousel-item w-full">
                        <img src="https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg" className="w-full object-contain" />
                    </div>
                    <div className="carousel-item w-full">
                        <img src="/escuelas.png" className="w-full object-contain" alt="Tailwind CSS Carousel component" />
                    </div>
                    <div className="carousel-item w-full">
                        <img src="https://daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg" className="w-full object-contain" />
                    </div>
                    <div className="carousel-item w-full">
                        <img src="/escuelas.png" className="w-full object-contain" alt="Tailwind CSS Carousel component" />
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}

export default Facilities