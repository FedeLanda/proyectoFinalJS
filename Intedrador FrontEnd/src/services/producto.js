
import { handleGetProductLocalStorage, setInLocalStorage } from "../persitence/localStorage";
import { closeModal } from "../views/modal";

import { handleGetProductsToStore, handleRenderList } from "../views/store";

/* ===== PRODUCT ==== */

// guardamos
    const aceptButton =document.getElementById("aceptButton")

    aceptButton.addEventListener("click",()=>{
        handleSaveOrModifyElements();

    } )

    //funcion guardar
    const handleSaveOrModifyElements= ()=>{
        const nombre= document.getElementById("nombre").value,
        imagen= document.getElementById("img").value,
        precio= document.getElementById("precio").value,
        categoria= document.getElementById("categoria").value;
        let object =null;


            if(productoActivo){
                object={
                    ...productoActivo,
                    nombre,
                    imagen,
                    precio,
                    categoria,
                }    
            }else{
               object ={
            //colocamos un id dinamico con una funcion de javaScript
            id: new Date().toISOString(),
            nombre,
            imagen,
            precio,
            categoria,
        }


        
    }
        setInLocalStorage(object);

        handleGetProductsToStore();

         closeModal();
    }

    //Eliminar elemento

    export const handleDeleteProduct=()=>{

        const product= handleGetProductLocalStorage();
        const result= product.filter((el)=> el.id !== productoActivo.id);
      

        //setear el nuevo array
    localStorage.setItem('products', JSON.stringify(result));

        const newProduct= handleGetProductLocalStorage();
        handleRenderList(newProduct);
        closeModal();
    }