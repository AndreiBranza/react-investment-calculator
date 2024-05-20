export default function InputGroup({title}) {
    return(
        <p>
            <label>{title}</label>
            <input type="number" required/>      
        </p>
    )
}