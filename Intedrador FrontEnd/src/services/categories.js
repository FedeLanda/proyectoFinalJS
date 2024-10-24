
//======CATEGORIA=====

import { categoriaActiva } from "../../main";
import { handleGetProductLocalStorage } from "../persitence/localStorage";
import { handleRenderList } from "../views/store";

const handleFilterProductByCategory=(categoryIn)=>{
    const products= handleGetProductLocalStorage();

    switch(categoryIn){
        case categoriaActiva:
        handleRenderList(products);
        break;
        case "Todos":
        handleRenderList(products);
        break;
        case "Hamburguesas":
        case "Papas":
        case "Gaseosas":
            const result= products.filter((el)=>el.categoria=== categoryIn)
            handleRenderList(result);
            default:
                break;

        case "mayorPrecio" :
            const resultPrecioMayor= products.sort((a,b)=>b.precio-a.precio)
              handleRenderList(resultPrecioMayor)  ; 
              break;
              case "menorPrecio" :
            const resultPrecioMenor= products.sort((a,b)=>a.precio-b.precio)
              handleRenderList(resultPrecioMenor)  ;  
              break; 
    }

};




// Render de la vista categoria


export const renderCategory= ()=>{
    const ulList = document.getElementById("listFilter");

    ulList.innerHTML =`
        <li id ="Todos"> Todos los Productos</li>
        <li id ="Hamburguesas"> Hamburguesas</li>
        <li id ="Papas"> Papas</li>
        <li id ="Gaseosas"> Gaseosas</li>
        <li id ="mayorPrecio"> Mayor Precio</li>
        <li id ="menorPrecio"> Menor Precio </li>
        `;
   
        const liElements= ulList.querySelectorAll("li");

   liElements.forEach((liElement)=>{
   liElement.addEventListener("click",()=>{
    handleClick(liElement);


 });
});

//Verificamos que este elemento esta activo
const handleClick=(elemento)=>{
    handleFilterProductByCategory(elemento.id);
    liElements.forEach((el)=>{
        if(el.classList.contains('liActive')){
            el.classList.remove('liActive')
        }else{
            if(elemento===el){
                el.classList.add("liActive");
            }
        }

    })
}

 } ;