import { handleGetProductLocalStorage } from "../persitence/localStorage"
import { handleRenderList } from "../views/store";

export const handleSearchProductByName=()=>{
    const inputHeader= document.getElementById("inputHeader")
   const products = handleGetProductLocalStorage();

const result = products.filter((el)=>
    el.nombre.toLowerCase().includes(inputHeader.value)
);
handleRenderList(result);

}