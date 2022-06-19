export const routes = {
    home: "/",
    product: {
        getAll: "/products",
        getById: id => `/products/${id}`,
    },
};