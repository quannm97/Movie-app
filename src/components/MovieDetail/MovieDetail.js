import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
    fetchAsyncMovieOrShowDetail,
    fetchAsyncRating,
    getSelectedMovieOrShow,
    getSelectedMovieRating,
    removeSelectedMovieOrShow,
} from "../../features/movies/movieSlice";
import "./MovieDetail.scss";
const MovieDetail = () => {
    const { movieId } = useParams();
    const dispatch = useDispatch();
    const data = useSelector(getSelectedMovieOrShow);
    const rating = useSelector(getSelectedMovieRating);
    console.log(rating);

    useEffect(() => {
        dispatch(fetchAsyncMovieOrShowDetail(movieId));
        dispatch(fetchAsyncRating(movieId));
        return () => {
            dispatch(removeSelectedMovieOrShow());
        };
    }, [dispatch, movieId]);

    return (
        <div className="movie-selection">
            {Object.keys(data).length === 0 ? (
                <div>...Loading</div>
            ) : (
                <>
                    <div className="section-left">
                        <div className="movie-title">
                            {data.results.originalTitleText.text}
                        </div>
                        <ul className="movie-rating">
                            <li>
                                IMDB Rating <i className="fa fa-star"></i>:
                                {rating.results.averageRating}
                            </li>
                            <li>
                                IMDB Votes <i className="fa fa-thumbs-up"></i>:
                                {rating.results.numVotes}
                            </li>
                            <li>
                                Year <i className="fa fa-film"> </i>:
                                {data.results.releaseYear.year}
                            </li>
                            <li>
                                Calendar <i className="fa fa-calendar"></i>:
                            </li>
                        </ul>
                        <div className="movie-plot"></div>
                        <div className="movie-info">
                            <div>
                                <span>Director</span>
                                <span></span>
                            </div>
                            <div>
                                <span>Stars</span>
                                <span></span>
                            </div>
                            <div>
                                <span>Generes</span>
                                <span></span>
                            </div>
                            <div>
                                <span>Langues</span>
                                <span></span>
                            </div>
                        </div>
                    </div>
                    <div className="section-right">
                        <img
                            src={data.results.primaryImage.url}
                            alt={data.results.primaryImage.caption.plainText}
                        />
                    </div>
                </>
            )}
        </div>
    );
};

export default MovieDetail;
