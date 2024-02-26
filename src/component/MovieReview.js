const MovieReview = ({id, content, createdDate, points, checkPoints}) => {
    return (
        <li className="MovieReview">
            <span>관람객 리뷰 : {content}</span>
            <span>{new Date(createdDate).toLocaleString()}</span>
            <span>{points} {checkPoints(points)}</span>
        </li>
    );
}
export default MovieReview;