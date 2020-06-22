import React from "react";

function CovidNewsCard(props) {
    const { link, pubDate, source, title } = props;

    return (
        <div className="card news-card">
            <div className="card-body">
                <h5 className="card-title news-title">
                    {title ? title : "N/A"}
                </h5>
                <h6 className="card-subtitle news-subtitle mb-2 text-muted">
                    Source: {source ? source : "N/A"}
                </h6>
                <a href={link ? link : "N/A"} className="card-link news-link" target="_blank" rel="noopener noreferrer">
                    News Link
                </a>
                <p className="card-text news-text">
                    Published On: {pubDate ? pubDate : "N/A"}
                </p>
            </div>
        </div>
    );
}

export default CovidNewsCard;
