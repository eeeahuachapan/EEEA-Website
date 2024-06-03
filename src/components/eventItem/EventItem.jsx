import React, { useEffect, useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

function EventItem({ event }) {
  const [open, setOpen] = React.useState(false);
  // Convertir la cadena datetime a un objeto Date
  const eventDate = new Date(event.datetime);
  const [images, setImages] = useState([])

  // Obtener la fecha y hora por separado
  const formattedDate = eventDate.toLocaleDateString('es-ES', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  const formattedTime = eventDate.toLocaleTimeString('es-ES', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  });

  const onclickHandler = () => {
    setOpen(true);
  }

  useEffect(() => {
    setImages(event.images)
  }, [])

  return (
    <div onClick={onclickHandler} className="font-Montserrat cursor-pointer card card-side bg-base-100 h-fit shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-xl flex md:w-3/4 lg:w-5/12">
      <img src={event.thumbnail} alt="" className='w-1/3 lg:w-5/12 object-cover rounded-l-xl' />
      <div className="card-body p-5 rounded-r-xl text-xs bg-white lg:text-sm items-stretch justify-between gap-5 w-full">
        <h1 className='text-secondary text-lg font-bold'>{event.title}</h1>
        <div className='flex text-xs flex-col lg:text-sm gap-4'>
          <label className='flex flex-row gap-1 items-center text-left'>
            <svg width="64px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M3 9H21M7 3V5M17 3V5M6 13H8M6 17H8M11 13H13M11 17H13M16 13H18M16 17H18M6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V8.2C21 7.07989 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z" stroke="#f4676a" strokeWidth="1.464" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
            <p className="lg:w-44 w-32">{formattedDate}</p></label>
          <label className='flex flex-row gap-1 items-center text-left'><svg width="64px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12ZM3.00683 12C3.00683 16.9668 7.03321 20.9932 12 20.9932C16.9668 20.9932 20.9932 16.9668 20.9932 12C20.9932 7.03321 16.9668 3.00683 12 3.00683C7.03321 3.00683 3.00683 7.03321 3.00683 12Z" fill="#f4676a"></path> <path d="M12 5C11.4477 5 11 5.44771 11 6V12.4667C11 12.4667 11 12.7274 11.1267 12.9235C11.2115 13.0898 11.3437 13.2343 11.5174 13.3346L16.1372 16.0019C16.6155 16.278 17.2271 16.1141 17.5032 15.6358C17.7793 15.1575 17.6155 14.5459 17.1372 14.2698L13 11.8812V6C13 5.44772 12.5523 5 12 5Z" fill="#f4676a"></path> </g></svg>
            <p className="lg:w-44 w-32">{formattedTime}</p></label>
          <label className='flex flex-row gap-1 items-center text-left'><svg width="64px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z" stroke="#f4676a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
            <p className="lg:w-44 w-32">{event.location}</p></label>
          {event.completed && (<img src="/src/assets/done.svg" className="w-8 lg:w-9 absolute right-0 bottom-0" alt="" />)}

        </div>
      </div>
      <Lightbox styles={{ root: { "--yarl__color_backdrop": "rgba(0, 0, 0, .8)" } }}
        open={open}
        carousel={{ finite: images.length <= 1 }}
        render={{
          buttonPrev: images.length <= 1 ? () => null : undefined,
          buttonNext: images.length <= 1 ? () => null : undefined,
        }}
        close={() => setOpen(false)}
        slides={[
          { src: `${event.thumbnail}` },
          ...images.map((img) => ({ src: img.url })),
          //{ src: "https://res.cloudinary.com/dfqy4eq0k/image/upload/v1715913609/events/images/unpzjami0xivqhhewy67.webp" },
        ]}
      />
    </div>
  )
}

export default EventItem