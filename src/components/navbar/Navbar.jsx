import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className="drawer drawer-end font-Montserrat ">
    <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
    <div className="drawer-content flex flex-col">
      {/* Navbar */}
      <div className="w-full h-12 navbar font-semibold text-sm ">
        <div className="absolute flex-none right-0 lg:hidden">
          <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
          </label>
        </div> 
        <div className="navbar-start  lg:w-1/12 lg:px-0 lg:mx-5 flex lg:items-center lg:justify-center">
              <img className="w-18 h-12" src='/src/assets/logo.png' />
          </div>
        <div className="flex-none hidden lg:block">
        
        </div>
        <div className='navbar-end w-full flex gap-3 pr-8 '>
       <ul className="menu menu-horizontal  px-1 text-sm gap-5 lg:flex hidden">
        
       <li><Link to='/' className=' hover:bg-slate-100'>Inicio</Link></li>
        <li className='' tabIndex={0}>
          <details>
            <summary className='font-Montserrat  hover:bg-slate-100'>Acerca de</summary>
            <ul className="p-2 w-40 bg-white">
            <li>
                <Link to='/aboutus' className=' hover:bg-slate-100'>
                  Nosotros
                </Link>
              </li>
              <li className=' hover:bg-slate-100'>
                <Link to='/facilities'>
                  Instalaciones
                </Link>
              </li>
              
            </ul>
          </details>
        </li>
        
        <li><a className=' hover:bg-slate-100  '>Oferta académica</a></li>
        <li tabIndex={0}>
          <details>
            <summary className=' hover:bg-slate-100'>Vida estudiantil</summary>
            <ul className="p-2 bg-white w-40 ">
              <li ><Link to='/calendar'  className='hover:bg-slate-100 '>Calendario</Link></li>
              <li><Link to='/events' className=' hover:bg-slate-100'>Eventos</Link></li>
            </ul>
          </details>
        </li>
        <li><Link to='/contactus' className=' hover:bg-slate-100'>Contáctenos</Link></li>
      </ul>
       </div>
      </div>
    </div> 
    <div className="drawer-side ">
      <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label> 
      <ul className="menu p-4 py-16 w-64 font-semibold text-base  min-h-full bg-white gap-2">
        {/* Sidebar content here */}
            
        <li>
          <Link to='/' >
            Inicio
          </Link>
        </li>
        <li tabIndex={0}>
          <details>
            <summary>Acerca de</summary>
            <ul className="p-2">
              <li>
                <Link to='/aboutus' >
                  Nosotros
                </Link>
              </li>
              <li>
                <Link to='/facilities'>
                  Instalaciones
                </Link>
              </li>
            </ul>
          </details>
        </li>
        <li><a>Oferta académica</a></li>
        <li tabIndex={0}>
          <details>
            <summary>Vida estudiantil</summary>
            <ul className="p-2">
              <li><Link to='/calendar'>Calendario</Link></li>
              <li><Link to='/events'>Eventos</Link></li>
            </ul>
          </details>
        </li>
        <li><Link to='/contactus'>Contáctenos</Link></li>
       
       
      </ul>
      
    </div>
  </div>
  )
}

export default Navbar