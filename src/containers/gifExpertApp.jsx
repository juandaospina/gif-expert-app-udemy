import { useState } from "react";
import AddCategory from "../components/AddCategory";
import GifGrid from "../components/GifGrid";

const GifExpertApp = () => {

    const [ categories, setCategories ] = useState(['Spiderman']);

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