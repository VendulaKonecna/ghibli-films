import { NavLink } from "react-router-dom"

const FilmCard = ({ id, title, image }) => {
  return (
    <NavLink to={`/films/${id}`} className="film-card">
      <div className="film-card__content">
        <img src={image} alt={title} className="film-card__image" />
        <h3 className="film-card__title">{title}</h3>
      </div>
    </NavLink>
  );
};

export default FilmCard