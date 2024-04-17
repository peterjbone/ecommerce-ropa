import styles from "./Home.module.css";
import HeroImagesBar from "../../components/HeroImagesBar/HeroImagesBar";
import ProductsBar from "../../components/ProductsBar/ProductsBar";
import CategoriesBar from "../../components/CategoriesBar/CategoriesBar";
import { useStore } from "../../store.js";
import React, { useEffect } from "react";

export default function Home() {
  const products = useStore((state) => state.products);
  const nuevos = useStore((state) => state.nuevos);
  const destacados = useStore((state) => state.destacados);
  const ofertas = useStore((state) => state.ofertas);
  const tendencia = useStore((state) => state.tendencia);
  const listaMarcas = useStore((state) => state.listaMarcas);
  const listaGeneros = useStore((state) => state.listaGeneros);
  const listaCategorias = useStore((state) => state.listaCategorias);
  const listaSubcategorias = useStore((state) => state.listaSubcategorias);
  const listaColores = useStore((state) => state.listaColores);
  const listaTallas = useStore((state) => state.listaTallas);
  const getCart = useStore((state) => state.getCart);

  useEffect(() => {
    window.scrollTo(0, 0);
    const cartToken = localStorage.getItem("cartToken");
    if (cartToken) {
      getCart(cartToken);
    }
  }, []);

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
      name: "color",
    },
    // {
    //   lista: listaTallas,
    //   title: "Tallas",
    //   name: "talla",
    // },
  ];

  return (
    <div className={styles["home-container"]} id="home">
      <HeroImagesBar products={products} />
      <div className={styles["product-bar"]}>
        <ProductsBar title="Nuevos" products={nuevos} />
      </div>
      {/* <ProductsBar title="Destacados" products={destacados} /> */}
      <div className={styles["product-bar"]}>
        <ProductsBar title="Ofertas" products={ofertas} />
      </div>
      {/* <ProductsBar title="Tendencia" products={tendencia} /> */}
      <div className={styles["product-bar"]}>
        <ProductsBar title="Favoritos" products={products} />
      </div>
      {listas?.map((lista, index) => {
        return (
          <React.Fragment key={index}>
            <CategoriesBar title={lista.title} name={lista.name} categories={lista.lista} products={products} />
          </React.Fragment>
        );
      })}
      <br /><br /><br />
    </div>
  );
}

