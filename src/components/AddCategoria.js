import React, {useState} from "react";
import PropTypes from "prop-types";


export const AddCategoria = ({setCategoria}) => {
    const [inputValue, setInputValue] = useState('');
    const handleInputChange = (e) =>{
        setInputValue(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if(inputValue.trim().length > 2){
            setCategoria(categorias => [inputValue, ...categorias])
            setInputValue("");
        }
        else
            alert("El campo no debe estar vacío")
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                />
            </form>
        </>
    );
}

AddCategoria.propTypes = {
    setCategoria : PropTypes.func.isRequired,
}
