import React from "react";
import noImg from "../../assets/image/noImg.png";
import "./MovieCard.scss"
import { Link } from "react-router-dom";

const MovieCard = (props) => {
    const { data } = props;
    const imgUrl =
        data.primaryImage && data.primaryImage.url
            ? data.primaryImage.url
            : noImg;
    const movieTitle =
        data &&
        data.primaryImage &&
        data.primaryImage.caption &&
        data.primaryImage.caption.plainText
            ? data.primaryImage.caption.plainText
            : "No Title";

            const releaseYear =
            data &&
            data.releaseYear &&
            data.releaseYear.year 
                ? data.releaseYear.year 
                : "No Info";
                const movieId = data.id

    return (
        <div className="card-item">
            <Link to={`/movie/${movieId}`}>

            <div className="card-inner">
                <div className="card-top">
                    <img src={imgUrl} alt={data.titleText.text} />:
                </div>
                <div className="card-bottom">
                    <div className="card-info">
                        <h4>{movieTitle}</h4>
                        <p>{releaseYear}</p>
                    </div>
                </div>
            </div>
            </Link>
        </div>
    );
};

export default MovieCard;
