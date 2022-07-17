import { useState } from "react";

export const AddCategory = (props) => {

    const { handleAddCategory } = props;
    const [ inputValue, setInputValue ] = useState("");

    const handleInputChange = event => {
        setInputValue(event.target.value);
    }

    const handleOnSubmit = event => {
        event.preventDefault();
        if ( inputValue.length <= 1 ) return;
        
        handleAddCategory( inputValue.trim() );
        setInputValue("");
    } 

    return(
        <form onSubmit={handleOnSubmit}>
            <input 
                type="text" 
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>
    );
}
