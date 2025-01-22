import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([]);

  const onAddCategory = (newCategory) => {
    // categories.push('Valorant'); NO
    // setCategories(cat => [...cat, 'Valorant']) Una forma de hacerlo
    if (categories.includes(newCategory)) return;

    setCategories([newCategory]); // Mejor así
    
  };

  return (
    <>
      {/* Título */}
      <h1>GifExpertApp</h1>

      {/* Input*/}
      <AddCategory
        // setCategories={setCategories}
        onNewCategory={(value) => onAddCategory(value)}
      />

      {/* Listado de Gifs */}

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}

      {/* Gif Item */}
    </>
  );
};