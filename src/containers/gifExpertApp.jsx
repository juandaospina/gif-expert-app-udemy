import { useState } from "react";
import { AddCategory, GifGrid } from "../components";

const GifExpertApp = () => {

    const [ categories, setCategories ] = useState(['Dragon Ball']);

    const handleAddCategory = (newValue) => {
        if ( categories.includes( newValue )) return;
        setCategories([
            newValue,
            ...categories
        ])
    }

    return(
        <>
            <h1>Aplicacion de Gifs</h1>

            <AddCategory 
                handleAddCategory = { handleAddCategory }
            />

            {
                categories.map( category => (
                    <GifGrid 
                        key = { category }
                        category = { category }
                    />  
                ))
            }
        </>
    );
}

export default GifExpertApp;