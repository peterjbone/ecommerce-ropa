import { useEffect } from "react";
import Filters from "../../components/Filters/Filters.jsx";
import Pages from "../../components/Pages/Pages.jsx";

export default function Tienda() {

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <Filters />
      <Pages />
    </>
  )
}