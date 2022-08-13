import './TextField.css'

const TextField = (props) => {

    const placeholderModificada = `${props.placeholder}...`

    return(
        <div className="field-text">
            <label>
                {props.label}
            </label>
            <input placeholder={placeholderModificada}/>
        </div>
    )
}

export default TextField