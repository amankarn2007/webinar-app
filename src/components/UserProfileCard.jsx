function ProfileCard() {
    return(
        <section className="w-64 h-92 bg-white rounded-2xl flex flex-col items-center justify-center shadow-xl">
            <div className="py-5">
                <img src="../images/aman.png" alt="aman" className="h-30 w-25 rounded-xl"/>
            </div>

            <h2 className="text-3xl font-medium py-2">Aman Karn</h2>
            <div className="py-2 flex flex-col items-center text-gray-600">
                <p>amankarn2007@gmail.com</p>
                <p>9973339813</p>
            </div>
            <p className="text-gray-600">Madhubani, Bihar</p>
        </section>
    )
}

export default ProfileCard;