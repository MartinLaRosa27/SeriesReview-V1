import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { EditarReview } from "./assets/EditarReview.jsx";

export const MisReviews = () => {
  const [review, setReview] = useState([]);

  const getReview = () => {
    // Verifia elementos del LS:
    const elementos = JSON.parse(localStorage.getItem("reviewStorage"));
    // Comprueba si es una Array:
    if (Array.isArray(elementos)) {
      // Modifica estado del useState:
      setReview(elementos);
    } else {
      // No hay valores guardados:
      setReview([]);
    }
  };

  const deleteReview = async (_id) => {
    // Crea un array sin el elemento a eliminar:
    const nuevoArray = review.filter((valor) => valor._id !== _id);
    //Modifica el local storage:
    localStorage.setItem("reviewStorage", JSON.stringify(nuevoArray));
    // Recarga componente:
    window.location.reload();
  };

  useEffect(() => {
    getReview();
  }, []);

  return (
    <main className="container mis-reviews">
      <Helmet>
        <title>Mis Reviews | SeriesReview</title>
      </Helmet>
      {review.length === 0 && <h3>No publicaste reviews</h3>}
      {review.map((valor) => {
        return (
          <div className="card" key={valor._id}>
            <div className="card-header">{valor.titulo}</div>
            <div className="card-body">
              <blockquote className="blockquote mb-0">
                <p>{valor.contenido}</p>
                <div>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => deleteReview(valor._id)}
                  >
                    ELIMINAR
                  </button>{" "}
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseExample"
                    aria-expanded="false"
                    aria-controls="collapseExample"
                  >
                    EDITAR
                  </button>
                  <hr />
                  <div class="collapse" id="collapseExample">
                    <EditarReview review={valor} reviewLS={review} />
                  </div>
                </div>
              </blockquote>
            </div>
          </div>
        );
      })}
    </main>
  );
};
