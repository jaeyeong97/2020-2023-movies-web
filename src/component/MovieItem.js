import { useState } from "react";
import MovieModal from "./MovieModal.js";
const MovieItem = ({ id, age, title, rating, length, photo, director, actors, summary, checkRating }) => {
    const [isModal, setIsModal] = useState(false)
    const openModal = () => {
        setIsModal(true);
        document.body.style.overflow = 'hidden';
    }
    const closeModal = () => {
        setIsModal(false);
        document.body.style.overflow = 'auto';
    }
    return (
        <li className="movieItem">
            <div className="photo_wrap">
                <div className="photo">
                    <img src={photo} alt="img" />
                </div>
                <div className="learnMore">
                    <button onClick={openModal}>상세보기</button>
                </div>
            </div>
            <div className="movie_txt">
                <div className="mt1">
                    <span className="age">{age}</span>
                    <span className="title">{title}</span>
                </div>
                <div className="mt2">
                    <span className="rating">
                        평점 : {rating} {checkRating(rating)}
                    </span>
                    <span className="length">{length}</span>
                </div>
            </div>
            <div className={isModal ? 'modal show' : 'modal'}>
                <MovieModal
                    closeModal={closeModal}
                    id={id}
                    age={age}
                    title={title}
                    rating={rating}
                    length={length}
                    photo={photo}
                    director={director}
                    actors={actors}
                    summary={summary}
                    checkRating={checkRating}
                />
            </div>
        </li>
    );
}
export default MovieItem;