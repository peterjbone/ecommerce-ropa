const initialState = {
    filtro: [],
    orden: [],
    paginaActual: 1,
    searchBar: [],
    errores: {}
};

const rootReducer = (state = initialState, action) => {
    switch(action.type){

        default:
            return {...state};

        case "SETPAGE":
            return {
                ...state,
                paginaActual: action.payload
            }

        case "SETALLCLOTHES":
            return {
                ...state,
                todaLaRopa: action.payload,
                ropa: action.payload
            }

        case "FILTERBYNAME":
            if (action.payload === "") return {
                ...state,
                ropa: state.todaLaRopa
            }

            let filtroNombre = state.todaLaRopa.filter((elem) => {
                return elem.nombre.toLowerCase().includes(action.payload.toLowerCase());
            })

            return {
                ...state,
                ropa: filtroNombre
            }
        
        case "FILTERCLOTHESBYPRICE":
            const { precioMin, precioMax } = action.payload;

            let filtroPrecio = state.todaLaRopa.filter(elem => {
                return elem.precio >= precioMin && elem.precio <= precioMax;
            });

            return {
                ...state,
                ropa: filtroPrecio
            };

        case "FILTERNEWCLOTHES":
            let ropaNueva = state.todaLaRopa.filter((elem) => {
                return elem.productoNuevo === true;
            });
        
            return {
                ...state,
                ropa: ropaNueva
            };
            
        case "CLOTHESBRAND":
            let marcaRopa = state.todaLaRopa.filter((elem) => {
                return elem.marca === action.payload;
            })

            return {
                ...state,
                ropa: marcaRopa
            };

        case "CLOTHESGENDER":
            let generoRopa = state.todaLaRopa.filter((elem) => {
                return elem.genero === action.payload;
            })

            return {
                ...state,
                ropa: generoRopa
            };

        case "CLOTHESCATEGORY":
            let categoriaRopa = state.todaLaRopa.filter((elem) => {
                return elem.categoria === action.payload;
            })

            return {
                ...state,
                ropa: categoriaRopa
            };

        case "DISCOUNT":
            let ofertaRopa = state.todaLaRopa.filter((elem) => {
                return elem.oferta.offActiva === true;
            })

            return {
                ...state,
                ropa: ofertaRopa
            };
    }
};

export default rootReducer;