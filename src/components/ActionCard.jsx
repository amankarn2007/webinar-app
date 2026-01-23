
function ActionCard() {
    return(
        <section className="h-55 w-70 bg-white shadow-xl rounded-2xl grid grid-cols-2 items-center justify-items-center p-2 mt-10">

            <ActionComponents 
                label={"Schedule a Webinar"} 
                icon={<span className="material-symbols-outlined text-4xl!">calendar_clock</span>} 
            />
            
            <ActionComponents 
                label={"Join a Webinar"} 
                icon={<span class="material-symbols-outlined text-4xl!">add</span>} 
            />

            <ActionComponents 
                label={"Open Recordings"} 
                icon={<i class="fa-solid fa-clapperboard text-3xl!"></i>} 
            />
        </section>
    )
}

//Reusing Action Components using this function
function ActionComponents({ label, icon }) {
    return(
        <div className="flex flex-col justify-center items-center cursor-pointer">
            <div className="h-15 w-15 bg-green-400 flex justify-center items-center rounded-xl hover:bg-green-450">
                { icon }
            </div>
            <p className="text-xs font-medium mt-1"> { label } </p>
        </div>
    )
}

export default ActionCard;