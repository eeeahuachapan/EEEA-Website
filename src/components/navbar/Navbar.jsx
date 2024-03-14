import React from 'react'

function Navbar() {
  return (
    <div className="drawer drawer-end font-Montserrat">
    <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
    <div className="drawer-content flex flex-col">
      {/* Navbar */}
      <div className="w-full h-12 navbar font-semibold text-sm ">
        <div className="absolute flex-none right-0 lg:hidden">
          <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
          </label>
        </div> 
        <div className="navbar-start  lg:w-1/12 lg:px-0 lg:mx-5 mt-2 flex lg:items-center lg:justify-center">
              <img className="w-18 h-12" src='/src/assets/logo.png' />
          </div>
        <div className="flex-none hidden lg:block">
        
        </div>
        <div className='navbar-end w-full flex gap-3 pr-8 '>
       <ul className="menu menu-horizontal  px-1 text-sm gap-5 lg:flex hidden">
        
       <li><a className=' hover:bg-slate-100'>Inicio</a></li>
        <li className='' tabIndex={0}>
          <details>
            <summary className='font-Montserrat  hover:bg-slate-100'>Acerca de</summary>
            <ul className="p-2 w-40 bg-white">
            <li>
                <div className=' hover:bg-slate-100'>
                  Nosotros
                </div>
              </li>
              <li className=' hover:bg-slate-100'>
                <div>
                  Instalaciones
                </div>
              </li>
              
            </ul>
          </details>
        </li>
        
        <li><a className=' hover:bg-slate-100  '>Oferta academica</a></li>
        <li tabIndex={0}>
          <details>
            <summary className=' hover:bg-slate-100'>Vida estudiantil</summary>
            <ul className="p-2 bg-white w-40 ">
              <li ><a  className='hover:bg-slate-100 '>Calendario</a></li>
              <li><a className=' hover:bg-slate-100'>Eventos</a></li>
            </ul>
          </details>
        </li>
        <li><a className=' hover:bg-slate-100'>Contactenos</a></li>
      </ul>
       </div>
      </div>
    </div> 
    <div className="drawer-side ">
      <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label> 
      <ul className="menu p-4 py-16 w-64 font-semibold text-base  min-h-full bg-white gap-2">
        {/* Sidebar content here */}
            
        <li><a className=''>Inicio</a></li>
        <li tabIndex={0}>
          <details>
            <summary>Acerca de</summary>
            <ul className="p-2">
              <li>
                <div>
                  Nosotros
                </div>
              </li>
              <li>
                <div>
                  Instalaciones
                </div>
              </li>
            </ul>
          </details>
        </li>
        <li tabIndex={0}>
          <details>
            <summary>Vida estudiantil</summary>
            <ul className="p-2">
              <li><a>Oferta academica</a></li>
              <li><a>Contactenos</a></li>
            </ul>
          </details>
        </li>
        <li><a>Careers</a></li>
        <li><a>About</a></li>
       
       
      </ul>
      
    </div>
  </div>
  )
}

export default Navbar