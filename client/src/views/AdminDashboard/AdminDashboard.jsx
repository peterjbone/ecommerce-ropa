import { useState } from "react";
import ReviewsAcceptance from "../../components/ReviewsAcceptance/ReviewsAcceptance";
import Form from "../Form/Form";
import FormEdit from "../FormEdit/FormEdit";
import "./AdminDashboard.css";

export default function AdminDashboard() {

  const [selectedTab, setSelectedTab] = useState("createProduct");

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <div className="reviews-container">
      <div className="tab-buttons">
        <button
          className={`nav-bar-button ${selectedTab === "createProduct" ? "activeTab" : ""}`}
          onClick={() => handleTabClick("createProduct")}
        >
          Crear Producto
        </button>
        <button
          className={`nav-bar-button ${selectedTab === "editProduct" ? "activeTab" : ""}`}
          onClick={() => handleTabClick("editProduct")}
        >
          Editar Producto
        </button>
        <button
          className={`nav-bar-button ${selectedTab === "acceptReviews" ? "activeTab" : ""}`}
          onClick={() => handleTabClick("acceptReviews")}
        >
          Aceptar Reseñas
        </button>
      </div>
      {(() => {
        switch (selectedTab) {
          case "createProduct":
            return (
              <Form />
            );
          case "editProduct":
            return (
              <FormEdit />
            );
          case "acceptReviews":
            return (
              <ReviewsAcceptance />
            );
          default:
            return (
              <div>Selecciona una opción</div>
            );
        }
      })()}
    </div>
  )
}