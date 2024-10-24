import { setProductoActivo } from "../../main";
import { handleGetProductLocalStorage } from "../persitence/localStorage";
import { openModal } from "./modal";

//===========STORE==========
export const handleGetProductsToStore = () => {
    const products = handleGetProductLocalStorage();
    handleRenderList(products);
  };
  
  export const handleRenderList = (productsIn) => {

    const burgers = productsIn.filter((el) => el.categoria === "Hamburguesas");
    const papas = productsIn.filter((el) => el.categoria === "Papas");
    const gaseosas = productsIn.filter((el) => el.categoria === "Gaseosas");
  
    const renderProductsGroup = (productos, titulo) => {
      if (productos.length > 0) {
        const productosHTML = productos.map((producto, index) => {
          return `
            <div class="conteinerTargetItem" id='product-${producto.categoria}-${index}'>
              
              <div>
                <img src=${producto.imagen}  />
              

              <div>
                <h2>${producto.nombre}</h2>
              </div>
              
              <div class="targetProps">
                <p><b>Precio:</b> $ ${producto.precio}</p>
                
              </div>
            </div>
            </div>
          `;
        });
        return `
          <section class='sectionStore'>
            <div class='containersectionTitle'>
                <h3>${titulo}</h3>
            </div>
            <div class='containerProductStore'>
              ${productosHTML.join("")}
            </div>
          </section>
        `;
      } else {
        return "";
      }
    };
  
    // Renderizar cada uno de los productos dentro de su categoría
    const appContainer = document.getElementById("storeContainer");
  
    appContainer.innerHTML = `
      ${renderProductsGroup(burgers, "Hamburguesas")}
      ${renderProductsGroup(papas, "Papas")}
      ${renderProductsGroup(gaseosas, "Gaseosas")}
    `;
  
     const addEvents = (productsIn) => {
       if (productsIn) {
       productsIn.forEach((element, index) => {
         const productContainer = document.getElementById(`product-${element.categoria}-${index}`);
        
         productContainer.addEventListener("click", () => {
            setProductoActivo(element);
            
            openModal();
           });
        }); 
       }
     };
  
     addEvents(burgers);
     addEvents(papas);
    addEvents(gaseosas);
  };