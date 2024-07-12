function CalendarItem({ activity }) {
    const activityDate = new Date(activity.datetime);
    const formattedDate = activityDate.toLocaleDateString('es-ES', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });

    const formattedTime = activityDate.toLocaleTimeString('es-ES', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
      });

    return (
        <div className="card card-side bg-base-100 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] h-fit -z-10 font-Montserrat">
            <div className="flex items-center rounded-l-xl justify-center text-xs lg:text-sm text-center font-semibold p-3 w-28 lg:w-56 bg-accent text-white">
                {formattedDate}
            </div>
            <div className="card-body rounded-r-xl text-xs lg:text-sm bg-white">
                <p>{activity.title}</p>
                {!activity.isAllDay && (
                    <p className="text-accent font-semibold">Hora: {formattedTime}</p>
                )}
            </div>
        </div>
    );
}

export default CalendarItem