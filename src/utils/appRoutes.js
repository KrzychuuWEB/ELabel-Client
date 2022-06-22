export const routes = {
    home: "/",
    product: {
        getAll: "/products",
        getBySlug: slug => `/products/${slug}`,
    },
};