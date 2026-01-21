import '../App.css'

function ErrorPage() {
  return(
    <div className="w-full h-screen bg-red-300 flex justify-center items-center">
      <div className="bg-red-500 w-1/2 h-2/3 rounded-xl flex items-center justify-center shadow-2xl shadow-blue-500/50">
        <h2 className="text-4xl text-red-800 font-extrabold shadow-brand-blue">
          Sorry, Page not found!!!!!!!!
        </h2>
      </div>
    </div>
  )
}

export default ErrorPage;