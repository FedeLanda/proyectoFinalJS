//======Local Storage====

export const handleGetProductLocalStorage=()=>{

const products= JSON.parse(localStorage.getItem('products'));

   if (products){
    return products;
    }else {
    return [];
   }
};

// guardar en localStorage

   export const setInLocalStorage =(productsIn)=>{
        // traer los elemenetos
        let productsInLocal= handleGetProductLocalStorage();

        const existingIndex= productsInLocal.findIndex((productsInLocal)=>
            productsInLocal.id === productsIn.id
    )

        if (existingIndex!==-1){
            //si exite debe reemplazrlo
            productsInLocal[existingIndex]= productsIn;
        }else {
            productsInLocal.push(productsIn);
        }
//setear el nuevo array
localStorage.setItem('products', JSON.stringify(productsInLocal));


}