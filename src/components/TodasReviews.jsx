import React, { useEffect, useState } from "react";
import { BiStar } from "react-icons/bi";

export const TodasReviews = () => {
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

  useEffect(() => {
    getReview();
  }, []);

  return (
    <main className="container todas-reviews">
      {review.length === 0 && <h3>No hay reviews guardadas</h3>}
      {review.map((valor) => {
        return (
          <div className="card" key={valor._id}>
            <div className="card-header">{valor.titulo}</div>
            <div className="card-body">
              <blockquote className="blockquote mb-0">
                <p>{valor.contenido}</p>
                <footer className="blockquote-footer">
                  Autor |{" "}
                  <cite title="Source Title">
                    {valor.calificacion} <BiStar />
                  </cite>
                </footer>
              </blockquote>
            </div>
          </div>
        );
      })}
    </main>
  );
};
