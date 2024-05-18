const MovieReview = ({ content, createdDate, points, checkPoints }) => {
    return (
        <li className="MovieReview">
            <div className="review_txt"><span>관람객 리뷰</span>: {content}</div>
            <div className="points_date_wrap">
                <span className="review_points">{points} {checkPoints(points)}</span>
                <span className="review_date">{new Date(createdDate).toLocaleString()}</span>
            </div>
        </li>
    );
}
export default MovieReview;