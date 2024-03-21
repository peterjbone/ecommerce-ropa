export const setAllClothes = (ropa) => {
    return {
        type: "SETALLCLOTHES",
        payload: ropa
    };
};

export const filtroPorNombre = (nombre) => {
    return {
        type: "FILTERBYNAME",
        payload: nombre
    };
};

export const filtroPorPrecio = (precioMin, precioMax) => {
    return {
        type: "FILTERCLOTHESBYPRICE",
        payload: { precioMin, precioMax }
    };
};

export const filtroRopaNueva = () => {
    return {
        type: "FILTERNEWCLOTHES"
    };
};

export const filtroPorMarca = (marca) => {
    return {
        type: "CLOTHESBRAND",
        payload: marca
    };
};

export const filtroPorCategoria = (categoria) => {
    return {
        type: "CLOTHESCATEGORY",
        payload: categoria
    };
};

export const filtroPorDescuento = () => {
    return {
        type: "DISCOUNT"
    };
};