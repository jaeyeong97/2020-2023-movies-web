import { useEffect, useRef, useState } from "react";
import MovieReview from "./MovieReview";

const MovieModal = ({ closeModal, id, age, title, rating, length, photo, director, actors, summary, checkRating }) => {
    const dataId = useRef(0)
    const [review, setReview] = useState('');
    const [reviewData, setReviewData] = useState([])
    const [points, setPoints] = useState('10점')

    // 로컬 스토리지에서 불러오기
    useEffect(() => {
        const rv = JSON.parse(localStorage.getItem(`rv_${id}`)) || '';
        setReviewData(rv);
        dataId.current = rv.length ? rv[0].id + 1 : 0; // dataId를 다음 id로 조정
    }, [id]);

    // 로컬 스토리지에 리뷰 저장
    useEffect(() => {
        localStorage.setItem(`rv_${id}`, JSON.stringify(reviewData));
    }, [reviewData, id]);

    const handlePoints = e => {
        setPoints(e.target.value)
    }
    const handleClose = () => closeModal(id)
    const handleReview = (e) => {
        setReview(e.target.value);
    }
    const createReview = (content, points) => {
        const createdDate = new Date().getTime();
        const newReview = {
            id: dataId.current,
            content: content,
            createdDate: createdDate,
            points: points
        }
        dataId.current += 1;
        setReviewData([newReview, ...reviewData])
    }
    const handleSaveReview = () => {
        if (review.length < 10) {
            window.alert('10글자 이상 작성하셔야 등록됩니다.')
            return;
        }
        createReview(review, points);
        setReview('');
        setPoints('10점')
    }
    const checkPoints = point => {
        if (point === '10점') {
            return '⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐';
        } else if (point === '9점') {
            return '⭐⭐⭐⭐⭐⭐⭐⭐⭐';
        } else if (point === '8점') {
            return '⭐⭐⭐⭐⭐⭐⭐⭐';
        } else if (point === '7점') {
            return '⭐⭐⭐⭐⭐⭐⭐';
        } else if (point === '6점') {
            return '⭐⭐⭐⭐⭐⭐';
        } else if (point === '5점') {
            return '⭐⭐⭐⭐⭐';
        } else if (point === '4점') {
            return '⭐⭐⭐⭐';
        } else if (point === '3점') {
            return '⭐⭐⭐';
        } else if (point === '2점') {
            return '⭐⭐';
        } else if (point === '1점') {
            return '⭐';
        }
    }
    const enterKeyDown = (e) => {
        if (e.keyCode === 13) {
            handleSaveReview()
        }
    }
    return (
        <div className="movieModal">
            <div>
                <button
                    className="modalClose"
                    onClick={handleClose}>
                </button>
            </div>
            <div className="modal_wrap">
                <div className="photo">
                    <img src={photo} alt="img" />
                </div>
                <div className="contents">
                    <span className="title">{title}</span>
                    <div className="arl">
                        <span className="age">{age}</span>
                        <span className="rating">평점: {rating} {checkRating(rating)}</span>
                        <span className="length">{length}</span>
                    </div>
                    <span className="summary">{summary}</span>
                    <span className="director">감독 : {director}</span>
                    <span className="actors">출연배우 : {actors}</span>
                    <div className="review">
                        <input
                            type="text"
                            value={review}
                            onChange={handleReview}
                            onKeyDown={enterKeyDown}
                            placeholder="리뷰를 작성하세요."
                        />
                        <select
                            value={points}
                            onChange={handlePoints}
                        >
                            <option value={'10점'}>10점</option>
                            <option value={'9점'}>9점</option>
                            <option value={'8점'}>8점</option>
                            <option value={'7점'}>7점</option>
                            <option value={'6점'}>6점</option>
                            <option value={'5점'}>5점</option>
                            <option value={'4점'}>4점</option>
                            <option value={'3점'}>3점</option>
                            <option value={'2점'}>2점</option>
                            <option value={'1점'}>1점</option>
                        </select>
                        <button onClick={handleSaveReview}>등록</button>
                    </div>
                    <ul>
                        {reviewData.map((it) => (
                            <MovieReview {...it} key={it.id} checkPoints={checkPoints} />
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
export default MovieModal;