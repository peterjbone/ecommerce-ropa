import React from "react";
import CategoriesBar from "../../components/CategoriesBar/CategoriesBar";
import { useStore } from "../../store";
import "./NotFound.css";

export default function NotFound() {
  const products = useStore((state) => state.products);
  const listaMarcas = useStore((state) => state.listaMarcas);
  const listaGeneros = useStore((state) => state.listaGeneros);
  const listaCategorias = useStore((state) => state.listaCategorias);
  const listaSubcategorias = useStore((state) => state.listaSubcategorias);
  const listaColores = useStore((state) => state.listaColores);
  const listaTallas = useStore((state) => state.listaTallas);
  const listas = [
    {
      lista: listaGeneros,
      title: "Géneros",
      name: "genero",
    },
    {
      lista: listaMarcas,
      title: "Marcas",
      name: "marca",
    },
    {
      lista: listaCategorias,
      title: "Categorias",
      name: "categoria",
    },
    {
      lista: listaSubcategorias,
      title: "Subcategorias",
      name: "subcategoria",
    },
    {
      lista: listaColores,
      title: "Colores",
      name: "colores",
    },
    // {
    //   lista: listaTallas,
    //   title: "Tallas",
    //   name: "talla",
    // },
  ];
  return (
    <div>
      <div className="not-found-message" >
        <h2>Parece que la página que estas buscando no existe</h2>
        <h3>Puedes seguir explorando desde la barra de navegación o seleccionando una categoría de aquí abajo</h3>
      </div>
      {listas?.map((lista, index) => {
        return (
          <React.Fragment key={index}>
            <CategoriesBar title={lista.title} name={lista.name} categories={lista.lista} products={products} />
          </React.Fragment>
        )
      })}
    </div>
  )
}