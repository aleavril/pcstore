const Productos = [
    { id: 1, nombre: "Producto 1", precio: 300, categoria: "mother" },
    { id: 2, nombre: "Producto 2", precio: 450, categoria: "procesadores" },
    { id: 3, nombre: "Producto 3", precio: 600, categoria: "memorias" },
    { id: 4, nombre: "Producto 4", precio: 750, categoria: "video" },
    { id: 5, nombre: "Producto 5", precio: 900, categoria: "video" },
    { id: 6, nombre: "Producto 6", precio: 1050, categoria: "mother" },
    { id: 7, nombre: "Producto 7", precio: 1300, categoria: "memorias" },
    { id: 8, nombre: "Producto 8", precio: 1450, categoria: "video" },
    { id: 9, nombre: "Producto 9", precio: 1700, categoria: "mother" },
    { id: 10, nombre: "Producto 10", precio: 1900, categoria: "procesadores" },

]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(Productos);
        }, 2000)
    })
}

export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const producto = Productos.find(item => item.id === id);
            resolve(producto);
        }, 2000)
    })
}

export const getProdByCat = (idCategoria) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const productosCategoria = Productos.filter(item => item.categoria === idCategoria);
            resolve(productosCategoria);
        }, 2000)
    })
}