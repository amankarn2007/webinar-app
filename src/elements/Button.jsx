import "../App.css"

export const Button = ({ disabled, onClick, children }) => {
    
    return(
        <span onClick={onClick} className={
            `text-white text-center cursor-pointer ${disabled ? "bg-blue-200" : "bg-green-400"} px-18 py-2 rounded-lg mt-6`
        }>
            { children }
        </span>
    )
}