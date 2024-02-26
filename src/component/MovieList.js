import MovieItem from "./MovieItem.js";

const MovieList = ({ category, movies, search }) => {
    const moviesFilter = (category) === '전체'
        ? movies
        : movies.filter((it) => (it.cate === category))

    const searchResult = (moviesToFilter) => {
        return search === ''
            ? moviesToFilter
            : moviesToFilter.filter((it) =>
                it.title.toLowerCase().includes(search.toLowerCase())
            )
    }

    const checkRating = rating => {
        const changeToNum = parseFloat(rating);
        if (!isNaN(changeToNum)) {
            if (rating >= 9) {
                return '⭐⭐⭐⭐⭐';
            } else if (rating >= 8.5) {
                return '⭐⭐⭐⭐';
            } else if (rating >= 7) {
                return '⭐⭐⭐';
            } else if (rating >= 6) {
                return '⭐⭐';
            } else {
                return '⭐';
            }
        } else {
            return '평점 정보 없음'
        }
    }

    const filteredMovies = searchResult(moviesFilter);
    return (
        <ul className="movieList">
            {filteredMovies.map(i => (
                <MovieItem key={i.id} {...i} checkRating={checkRating} />
            ))}
        </ul>
    );
}
export default MovieList;