export const routes = {
    home: "/",
    product: {
        getAll: "/products",
        getBySlug: slug => `/products/${slug}`,
        create: "/products/create",
    },
    label: {
        create: "/labels/create",
    },
};