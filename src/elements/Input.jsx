import "../App.css"

export const Input = ({ onClick, type, placeholder, onDone }) => {
    
    return(
        <input type={type} placeholder={placeholder} className='rounded-md text-md px-4 py-2 cursor-pointer bg-blue-100 text-white outline-none ' onChange={(e) => {
            onDone(e.target.value);
        }}/>
    )
}