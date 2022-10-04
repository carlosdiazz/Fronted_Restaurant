const PRODUCT_CART = "productsCart";

export const getProductsCart = () => {
    const response = localStorage.getItem(PRODUCT_CART)
    return JSON.parse(response || '[]')
}

export const addProductCart = (id) => {
    const products = getProductsCart();
    products.push(id)
    localStorage.setItem(PRODUCT_CART, JSON.stringify(products))
}