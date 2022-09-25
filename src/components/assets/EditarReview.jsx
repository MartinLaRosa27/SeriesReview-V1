import React, { useState } from "react";
import { Helmet } from "react-helmet";
import shortid from "shortid";

export const EditarReview = (props) => {
  const [review, setReview] = useState({
    _id: shortid.generate(),
    titulo: "",
    contenido: "",
    calificacion: 0,
  });

  const patchReview = (e) => {
    e.preventDefault();
    // Crea un array sin el elemento a eliminar:
    const nuevoArray = props.reviewLS.filter(
      (valor) => valor._id !== props.review._id
    );
    //Modifica el LS sin el elemento:
    localStorage.setItem("reviewStorage", JSON.stringify(nuevoArray));
    // Verifica si hay elementos guardados en el LS:
    let elementos = JSON.parse(localStorage.getItem("reviewStorage"));
    // Comprueba si hay guardado un array:
    if (Array.isArray(elementos)) {
      // Agrega elemento a Array:
      elementos.push(review);
    } else {
      // Crea un array:
      elementos = [review];
    }
    // Guarda en el LS:
    localStorage.setItem("reviewStorage", JSON.stringify(elementos));
    // Recarga Componente:
    window.location.reload();
  };

  return (
    <div className="container publiar-review">
      <Helmet>
        <title>Publicar Review | SeriesReview</title>
      </Helmet>
      <form onSubmit={(e) => patchReview(e)}>
        <div className="mb-3 publicar-review">
          <label htmlFor="titulo" className="form-label">
            Titulo Serie
          </label>
          <input
            type="text"
            className="form-control"
            name="titulo"
            maxLength="25"
            minLength="3"
            placeholder={props.review.titulo}
            required
            value={review.titulo}
            onChange={(e) =>
              setReview({
                ...review,
                [e.target.name]: e.target.value,
              })
            }
          ></input>
        </div>
        <div className="mb-3">
          <label htmlFor="contenido" className="form-label">
            Review
          </label>
          <input
            type="text"
            className="form-control"
            name="contenido"
            placeholder={props.review.contenido}
            maxLength="90"
            minLength="3"
            value={review.contenido}
            onChange={(e) =>
              setReview({
                ...review,
                [e.target.name]: e.target.value,
              })
            }
          ></input>
        </div>
        <div className="mb-3">
          <label htmlFor="calificacion" className="form-label">
            Calificacion
          </label>
          <select
            className="form-select text-uppercase"
            aria-label="Default select example "
            name="calificacion"
            required
            value={review.calificacion}
            onChange={(e) =>
              setReview({
                ...review,
                [e.target.name]: e.target.value,
              })
            }
          >
            <option defaultValue="5">Excelente</option>
            <option value="4">Muy buena</option>
            <option value="3">buena</option>
            <option value="2">regular</option>
            <option value="1">mala</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          Editar
        </button>
      </form>
    </div>
  );
};
