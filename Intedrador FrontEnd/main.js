import { renderCategory } from "./src/services/categories";
import { setInLocalStorage } from "./src/persitence/localStorage";
import './style.css';
import { handleGetProductsToStore } from "./src/views/store";
import { openModal } from "./src/views/modal";
import { handleSearchProductByName } from "./src/services/search";

// =====APLICACION ======


export let categoriaActiva=null;

export const setCategoriaActiva=(categoriaIn)=>{
 categoriaActiva=categoriaIn;
}

export let productoActivo=null;

export const setProductoActivo=(productoIn)=>{
 productoActivo=productoIn;
}



handleGetProductsToStore();
renderCategory();
//Header
const buttonAdd= document.getElementById('buttonAddElement');

buttonAdd.addEventListener('click',()=>{
  openModal();
});

//button search
const buttonSearch= document.getElementById("buttonSearch");

buttonSearch.addEventListener('click',()=>{
  handleSearchProductByName();
});








   


