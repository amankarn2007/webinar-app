
function ActionCard() {
    return(
        <section className="h-55 w-70 bg-white shadow-xl rounded-2xl grid grid-cols-2 items-center justify-items-center p-2 mt-10">

            <div className="flex flex-col justify-center items-center">
                <div className="h-15 w-15 bg-green-400 flex justify-center items-center rounded-xl">
                    <span className="material-symbols-outlined text-4xl!">calendar_clock</span>
                </div>
                <p className="text-xs font-medium mt-1">Schedule a Webinar</p>
            </div>

            <div className="flex flex-col justify-center items-center">
                <div className="h-15 w-15 bg-green-400 flex justify-center items-center rounded-xl">
                    <span class="material-symbols-outlined text-4xl!">add</span>
                </div>
                <p className="text-xs font-medium mt-1">Join a Webinar</p>
            </div>

            <div className="flex flex-col justify-center items-center">
                <div className="h-15 w-15 bg-green-400 flex justify-center items-center rounded-xl">
                    <i class="fa-solid fa-clapperboard text-3xl!"></i>
                </div>
                <p className="text-xs font-medium mt-1">Open Recordings</p>
            </div>
        </section>
    )
}

export default ActionCard;