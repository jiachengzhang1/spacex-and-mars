import React from "react";

const Card = ({ newsDetail }) => {
    const { title, summary, publishedAt, newsSite, url, imageUrl } = newsDetail;

    return (
        <div className="news-card">
            <div className="row">
                <div className="col-md-2 news-date">
                    <span>{getDateString(publishedAt)}</span>
                </div>
                <div className="col-md-6 news-content">
                    <h2>
                        <a href={url} rel="noopener noreferrer" target="_blank">
                            {title}
                        </a>
                    </h2>
                    <p>{summary}</p>
                    <p className="news-caption">
                        By{" "}
                        <a
                            href={getNewsSiteUrl(url)}
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            {newsSite}
                        </a>
                    </p>
                </div>
                <div className="col-md-4 news-image">
                    <img
                        src={imageUrl}
                        className="img-fluid"
                        alt="Responsive image"
                    />
                </div>
            </div>
        </div>
    );
};

function getDateString(date) {
    const d = new Date(date).toDateString().split(" ");
    return `${d[1]}. ${d[2]} ${d[3]}`;
}

function getNewsSiteUrl(url) {
    const u = url.split("/");
    return `${u[0]}//${u[2]}`;
}

export default Card;
