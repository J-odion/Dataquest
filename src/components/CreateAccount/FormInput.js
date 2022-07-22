import { useState } from "react";




const FormInput = (props) => {
    const [value, setValue] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    
    const handleChange = (e) => {
        setValue(e.target.value);
    }
    
    const handleBlur = (e) => {
        if (e.target.value === "") {
        setErrorMessage(props.errorMessage);
        }
    }
    
    const handleFocus = (e) => {
        setErrorMessage("");
    }
    
    return (
        <div className="form-input">
        <label htmlFor={props.id}>{props.label}</label>
        <input
            type={props.type}
            id={props.id}
            name={props.name}
            value={value}
            onChange={handleChange}
            onBlur={handleBlur}
            onFocus={handleFocus}
        />
        <div className="error-message">{errorMessage}</div>
        </div>

    );
    }

    export default FormInput;
