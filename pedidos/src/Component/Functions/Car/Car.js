

// export const add = (Id, Nombre, Marca, Categoria, CantidadDisponible, Precio) => {
//     const existingCart = JSON.parse(localStorage.getItem("car")) || [];
    
//     const isProductInCart = existingCart.some(product => product.id === Id);
    
//     if (!isProductInCart) {
//         const newProduct = {
//             id: Id,
//             nombre: Nombre,
//             marca: Marca,
//             categoria: Categoria,
//             disponible: CantidadDisponible,
//             precio: Precio
//         };
        
//         const updatedCart = [...existingCart, newProduct];
        
//         localStorage.setItem("car", JSON.stringify(updatedCart));
        
//         setProducts_2(prevProducts => [...prevProducts, newProduct]);
        
//         console.log("Producto agregado al carrito");
//     } else {
//         console.log("Producto ya añadido al carrito");
//     }
// };

