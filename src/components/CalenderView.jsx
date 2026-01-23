
function CalenderView() {
    return(
        <section className="ml-5 mt-10 h-86 w-120 bg-white rounded-2xl flex flex-col px-4 shadow-xl cursor-pointer">
            {/*date section*/}
            <div className="flex bg-blue-50 rounded-lg mt-5 py-2 px-4 place-content-between items-center">
                <div className="flex space-x-2 justify-center">
                    <span class="material-symbols-outlined">calendar_month</span>
                    <p>Sunday, 25 January 2026</p>
                    <i className="fa-solid fa-angle-down mt-1"></i>
                </div>
                <div className="flex opacity-60">
                    <i class="fa-solid fa-arrow-left"></i>
                    <i class="fa-solid fa-arrow-right"></i>
                </div>
            </div>

            <div className="h-15 mt-2 rounded-lg px-4 py-2 hover:bg-blue-50">
                <CalenderTimeTable eventStatus={"Live"} eventTitle={"UX Webinar"} />
            </div>

            <div className="h-15 mt-2 rounded-lg px-4 py-2 hover:bg-blue-50">
                <CalenderTimeTable eventStatus={"Upcoming"} eventTitle={"My First Webinar"} />
            </div>

            <div className="h-15 mt-2 rounded-lg px-4 py-2 hover:bg-blue-50">
                <CalenderTimeTable eventStatus={"Upcoming"} eventTitle={"Important Webinar"} />
            </div>

            <div className="h-15 mt-2 rounded-lg px-4 py-2 hover:bg-blue-50">
                <CalenderTimeTable eventStatus={"Upcoming"} eventTitle={"Webinar 1"} />
            </div>
        </section>
    )
}

export default CalenderView;



function CalenderTimeTable({eventStatus, eventTitle}) {
    const statusColor = eventStatus === "Live" ? "text-red-500" : "text-blue-400";

    return(
        <div className="flex">
            <div className="pr-2 border-r-2 border-blue-400">
                <div className="text-md font-medium">11:30 AM</div>
                <p className="text-xs">11:30 AM</p>
            </div>

            <div className="flex flex-col px-4">
                <div className="flex items-center">
                    <div className="text-sm"> { eventStatus } </div>
                    <i className={`fa-solid fa-video pl-2 ${statusColor} `}></i>
                </div>
                <div className="font-medium"> { eventTitle } </div>
            </div>
        </div>
    )
}